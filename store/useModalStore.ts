import { defineStore } from 'pinia'

interface State {
  modalMain: boolean,
  modalAccept: boolean,
  modalDisconnect: boolean
}

export const useModalStore = defineStore('modal', {
  state: (): State => ({
    modalMain: false,
    modalAccept: true,
    modalDisconnect: false
  }),

  getters: {
    getModalMain(state: State): boolean {
      return state.modalMain
    },
    
  },

  actions: {
    showMainModal(): void {
      this.modalMain = !this.modalMain
      const body = document.querySelector('body') as HTMLBodyElement
      this.modalMain ? (body.style.overflow = 'hidden') : (body.style.overflow = 'visible')
    },
    showAcceptModal(value: boolean): void {
      this.modalAccept = value
    },
    showModalDisconnect(): void {
      this.modalDisconnect = true
    },
    hideModalDisconnect(): void {
      this.modalDisconnect = false
    }
  },
})
