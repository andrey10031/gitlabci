import { Option } from './../utils/types'
import { useStore } from '~~/store/useStore'
import { defineStore } from 'pinia'
import { BigNumber } from 'ethers'
import { back_url } from '../utils/api/Backend'
import { metamaskOldLock } from '../utils/api/Backend'

interface State {
  options: Array<Option>
  from: Option
  to: Option
  left: boolean
}

interface toHandler {
  value: string
  img: string
}

export const useSelectStore = defineStore('select', {
  state: (): State => ({
    options: [
      { label: 'Solana', img: 'solana' },
      { label: 'Binance Smart Chain', img: 'binance' },
      { label: 'Ethereum', img: 'ethereum' },
      { label: 'Matic', img: 'matic' },
      { label: 'Avax', img: 'avax' },
    ],
    from: { label: 'Solana', img: 'solana' },
    to: { label: 'Binance Smart Chain', img: 'binance' },
    left: false,
  }),

  getters: {
    getOptions(state: State): Array<Option> {
      return state.options
    },
    getFrom(state: State): Option {
      return state.from
    },
    getTo(state: State): Option {
      return state.to
    },
  },

  actions: {
    async fromHandler({ value, img }): Promise<void> {
      const store = useStore()

      if (this.from.label !== 'Solana' && value === 'Solana') {
        store.walletAddressTo = null
      } else if (this.from.label === 'Solana' && value !== 'Solana') {
        store.walletAddressTo = null
      }

      this.from.label = value
      this.from.img = img
      this.validateSelect(this.from, this.to)
      value === 'Ethereum' ? (store.ethereum = true) : (store.ethereum = false)
      if (value === 'Solana') {
      } else if (store.BeProvider != null || store.solana != null) {
        await store.connectHandler(store.ethereum)
        if (store.ethereum) {
          // alert(1)
          this.from.label = 'Ethereum'
          this.from.img = 'ethereum'
        } else {
          this.from.label = 'Binance Smart Chain'
          this.from.img = 'binance'
        }
      }

      if (this.from.label == 'Solana' && store.oldLock.sol.isOldLock) {
        store.inputAmount = store.oldLock.sol.amount

        store.walletAddressTo = store.oldLock.sol.address
      } else if (this.from.label == 'Ethereum' && store.oldLock.eth.isOldLock) {
        store.inputAmount = store.oldLock.eth.amount.div(BigNumber.from(10).pow(12))
        store.walletAddressTo = store.oldLock.eth.address
      } else if (this.from.label == 'Binance Smart Chain' && store.oldLock.bsc.isOldLock) {
        store.inputAmount = store.oldLock.bsc.amount.div(BigNumber.from(10).pow(12))
        store.walletAddressTo = store.oldLock.bsc.address
      } else {
        store.walletAddressTo = ''
      }
    },
    async toHandler({ value, img }): Promise<void> {
      const store = useStore()

      if (this.to.label !== 'Solana' && value === 'Solana') {
        store.walletAddressTo = null
      } else if (this.to.label === 'Solana' && value !== 'Solana') {
        store.walletAddressTo = null
      }

      this.to.label = value
      this.to.img = img
      this.validateSelect(this.to, this.from)
      value === 'Ethereum' && this.from.label === 'Solana' ? (store.ethereum = true) : (store.ethereum = false)
      if (this.from.label !== 'Solana') {
        await store.connectHandler(store.ethereum)
      }

      if (store.isError && store.ethereum) {
        this.from.label = 'Solana'
        this.from.img = 'solana'
        this.to.label = 'Ethereum'
        this.to.img = 'ethereum'
      }
    },
    validateSelect(el, to): void {
      // if (el.label === 'Binance Smart Chain' || el.label === 'Ethereum') {
      //   to.label = 'Solana'
      //   to.img = 'solana'
      // } else if (el.label === 'Solana') {
      //   to.label = 'Binance Smart Chain'
      //   to.img = 'binance'
      // } else if (to.label === 'Binance Smart Chain' || to.label === 'Ethereum') {
      //   el.label === 'Solana'
      // } else if (to.label === 'Solana') {
      //   el.label = 'Binance Smart Chain'
      //   el.img = 'binance'
      // }
      const store = useStore()
      switch (true) {
        case el.label === 'Binance Smart Chain' || el.label === 'Ethereum':
          to.label = 'Solana'
          to.img = 'solana'
          break
        case el.label === 'Solana':
          to.label = 'Binance Smart Chain'
          to.img = 'binance'
          break
        case to.label === 'Binance Smart Chain' || to.label === 'Ethereum':
          el.label === 'Solana'
          to.img = 'solana'
          break
        case to.label === 'Solana':
          el.label = 'Binance Smart Chain'
          el.img = 'binance'
          break
        default:
          break
      }
      if (store.BeProvider || store.solanaConnection) {
        metamaskOldLock(back_url)
      }
    },
  },
})
