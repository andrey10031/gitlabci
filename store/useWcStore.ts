import { defineStore } from 'pinia'
import { useStore } from '~~/store/useStore'

import { providers } from 'ethers'

import { metamaskOldLock } from '../utils/api/Backend'
import { bscTokenContract, ethTokenContract } from '../utils/contracts'

interface State {}

export const useWcStore = defineStore('WcStore', {
  state: (): State => ({
    wc: null,
  }),

  actions: {
    async connectWc() {},
  },
})
