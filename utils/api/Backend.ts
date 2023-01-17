import { BNToNumstr } from './../BigNumber'
import { useStore } from '~~/store/useStore'
import { useInfoStore } from '~~/store/useInfoStore'
import { BigNumber } from 'ethers'
import axios from 'axios'
import { PublicKey, Transaction, SystemProgram, Signer } from '@solana/web3.js'
import { BN, Provider, web3, utils } from '@project-serum/anchor'

import WalletConnectProvider from '@walletconnect/web3-provider'

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
import { useSelectStore } from '../../store/useSelectStore'

export const back_url = 'https://zip-backend-v2.test.neonomad.io/'
// export const back_url = 'https://bridge-backend.neonomad.exchange'

export const callToBack = async (address: string, direction: string, back_url: string) => {
  if (!back_url) {
    throw new Error('Backend url is not specified')
  }
  console.log('call to back')
  console.log('address: ', address)
  console.log('direction', direction)
  await axios.post(
    '',
    {
      address: address,
      direction: direction,
    },
    { baseURL: back_url }
  )
}

export const checkBackend = async (back_url: string) => {
  const info = useInfoStore()
  if (!back_url) {
    info.backendIsDown = true
    info.showMessage('error', 'Backend url is not specified')

    throw new Error('Backend url is not specified')
  }
  try {
    await axios.get('ping', { baseURL: back_url })
  } catch (error) {
    info.backendIsDown = true
    info.showMessage('error', 'Backend is down, try the bridge the other time :)')
    throw new Error('Backend is down, try the bridge the other time :)')
  }
}

export const metamaskOldLock = async (address: string) => {
  const store = useStore()
  const select = useSelectStore()
  const newOldLock = store.oldLock
  // const lockInfoEth = await ethBridgeContract.checkUserLock(address)
  const lockInfoBsc = await bscBridgeContract.checkUserLock(address)
  // if (lockInfoEth.amount.eq(BigNumber.from(0))) {
  //   newOldLock.eth = {
  //     isOldLock: false,
  //     amount: BigNumber.from(0),
  //     address: '',
  //   }
  // } else {
  //   // newOldLock.eth = {
  //   //   isOldLock: true,
  //   //   amount: lockInfoEth.amount,
  //   //   address: lockInfoEth.targetAddr,
  //   // }
  // }
  if (lockInfoBsc.amount.eq(BigNumber.from(0))) {
    newOldLock.bsc = {
      isOldLock: false,
      amount: BigNumber.from(0),
      address: '',
    }
  } else {
    newOldLock.bsc = {
      isOldLock: true,
      amount: lockInfoBsc.amount,
      address: lockInfoBsc.targetAddr,
    }
    // store.inputAmountString = BNToNumstr(lockInfoBsc.amount.div(BigNumber.from(10).pow(12)), 18, 3)
  }

  if (select.getFrom.label === 'Binance Smart Chain' && newOldLock.bsc.isOldLock) {
    store.inputAmount = newOldLock.bsc.amount.div(BigNumber.from(10).pow(12))
    store.inputAmountString = BNToNumstr(newOldLock.bsc.amount, 18, 3)
    store.walletAddressTo = newOldLock.bsc.address
  } else if (select.getFrom.label === 'Ethereum' && newOldLock.eth.isOldLock) {
    store.inputAmount = newOldLock.eth.amount.div(BigNumber.from(10).pow(12))
    store.walletAddressTo = newOldLock.eth.address
    store.inputAmountString = BNToNumstr(newOldLock.eth.amount, 18, 3)
  } else if (select.getFrom.label === 'Binance Smart Chain' && !newOldLock.bsc.isOldLock) {
    store.walletAddressTo = ''
  } else if (select.getFrom.label === 'Ethereum' && !newOldLock.eth.isOldLock) {
    store.walletAddressTo = ''
  }
}

export const solanaOldLock = async (wallet) => {
  const store = useStore()
  const newOldLock = store.oldLock

  try {
    const [lockPublicKey, _] = await PublicKey.findProgramAddress([utils.bytes.utf8.encode('LOCK'), wallet.publicKey.toBuffer()], store.solanaProgram.programId)
    const lockInfo = await store.solanaProgram.account.lockInfo.fetch(lockPublicKey)
    let address = toHexString(lockInfo.target)
    console.log(address)
    console.log(lockInfo.target)

    if (!lockInfo.amount.isZero()) {
      store.oldLock.sol = {
        isOldLock: true,
        amount: BigNumber.from(lockInfo.amount.toString()),
        address: toHexString(lockInfo.target),
        ethereum: lockInfo.ethereum,
      }
      store.inputAmount = BigNumber.from(lockInfo.amount.toString())
      store.inputAmountString = BNToNumstr(store.inputAmount, 6, 3)
      store.walletAddressTo = toHexString(lockInfo.target)
    }
  } catch (error) {
    return false
  }
}

export function toHexString(byteArray) {
  var s = '0x'
  byteArray.forEach(function (byte) {
    s += ('0' + (byte & 0xff).toString(16)).slice(-2)
  })
  return s
}
