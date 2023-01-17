import { defineStore } from 'pinia'

interface Message {
  type: string // err, success
  value: string
  hash?: string
}

interface State {
  message: Message | null
  backendIsDown: boolean
}

export const useInfoStore = defineStore('info', {
  state: (): State => ({
    message: null,
    backendIsDown: false,
  }),

  getters: {
    getMessage(): null | Message {
      return this.message
    },
    getBackendIsDown: (state: State): boolean => state.backendIsDown,
  },

  actions: {
    showMessage(type: string, value: string, hash?: string): void {
      this.message = { type, value, hash }

      setTimeout(() => {
        this.hideMessage()
      }, 10000)
    },
    hideMessage(): void {
      this.message = null
    },
  },
})
