import { defineStore } from 'pinia'

import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom'
import { disconnectWc, phantom, switchWC } from './../utils/api/Connect'

import { providers, BigNumber } from 'ethers'

import WalletConnectProvider from '@walletconnect/web3-provider'

import { SystemProgram, Transaction, PublicKey, Connection, clusterApiUrl, Signer } from '@solana/web3.js'

import { BNToNumstr, numstrToBN } from '~~/utils/BigNumber'

import { solanaOldLock } from './../utils/api/Backend'
import { bridgeToBSC, bridgeToSolana } from '~~/utils/api/Bridge'
import { calculateFee } from '../utils/fee'
import { Commission, OldLock } from './../utils/types'
import { metamask, walletConnect } from '~~/utils/api/Connect'

interface State {
  ethereum: boolean
  isWc: boolean
  WCProvider: () => WalletConnectProvider | null
  BeProvider: () => providers.Web3Provider | null
  BeSigner: () => providers.JsonRpcSigner | null
  walletAddressTo: string | null
  inputAmountString: string | null
  BeWallet: string | null
  isError: boolean
  isBridge: boolean
  solanaWallet: PhantomWalletAdapter | null
  solanaConnection: null | Connection
  solanaProgram: null | any
  solanaBalance: BigNumber | null
  BeBalance: BigNumber
  inputAmount: BigNumber | null
  oldLock: any | null
  errorInput: boolean
  bridgeWalletTo: boolean

  comission: {
    bscSol: BigNumber | null
    ethSol: BigNumber | null
    solBsc: BigNumber | null
    solEth: BigNumber | null
  }
  bridgeBalances: {
    bsc: string | null,
    sol: string | null
  }
}

export const useStore = defineStore('store', {
  state: () => ({
    // if false - solana -> bsc; if true -> solana - eth
    ethereum: false,
    isWc: false,
    WCProvider: null,
    invalidWCProvider: false,
    BeProvider: null,
    BeSigner: null,
    inputAmountString: '',
    walletAddressTo: null,
    BeWallet: null,
    isError: false,
    isBridge: true,
    solanaWallet: null,
    solanaConnection: null,
    solanaProgram: null,
    solanaBalance: null,
    BeBalance: null,
    inputAmount: BigNumber.from(0),
    oldLock: {
      eth: {
        isOldLock: false,
        amount: BigNumber.from(0),
        address: '',
      },
      bsc: {
        isOldLock: false,
        amount: BigNumber.from(0),
        address: '',
      },
      sol: {
        isOldLock: false,
        amount: 0,
        address: '',
        ethereum: false,
      },
    },
    errorInput: false,
    bridgeWalletTo: false,
    comission: { bscSol: BigNumber.from(0), ethSol: BigNumber.from(0), solBsc: BigNumber.from(0), solEth: BigNumber.from(0) },
    bridgeBalances: { bsc: '0', sol: '0' }
  }),

  getters: {
    getWalletAddressFromBe: (state: State): null | string => state.BeWallet,

    getWalletAddressFromSol: (state: State): null | string => (state.solanaConnection ? state.solanaWallet.publicKey.toString() : null),

    getWalletAddresTo: (state: State): null | string => state.walletAddressTo,

    getBalanceBe: (state: State): string => (state.BeBalance ? BNToNumstr(state.BeBalance, 18, 3) : '0'),

    getBalanceSol: (state: State): string => (state.solanaBalance ? BNToNumstr(state.solanaBalance, 6, 3) : '0'),
    getOldLock: (state: State): OldLock => state.oldLock,

    getInputAmountString: (state: State): string => state.inputAmountString,
    getInputAmount: (state: State): BigNumber | null => state.inputAmount,

    getErrorInput: (state: State): boolean => state.errorInput,

    getBridgeWalletTo: (state: State): boolean => state.bridgeWalletTo,

    getComission: (state: State): Commission => state.comission,
    getIsBridge: (state: State): boolean => state.isBridge,
  },

  actions: {
    updateStore({ provider, signer, BeBalance, newEthereum }) {
      this.BeProvider = () => provider
      this.BeSigner = () => signer
      this.BeBalance = BeBalance
      this.ethereum = newEthereum
    },
    async setWalletAddresTo(e) {
      this.walletAddressTo = e.target.value
    },

    async connectMetamask(): Promise<void> {
      const { provider, signer, wallet, balance, newEthereum, isError } = await metamask(this.ethereum)

      this.ethereum = newEthereum
      this.isError = isError
      if (!isError) {
        this.BeProvider = () => provider
        this.BeSigner = () => signer
        this.BeWallet = wallet
        this.BeBalance = balance
      }
    },

    async resetMetamask() {
      if (this.isWc) {
        await disconnectWc()
      }
      this.WCProvider = null
      this.isWc = false
      this.walletAddressTo = null
      this.invalidWCProvider = false
      this.BeProvider = null
      this.BeSigner = null
      this.BeWallet = null
      this.BeBalance = null
      this.oldLock = {
        eth: {
          isOldLock: false,
          amount: BigNumber.from(0),
          address: '',
        },
        bsc: {
          isOldLock: false,
          amount: BigNumber.from(0),
          address: '',
        },
        sol: {
          isOldLock: false,
          amount: 0,
          address: '',
          ethereum: false,
        },
      }
    },

    async connectPhantom(isPhantom: boolean) {
      const { wallet, solanaConnection, solanaProgram, solanaBalance } = await phantom(isPhantom)
      this.solanaWallet = wallet
      this.solanaConnection = solanaConnection
      this.solanaProgram = solanaProgram
      this.solanaBalance = solanaBalance
      await solanaOldLock(this.solanaWallet)
    },

    resetPhantom() {
      this.solanaWallet = null
      this.solanaConnection = null
      this.solanaProgram = null
      this.solanaBalance = null
    },

    setInputAmount(value: string): void {
      this.inputAmount = numstrToBN(value, 6)
    },
    async bridge(pathToSolana: boolean): Promise<void> {
      !pathToSolana
        ? await bridgeToSolana(this.walletAddressTo, this.inputAmount, this.$state)
        : await bridgeToBSC(this.walletAddressTo, this.inputAmount, this.$state)
    },
    async connectWc() {
      await walletConnect(this.ethereum)
    },

    async connectHandler() {
      if (this.isWc) {
        await switchWC(this.ethereum)
      } else {
        await this.connectMetamask()
      }
    },
  },
})
