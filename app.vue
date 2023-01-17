<template>
  <div class="App">
    <Head>
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <!-- <Title>NeoNomad Bridge</Title> -->
    </Head>
    <Header />
    <main>
      <Title />
      <Cards />
    </main>
    <Footer />
    <ModalAccept />
    <transition name="modal">
      <TransactionInfo v-if="transaction.show" />
    </transition>
    <transition name="modal">
      <Modal v-show="modal.getModalMain" :close="modal.showMainModal">
        <ModalConnectMetaWc v-if="select.getFrom.label !== 'Solana'" />
        <ModalConnectSolana v-else />
      </Modal>
    </transition>
    <transition name="modal">
      <Modal v-show="modal.modalDisconnect" @click="modal.hideModalDisconnect">
        <ModalDisconnect/>
      </Modal>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { useModalStore } from '~~/store/useModalStore'
import { useSelectStore } from './store/useSelectStore'
import { useTransactionStore } from '~~/store/useTransactionStore'
import { useStore } from './store/useStore'
import { fetchFee } from './utils/fee'
import { back_url, checkBackend } from './utils/api/Backend'
import { getBridgeBalances } from './utils/ValidateBridgeBalances'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

const store = useStore()
const modal = useModalStore()
const select = useSelectStore()
const transaction = useTransactionStore()

onMounted(async () => {
  try {
    await checkBackend(back_url)
    const { bscSol, ethSol, solBsc, solEth } = await fetchFee()
    store.comission.bscSol = bscSol
    store.comission.ethSol = ethSol
    store.comission.solBsc = solBsc
    store.comission.solEth = solEth
    const { bscBridgeBalance, solanaBridgeBalance } = await getBridgeBalances()
    store.bridgeBalances.bsc = bscBridgeBalance
    store.bridgeBalances.sol = solanaBridgeBalance
  } catch (error) {
    console.log(error)
  }
})
</script>

<style lang="scss">
main {
  padding-bottom: 82px;
  min-height: calc(100vh - 182px);
  @media screen and (min-width: 768px) {
    min-height: calc(100vh - 155px);
  }
}
.container {
  max-width: 512px;
  margin: auto;
}
.spinner {
  height: 30px;
  width: 30px;
  border-left: 3px solid #fff;
  border-bottom: 3px solid #fff;
  border-right: 3px solid #fff;
  border-top: 3px solid transparent;
  border-radius: 50%;
  animation: spinner 1s linear infinite;
  &__wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}

.spinner-primary {
  border-left: 3px solid #30cfd0;
  border-bottom: 3px solid #30cfd0;
  border-right: 3px solid #30cfd0;
}

.spinner-gray {
  border-left: 3px solid gray;
  border-bottom: 3px solid gray;
  border-right: 3px solid gray;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
@keyframes spinner {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
.bgTitle {
  top: 190px;
  left: 72%;
  transform: translate(-50%, -50%);
}
</style>
