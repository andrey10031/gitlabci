import { BigNumber, providers } from 'ethers'
import { Token, BridgeAssist } from '../../typechain-types'
import { BSC_RPC, ETH_RPC } from '../../abis/config.json'
import { checkBackend, callToBack, back_url } from './Backend'
import { OldLock } from '../types'
import {
  bscBridgeContract,
  bscTokenContract,
  ethBridgeContract,
  ethTokenContract,
  getBscBridgeSigner,
  getEthBridgeSigner,
  getEthTokenSigner,
  getBscTokenSigner,
} from '../contracts'

import { address as bscBridgeAddr } from '../../abis/bsc/BridgeAssist.json'
import { address as ethBridgeAddr } from '../../abis/eth/BridgeAssist.json'
import { WalletNotConnectedError } from '@solana/wallet-adapter-base'
import { useTransactionStore } from '~~/store/useTransactionStore'
import { useInfoStore } from '~~/store/useInfoStore'

import { BN, Provider, web3, utils } from '@project-serum/anchor'
import { PublicKey, Transaction, SystemProgram, Signer } from '@solana/web3.js'
import { bridgeTokenAddress, mintAddress } from '~~/abis/config.json'
import { hexStringToByteArray, safe } from '../hexBytesConverter'

import { createTokenAccount, getTokenAccount, sleep } from '@project-serum/common'
import { TokenInstructions } from '@project-serum/serum'
import { BNToNumstr, numstrToBN } from '../BigNumber'
import { toHexString } from './Backend'

async function getSettingsAccount(program) {
  const [settingsPDA, _] = await PublicKey.findProgramAddress([utils.bytes.utf8.encode('SETTINGS')], program.programId)
  return settingsPDA
}

export const bridgeToSolana = async (destination: string, amount: number | BigNumber, store: any) => {
  if (!store.BeSigner) {
    throw new Error('Please connect your MetaMask wallet')
  }
  const transaction = useTransactionStore()
  const info = useInfoStore()

  await checkBackend(back_url)

  let amountBN = BigNumber.from(amount).mul(BigNumber.from(10).pow(12))
  let requiredConfirmations: number = 20
  let result
  let tx
  let args: {
    tokenContract: Token | null
    tokenSigner: Token | null
    bridgeContract: BridgeAssist | null
    bridgeSigner: BridgeAssist | null
    bridgeAddress: string | null
    direction: string | null
    rpc: string | null
    isOldLock: boolean
    oldLockAmount: number | BigNumber
  } = {
    tokenContract: null,
    tokenSigner: null,
    bridgeContract: null,
    bridgeSigner: null,
    bridgeAddress: null,
    direction: null,
    rpc: null,
    isOldLock: false,
    oldLockAmount: BigNumber.from(0),
  }

  store.ethereum
    ? ((args.tokenContract = ethTokenContract),
      (args.tokenSigner = getEthTokenSigner(store.BeSigner())),
      (args.bridgeContract = ethBridgeContract),
      (args.bridgeSigner = getEthBridgeSigner(store.BeSigner())),
      (args.bridgeAddress = ethBridgeAddr),
      (args.direction = 'ETH_TO_SOLANA'),
      (transaction.from = 'eth'),
      (args.rpc = ETH_RPC),
      (args.isOldLock = store.oldLock.eth.isOldLock),
      (args.oldLockAmount = store.oldLock.eth.amount))
    : ((args.tokenContract = bscTokenContract),
      (args.tokenSigner = getBscTokenSigner(store.BeSigner())),
      (args.bridgeContract = bscBridgeContract),
      (args.bridgeSigner = getBscBridgeSigner(store.BeSigner())),
      (args.bridgeAddress = bscBridgeAddr),
      (args.direction = 'BSC_TO_SOLANA'),
      (transaction.from = 'bsc'),
      (args.rpc = BSC_RPC),
      (args.isOldLock = store.oldLock.bsc.isOldLock),
      (args.oldLockAmount = store.oldLock.bsc.amount))

  const provider = new providers.JsonRpcProvider(args.rpc)

  if (args.isOldLock) {
    transaction.to = 'sol'
    transaction.amount = BNToNumstr(args.oldLockAmount, 18, 3)
    transaction.firstStart = true
    transaction.setShow()
    transaction.firstStageInfo = 'Using old lock'
    await sleep(2000)
    let initialBlockNumber = await provider.getBlockNumber()
    let currentConfirmation = 0
    transaction.firstStageInfo = 'Wait for confirmations'
    while (currentConfirmation < requiredConfirmations) {
      let currentBlockNumber = await provider.getBlockNumber()
      if (currentBlockNumber < initialBlockNumber) {
        info.showMessage('error', 'Chain was changed')
        transaction.$reset()
        throw new Error('Chain was changed')
      }
      currentConfirmation = currentBlockNumber - initialBlockNumber
      if (currentConfirmation > requiredConfirmations) currentConfirmation = requiredConfirmations
      transaction.step = currentConfirmation
      await sleep(5000)
    }
    const userLock = await args.bridgeContract.checkUserLock(store.BeWallet)

    if (userLock.amount.eq(BigNumber.from(0))) {
      info.showMessage('error', 'Chain was changed')
      transaction.$reset()
      throw new Error('Chain was changed')
    }
    result = 'Using old lock'
    transaction.firstFinished = true
    transaction.firstStageInfo = 'Success!'
  } else {
    const allowance = await args.tokenContract.allowance(store.BeWallet, args.bridgeAddress)
    if (allowance.lt(amountBN)) {
      try {
        tx = await args.tokenSigner.approve(args.bridgeAddress, amountBN)
      } catch (error) {
        console.error(error)
        info.showMessage('error', 'transaction was declined')
        return false
      }
      await tx.wait()
    }

    transaction.to = 'sol'
    transaction.amount = BNToNumstr(amountBN, 18, 3)
    transaction.firstStart = true
    transaction.setShow()

    console.log('Creating new lock')
    transaction.firstStageInfo = 'Creating new Lock'
    console.log(amountBN)
    try {
      tx = await args.bridgeSigner.upload(amountBN, destination)
      const gasPrice: BigNumber = tx.gasPrice
      console.log(tx.hash)

      tx = await tx.wait()
      const uploadFee = gasPrice.mul(tx.gasUsed)
      transaction.nativeFee = uploadFee
      console.log(tx)

      let txBlockNumber = tx.blockNumber
      console.log(txBlockNumber)
      let initialBlockNumber = txBlockNumber
      let currentConfirmation = 0
      transaction.firstStageInfo = 'wait for confirmations'
      while (currentConfirmation < requiredConfirmations) {
        let currentBlockNumber = await provider.getBlockNumber()
        if (currentBlockNumber < tx.blockNumber) {
          info.showMessage('error', 'Chain was changed')
          transaction.$reset()
          throw new Error('Chain was changed')
        }
        currentConfirmation = currentBlockNumber - initialBlockNumber
        if (currentConfirmation > requiredConfirmations) currentConfirmation = requiredConfirmations
        transaction.step = currentConfirmation
        await sleep(5000)
      }

      transaction.firstFinished = true
      transaction.firstStageInfo = 'Success!'
    } catch (error) {
      console.error(error)
      info.showMessage('error', 'transaction was declined')
      transaction.$reset()
      return false
    }
    result = 'New lock created'
  }

  transaction.secondStart = true
  await callToBack(store.BeWallet, args.direction, back_url)
    .then(() => {
      store.ethereum
        ? (store.oldLock.eth = {
            isOldLock: false,
            amount: 0,
            address: '',
          })
        : (store.oldLock.bsc = {
            isOldLock: false,
            amount: 0,
            address: '',
          })
      transaction.secondFinished = true
      transaction.secondStageInfo = 'Success'
      store.BeBalance = store.BeBalance.sub(amountBN)
      transaction.$reset()
      info.showMessage('success', 'Transaction was successfull', tx.transactionHash)
    })
    .catch(async (err) => {
      transaction.$reset()
      if (err.message === 'Network Error') {
        info.showMessage('error', 'Backend is down')
      } else {
        info.showMessage('error', err)
      }
      let lockInfo = await args.bridgeContract.checkUserLock(store.BeWallet)
      if (store.ethereum) {
        if (lockInfo.amount.eq(BigNumber.from(0))) {
          store.oldLock.eth = {
            isOldLock: false,
            amount: BigNumber.from(0),
            address: '',
          }
        } else {
          store.oldLock.eth = {
            isOldLock: true,
            amount: lockInfo.amount,
            address: lockInfo.targetAddr,
          }
          store.inputAmount = store.oldLock.eth.amount.div(BigNumber.from(10).pow(12))
          store.walletAddressTo = store.oldLock.eth.address
        }
      } else {
        if (lockInfo.amount.eq(BigNumber.from(0))) {
          store.oldLock.bsc = {
            isOldLock: false,
            amount: BigNumber.from(0),
            address: '',
          }
        } else {
          store.oldLock.bsc = {
            isOldLock: true,
            amount: lockInfo.amount,
            address: lockInfo.targetAddr,
          }
          store.inputAmount = store.oldLock.bsc.amount.div(BigNumber.from(10).pow(12))
          store.walletAddressTo = store.oldLock.bsc.address
        }
      }
    })
  return result
}

export const bridgeToBSC = async (destination: string, amount: number | BN, store: any) => {
  let direction: string
  let amountBN = BigNumber.from(amount).mul(BigNumber.from(10).pow(12))
  const transaction = useTransactionStore()
  const info = useInfoStore()
  store.ethereum ? ((direction = 'SOLANA_TO_ETH'), (transaction.to = 'eth')) : ((direction = 'SOLANA_TO_BSC'), (transaction.to = 'bsc'))
  console.log(destination, amount)
  transaction.from = 'sol'
  if (!store.solanaProgram || !store.solanaConnection) {
    throw new WalletNotConnectedError('Please connect your Phantom wallet')
  }
  await checkBackend(back_url)
  if (destination.length == 42) {
    destination = destination.slice(2, destination.length)
  }

  const mintPublicKey = new PublicKey(mintAddress)
  let bscAddress = hexStringToByteArray(destination)
  let userTokenAccounts = await store.solanaConnection.getTokenAccountsByOwner(store.solanaWallet.publicKey, { mint: mintPublicKey })
  let userTokenAccount
  if (userTokenAccounts.value.length > 0) {
    userTokenAccount = userTokenAccounts.value[0].pubkey
  } else {
    const preflightCommitment = 'processed'
    const commitment = 'confirmed'
    const provider = new Provider(store.solanaConnection, store.solanaWallet, {
      preflightCommitment,
      commitment,
    })
    userTokenAccount = await createTokenAccount(provider, mintPublicKey, store.solanaWallet.publicKey)
  }

  const [lockPublicKey, _] = await PublicKey.findProgramAddress(
    [utils.bytes.utf8.encode('LOCK'), store.solanaWallet.publicKey.toBuffer()],
    store.solanaProgram.programId
  )
  console.log('lockPublicKey: ', lockPublicKey)

  let tx
  const solanaAmount = new BN(amount.toString())
  try {
    const lockInfo = await store.solanaProgram.account.lockInfo.fetch(lockPublicKey)
    if (!lockInfo.amount.isZero()) {
      let lockInfoStr = lockInfo.amount.toString().slice(0, -6) + '.' + lockInfo.amount.toString().slice(-6)

      transaction.amount = BNToNumstr(numstrToBN(lockInfoStr, 6), 6, 3)
      transaction.firstStart = true
      lockInfo.ethereum ? ((direction = 'SOLANA_TO_ETH'), (transaction.to = 'eth')) : ((direction = 'SOLANA_TO_BSC'), (transaction.to = 'bsc'))

      transaction.setShow()
      console.log('Using old lock')
      transaction.firstStageInfo = 'Used old lock'
      transaction.firstFinished = true
      transaction.secondStart = true

      await callToBack(store.solanaWallet.publicKey.toBase58(), direction, back_url)
        .then(() => {
          store.oldLock.sol = {
            isOldLock: false,
            amount: 0,
            address: '',
            ethereum: false,
          }
          transaction.secondFinished = true
          transaction.secondStageInfo = 'Success'
          store.solanaBalance = store.solanaBalance.sub(BigNumber.from(amount))
          transaction.$reset()
          info.showMessage('success', 'Transaction was successfull', txId)
        })
        .catch((err) => {
          transaction.$reset()
          if (err.message === 'Network Error') {
            info.showMessage('error', 'Backend is down')
          } else {
            info.showMessage('error', err)
          }
        })
      return
    }

    transaction.amount = BNToNumstr(amountBN, 18, 3)
    transaction.firstStart = true
    transaction.setShow()
    transaction.firstStageInfo = 'Creating new lock'
    tx = store.solanaProgram.transaction.updateLock(bscAddress, solanaAmount, store.ethereum, {
      accounts: {
        user: store.solanaWallet.publicKey,
        userTokenAccount: userTokenAccount,
        pdaTokenAccount: new PublicKey(bridgeTokenAddress),
        settingsAccount: await getSettingsAccount(store.solanaProgram),
        lockAccount: lockPublicKey,
        tokenProgram: TokenInstructions.TOKEN_PROGRAM_ID,
      },
    })
    console.log(tx)
  } catch (error) {
    console.log(error)
    transaction.amount = BNToNumstr(amountBN, 18, 3)
    transaction.firstStart = true
    transaction.setShow()
    transaction.firstStageInfo = 'Creating new lock'
    tx = store.solanaProgram.transaction.collect(bscAddress, solanaAmount, store.ethereum, {
      accounts: {
        user: store.solanaWallet.publicKey,
        userTokenAccount: userTokenAccount,
        pdaTokenAccount: new PublicKey(bridgeTokenAddress),
        settingsAccount: await getSettingsAccount(store.solanaProgram),
        lockAccount: lockPublicKey,
        tokenProgram: TokenInstructions.TOKEN_PROGRAM_ID,
        systemProgram: SystemProgram.programId,
      },
    })
  }
  tx.feePayer = store.solanaProgram.provider.wallet.publicKey
  tx.recentBlockhash = (await store.solanaProgram.provider.connection.getLatestBlockhash()).blockhash
  let signedTx
  try {
    signedTx = await store.solanaProgram.provider.wallet.signTransaction(tx)
  } catch (error) {
    console.error(error)
    info.showMessage('error', 'transaction was declined')
    transaction.$reset()
    return false
  }
  let txId
  try {
    txId = await store.solanaProgram.provider.connection.sendRawTransaction(signedTx.serialize())
  } catch (err) {
    console.error(err)
    transaction.$reset()

    info.showMessage('error', err)
    return false
  }

  await store.solanaProgram.provider.connection.confirmTransaction(txId)
  console.log(txId)

  transaction.firstFinished = true
  transaction.firstStageInfo = 'Success'
  transaction.secondStart = true

  await callToBack(store.solanaWallet.publicKey.toBase58(), direction, back_url)
    .then(() => {
      store.oldLock.sol = {
        isOldLock: false,
        amount: 0,
        address: '',
        ethereum: false,
      }
      transaction.secondFinished = true
      transaction.secondStageInfo = 'Success'
      store.solanaBalance = store.solanaBalance.sub(BigNumber.from(amount))
      transaction.$reset()
      info.showMessage('success', 'Transaction was successfull', txId)
    })
    .catch(async (err) => {
      transaction.$reset()
      if (err.message === 'Network Error') {
        info.showMessage('error', 'Backend is down')
      } else {
        info.showMessage('error', err)
      }
      try {
        const [lockPublicKey, _] = await PublicKey.findProgramAddress(
          [utils.bytes.utf8.encode('LOCK'), store.solanaWallet.publicKey.toBuffer()],
          store.solanaProgram.programId
        )
        const lockInfo = await store.solanaProgram.account.lockInfo.fetch(lockPublicKey)
        if (!lockInfo.amount.isZero()) {
          store.oldLock.sol = {
            isOldLock: true,
            amount: BigNumber.from(lockInfo.amount.toString()),
            address: toHexString(lockInfo.target),
            ethereum: lockInfo.ethereum,
          }
          store.inputAmount = BigNumber.from(lockInfo.amount.toString())
          store.walletAddressTo = toHexString(lockInfo.target)
        }
      } catch (error) {
        return false
      }
    })
  return txId
}
