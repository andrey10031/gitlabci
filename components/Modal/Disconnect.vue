<template>
    <div class="connect">
        <h2 class="connect__title text-center mb-0">Your wallet</h2>
        <p class="mt-[32px] mb-[16px]">{{walletAddress}}</p>
        <button @click="disconnectFunc" class="button">Disconnect</button>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useModalStore } from '../../store/useModalStore';
import { useSelectStore } from '../../store/useSelectStore';
import { useStore } from '../../store/useStore';

const select = useSelectStore()
const store = useStore()
const modal = useModalStore()

const walletAddress = computed(() =>
  select.getFrom.label === 'Solana' ? store.getWalletAddressFromSol : store.getWalletAddressFromBe
)

const disconnectFunc = async () => {
  // select.getFrom.label === 'Solana' ? store.resetPhantom() : await store.resetMetamask()
  if(select.getFrom.label === 'Solana') {
    await store.resetPhantom()
  } else {
    await store.resetMetamask()
  }

  modal.hideModalDisconnect()
}

</script>

<style lang="scss" scoped>
.connect {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__title {
    font-weight: 700;
    line-height: 36px;
  }
}
.button {
    /* background: linear-gradient(90deg, #2735d5 0%, #8573fe 100%); */
    box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
    border-radius: 38px;
    padding: 10px 18px;
    margin: 18px 0;
    height: auto;
    border: none;
    font-size: 14px;
    font-weight: 400;
}
</style>
