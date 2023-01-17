import { BigNumber } from 'ethers'
import { defineStore } from 'pinia'

interface State {
  show: boolean
  from: string | null
  to: string | null
  step: number | null
  firstStageInfo: string | null
  secondStageInfo: string | null
  amount: string | null
  firstStart: boolean
  firstFinished: boolean
  secondStart: boolean
  secondFinished: boolean
  nativeFee: BigNumber
}

export const useTransactionStore = defineStore('transaction', {
  state: (): State => ({
    show: false,
    from: null,
    to: null,
    step: null,
    firstStageInfo: null,
    secondStageInfo: null,
    amount: null,
    firstStart: false,
    firstFinished: false,
    secondStart: false,
    secondFinished: false,
    nativeFee: BigNumber.from(0),
  }),

  getters: {},

  actions: {
    setShow() {
      this.show = !this.show
    },
  },
})
