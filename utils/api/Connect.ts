import { useInfoStore } from '~~/store/useInfoStore'
import { useStore } from '~~/store/useStore'
import { useSelectStore } from './../../store/useSelectStore'
import { ethTokenContract } from './../contracts'
import { providers, BigNumber } from 'ethers'
import { bscTokenContract } from '../contracts'
import { BSC_RPC, ETH_RPC } from '../../abis/config.json'

import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom'
import { clusterApiUrl, Connection, PublicKey } from '@solana/web3.js'
import { Program, Provider, BN } from '@project-serum/anchor'
import { getTokenAccount } from '@project-serum/common'

import { mintAddress, programId, SOLANA_NETWORK, SOLANA_WS_NETWORK } from '../../abis/config.json'

import idl from '../../abis/solana_bridge.json'
import { metamaskOldLock, solanaOldLock } from './Backend'
import WalletConnectProvider from '@walletconnect/web3-provider'

declare let window: any

let provider = new WalletConnectProvider({
  qrcode: true,
  rpc: {
    56: 'https://bsc-dataseed1.binance.org/',
    1: 'https://2EoH7jkG5rgWgArk4sedDaSGpDo:d9792a5d804e5bf6a694ec4be5ab0fb8@eth2-beacon-mainnet.infura.io',
  },
  pollingInterval: 150000,
})

export const metamask = async (eth: boolean) => {
  const store = useStore()
  const info = useInfoStore()
  const select = useSelectStore()
  console.log("1")
  if (!window.ethereum) {
    throw new Error('Please set up MetaMask properly')
  } else {
    window.ethereum.on('chainChanged', async (chainId: number) => {
      store.invalidWCProvider = true
      if (chainId == 1 || chainId == 56) {
        // alert(1)
        store.invalidWCProvider = false
        if (chainId == 1) {
          info.showMessage('error', 'The choosen chain is not supported!')
          store.ethereum = false
          store.invalidWCProvider = true
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x38' }],
          }).then(async(response) => {
            store.ethereum = false
            store.invalidWCProvider = false
            await changeStore(false)
            select.from = { label: 'Binance Smart Chain', img: 'binance' }
          })
        } else if (chainId == 56) {
          store.ethereum = false
          await changeStore(false)
          select.from = { label: 'Binance Smart Chain', img: 'binance' }
        }
        select.validateSelect(select.from, select.to)
      } else {
        try {
          info.showMessage('error', 'The choosen chain is not supported!')
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x38' }],
          })
          store.ethereum = false
          store.invalidWCProvider = false
          await changeStore(false)
          select.from = { label: 'Binance Smart Chain', img: 'binance' }
          select.validateSelect(select.from, select.to)
        } catch (error) {
          store.invalidWCProvider = true
          info.showMessage('error', 'The choosen chain is not supported!')
          return false
        }
      }
    })

    window.ethereum.on('accountsChanged', async (accounts: string[]) => {
      if (window.ethereum.chainId == 56) {
        const store = useStore()
        const web3Provider = new providers.Web3Provider(window.ethereum)
        const singer = web3Provider.getSigner()
        const wallet = await singer.getAddress()
        store.BeProvider = () => web3Provider
        store.BeSigner = () => singer
        store.BeWallet = wallet
        store.invalidWCProvider = false
        let balance
        if (window.ethereum.chainId == 1) {
          balance = await ethTokenContract.balanceOf(wallet)
        } else if (window.ethereum.chainId == 97) {
          balance = await bscTokenContract.balanceOf(wallet)
        }
        store.BeBalance = balance
      } else {
        try {
          store.invalidWCProvider = true
          info.showMessage('error', 'The choosen chain is not supported!')
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x38' }],
          })
          store.ethereum = false
          store.invalidWCProvider = false
          await changeStore(false)
          select.from = { label: 'Binance Smart Chain', img: 'binance' }
          select.validateSelect(select.from, select.to)
        } catch (error) {
          store.invalidWCProvider = true
          info.showMessage('error', 'The choosen chain is not supported!')
          return false
        }
      }
    })

    window.ethereum.on('disconnect', (code: number, reason: string) => {
      store.BeProvider = null
      store.BeSigner = null
      store.BeWallet = null
      store.BeBalance = null
      store.BeProvider = null
    })

    let provider = new providers.Web3Provider(window.ethereum)
    await provider.send('eth_requestAccounts', [])
    // if (eth) {
    //   let isError = false
    //   let newEthereum = true
    //   try {
    //     await provider.send('wallet_switchEthereumChain', [{ chainId: '0x1' }])
    //   } catch (switchError) {
    //     newEthereum = false
    //     isError = true
        // if (switchError.code === 4902) {
        //   await provider.send('wallet_addEthereumChain', [
        //     {
        //       chainId: '0x1',
        //       chainName: 'Rinkeby',
        //       rpcUrls: ['https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
        //       nativeCurrency: {
        //         name: 'Rinkeby',
        //         symbol: 'ETH',
        //         decimals: 18,
        //       },
        //       blockExplorerUrls: ['https://rinkeby.etherscan.io/'],
        //     },
        //   ])
        // }
    //     if (store.BeWallet === null || store.BeWallet === undefined) {
    //       return { provider: null, signer: null, wallet: null, balance: null, newEthereum: true, isError: true }
    //     }
    //   }
    //   provider = new providers.Web3Provider(window.ethereum)
    //   const signer = provider.getSigner()
    //   const wallet = await signer.getAddress()
    //   const balance = await ethTokenContract.balanceOf(wallet)
    //   await metamaskOldLock(wallet)

    //   return { provider, signer, wallet, balance, newEthereum, isError }
    // } else {
      let isError = false
      let newEthereum = false
      try {
        await provider.send('wallet_switchEthereumChain', [{ chainId: '0x38' }])
      } catch (switchError) {
        // newEthereum = true
        isError = true
        if (switchError.code === 4902) {
          await provider.send('wallet_addEthereumChain', [
            {
              chainId: '0x38',
              chainName: 'BSC Mainnet',
              rpcUrls: ['https://bsc-dataseed1.binance.org/'],
              nativeCurrency: {
                name: 'BSC Mainnet',
                symbol: 'BNB',
                decimals: 18,
              },
              blockExplorerUrls: ['https://bscscan.com/'],
            },
          ])
        }
        if (store.BeWallet === null || store.BeWallet === undefined) {
          return { provider: null, signer: null, wallet: null, balance: null, newEthereum: false, isError: true }
        }
      }
      provider = new providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const wallet = await signer.getAddress()
      const balance = await bscTokenContract.balanceOf(wallet)
      await metamaskOldLock(wallet)
      return { provider, signer, wallet, balance, newEthereum, isError }
    }
  // }
}

export const phantom = async (isPhantom: boolean) => {
  const store = useStore()
  if ((!('solana' in window) || !window.solana.isPhantom) && isPhantom) {
    throw new Error('Please set up Phantom properly')
  }
  if (!window.solflare && !isPhantom) {
    throw new Error('Please set up Solflare properly')
  } 
  const preflightCommitment = 'processed'
  const commitment = 'confirmed'
  const wallet = isPhantom ? window.solana as PhantomWalletAdapter : window.solflare as PhantomWalletAdapter
  await wallet.connect()
  await solanaOldLock(wallet)
  const solanaConnection = new Connection(SOLANA_NETWORK, {'commitment': commitment, wsEndpoint: SOLANA_WS_NETWORK})

  let provider = new Provider(solanaConnection, wallet as any, {
    preflightCommitment,
    commitment,
  })
  const solanaProgram = new Program(JSON.parse(JSON.stringify(idl)), programId, provider)
  const mintPublicKey = new PublicKey(mintAddress)
  let userTokenAccounts = await solanaConnection.getTokenAccountsByOwner(wallet.publicKey, { mint: mintPublicKey })
  let userTokenAccountKey
  let solanaBalance
  if (userTokenAccounts.value.length > 0) {
    userTokenAccountKey = userTokenAccounts.value[0].pubkey
    let userTokenAccount = await getTokenAccount(provider, userTokenAccountKey)
    solanaBalance = BigNumber.from(userTokenAccount.amount.toString())
  }
  console.log(wallet.publicKey.toString())
  return { wallet, solanaConnection, solanaProgram, solanaBalance }
}

export const disconnectWc = async () => {
  // const store = useStore()

  // store.BeProvider = null
  // store.BeSigner = null
  // store.BeWallet = null
  // store.BeBalance = null
  // store.WCProvider = null
  // store.isWc = false
  await provider.disconnect()
}

export const switchWC = async (ethereum: boolean) => {
  const store = useStore()
  const select = useSelectStore()

  try {
    if (ethereum) {
      await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x1' }],
      })
    } else {
      await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x38' }],
      })
    }

    const web3Provider = new providers.Web3Provider(provider)
    const signer = web3Provider.getSigner()
    store.BeProvider = () => web3Provider
    store.BeSigner = () => signer
    const wallet = await signer.getAddress()

    // if (ethereum) {
    //   store.ethereum = true
    //   select.from = { label: 'Ethereum', img: 'ethereum' }
    //   store.BeBalance = await ethTokenContract.balanceOf(wallet)
    // } else {
      store.ethereum = false
      select.from = { label: 'Binance Smart Chain', img: 'binance' }
      store.BeBalance = await bscTokenContract.balanceOf(wallet)
    // }

    select.validateSelect(select.from, select.to)
  } catch (error) {
    const eth = store.ethereum
    // if (eth) {
      store.ethereum = false
      select.from = { label: 'Binance Smart Chain', img: 'binance' }
    // } else {
    //   store.ethereum = true
    //   select.from = { label: 'Ethereum', img: 'ethereum' }
    // }
    select.validateSelect(select.from, select.to)
    return false
  }
}

export const walletConnect = async (ethereum: boolean) => {
  const store = useStore()
  const select = useSelectStore()
  const info = useInfoStore()

  if (provider.isConnecting) {
    provider.disconnect()
    provider = new WalletConnectProvider({
      qrcode: true,
      rpc: {
        56: 'https://bsc-dataseed1.binance.org/',
        1: 'https://2EoH7jkG5rgWgArk4sedDaSGpDo:d9792a5d804e5bf6a694ec4be5ab0fb8@eth2-beacon-mainnet.infura.io',
      },
      pollingInterval: 150000,
    })
  }

  await provider
    .enable()
    .then(() => {})
    .catch(async (error) => {
      throw error
    })

  // Subscribe to chainId change
  provider.on('chainChanged', async (chainId: number) => {
    store.invalidWCProvider = true
    switch (chainId) {
      case 1:
        info.showMessage('error', 'The choosen chain is not supported!')
          store.ethereum = false
          store.invalidWCProvider = true
          await provider.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x38' }],
          }).then(async(response) => {
            store.ethereum = false
            store.invalidWCProvider = false
            await changeStore(false)
            select.from = { label: 'Binance Smart Chain', img: 'binance' }
          })
        // store.ethereum = true
        // await changeStore()
        // select.from = { label: 'Ethereum', img: 'ethereum' }
        break
      case 56:
        store.ethereum = false
        await changeStore()
        select.from = { label: 'Binance Smart Chain', img: 'binance' }
        break
      default:
        try {
          info.showMessage('error', 'The choosen chain is not supported!')
          // const chain = store.ethereum ? '0x1' : '0x38'
          await provider.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x38' }],
          })
          // store.ethereum = false
          store.invalidWCProvider = false
          await changeStore()
          select.from = { label: 'Binance Smart Chain', img: 'binance' }
          select.validateSelect(select.from, select.to)
        } catch (error) {
          store.invalidWCProvider = true
          info.showMessage('error', 'The choosen chain is not supported!')
        }
        break
    }
    return select.validateSelect(select.from, select.to)
  })

  // Subscribe to accounts change
  provider.on('accountsChanged', async (accounts: string[]) => {
    if (accounts[0] !== store.BeWallet) {
      const web3Provider = new providers.Web3Provider(provider)
      const singer = web3Provider.getSigner()
      const chainId = await singer.getChainId()
      switch (chainId) {
        case 1:
          info.showMessage('error', 'The choosen chain is not supported!')
          store.ethereum = false
          store.invalidWCProvider = true
          await provider.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x38' }],
          }).then(async(response) => {
            store.ethereum = false
            store.invalidWCProvider = false
            await changeStore(false)
            select.from = { label: 'Binance Smart Chain', img: 'binance' }
          })
          // store.ethereum = true
          // await changeStore()
          // select.from = { label: 'Ethereum', img: 'ethereum' }
          // select.validateSelect(select.from, select.to)
          break
        case 56:
          store.ethereum = false
          await changeStore()
          select.from = { label: 'Binance Smart Chain', img: 'binance' }
          select.validateSelect(select.from, select.to)
          break
        default:
          try {
            info.showMessage('error', 'The choosen chain is not supported!')
            const chain = store.ethereum ? '0x1' : '0x38'
            await provider.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: '0x38' }],
            })
            // store.ethereum = false
            store.invalidWCProvider = false
            await changeStore()
            select.from = { label: 'Binance Smart Chain', img: 'binance' }
            select.validateSelect(select.from, select.to)
          } catch (error) {
            store.invalidWCProvider = true
            info.showMessage('error', 'The choosen chain is not supported!')
          }
          break
      }
    }
  })

  // Subscribe to session disconnection
  provider.on('disconnect', (code: number, reason: string) => {
    store.BeProvider = null
    store.BeSigner = null
    store.BeWallet = null
    store.BeBalance = null
    store.WCProvider = null
    store.isWc = false
    store.walletAddressTo = null
    store.invalidWCProvider = false
  })

  if (provider.chainId == 56) {
    // alert(1)
    const web3Provider = new providers.Web3Provider(provider)
    const singer = web3Provider.getSigner()
    const wallet = await singer.getAddress()
    store.BeProvider = () => web3Provider
    store.BeSigner = () => singer
    store.BeWallet = wallet
    store.invalidWCProvider = false
    // if (provider.chainId == 1) {
    //   store.ethereum = true
    //   store.BeBalance = await bscTokenContract.balanceOf(wallet)
    //   select.from = { label: 'Ethereum', img: 'ethereum' }
    // } else if (provider.chainId == 56) {
      store.ethereum = false
      store.BeBalance = await bscTokenContract.balanceOf(wallet)
      select.from = { label: 'Binance Smart Chain', img: 'binance' }
    // }
    await metamaskOldLock(wallet)
    store.isWc = true
    select.validateSelect(select.from, select.to)
  } else {
    try {
      await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x38' }],
      })
      store.ethereum = false
      await changeStore()
      select.from = { label: 'Binance Smart Chain', img: 'binance' }
      select.validateSelect(select.from, select.to)
    } catch (error) {
      store.invalidWCProvider = false
      info.showMessage('error', 'The choosen chain is not supported!')
      await provider.disconnect()
      return false
    }
  }
}

export const changeStore = async (wc = true) => {
  const checkProvider = () => (wc ? provider : window.ethereum)
  const store = useStore()
  const web3Provider = new providers.Web3Provider(checkProvider())
  const singer = web3Provider.getSigner()
  const wallet = await singer.getAddress()
  store.BeProvider = () => web3Provider
  store.BeSigner = () => singer
  store.BeWallet = wallet
  store.invalidWCProvider = false
  let balance
  // if (store.ethereum) {
  //   balance = await ethTokenContract.balanceOf(wallet)
  // } else {
    balance = await bscTokenContract.balanceOf(wallet)
  // }
  await metamaskOldLock(wallet)
  store.BeBalance = balance
}
