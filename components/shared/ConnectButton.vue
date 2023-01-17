<template>
  <button @click="connect" class="connect__button h-[56px] sm:h-[72px]">
    <template v-if="!load">
      <img v-show="path === 'Metamask'" class="connect__button-img" src="~~/assets/Metamask.svg" alt="Metamask" />
      <img v-show="path === 'WC'" class="connect__button-img" src="~~/assets/WC.svg" alt="WC" />
      <img v-show="path === 'TrustWallet'" class="connect__button-img" src="~~/assets/trust.svg" alt="TrustWallet" />
      <img v-show="path === 'CoinBase'" class="connect__button-img" src="~~/assets/coinBase.svg" alt="CoinBase" />
      <img v-show="path === 'Coin98'" class="connect__button-img" src="~~/assets/coin98.svg" alt="Coin98" />
      <img v-show="path === 'Phantom'" class="connect__button-img" src="~~/assets/Phantom.svg" alt="Phantom" />
      <img v-show="path === 'Solflare'" class="connect__button-img" src="~~/assets/solflare.svg" alt="Solflare" />
      <span class="text-sm sm:text-xl font-medium">
        {{ text }}
      </span>
    </template>
    <template v-else>
      <div class="spinner__wrapper"><div class="spinner"></div></div>
    </template>
  </button>
</template>

<script setup lang="ts">
import { useModalStore } from '~~/store/useModalStore'

const modal = useModalStore()

interface Props {
  text: string
  path: string
  connectFunc: () => void
}

const props = defineProps<Props>()

const load = ref(false)

const connect = async () => {
  load.value = true
  try {
    // await provider.enable()
    await props.connectFunc()
    modal.showMainModal()
  } catch (error) {
    // await provider.disconnect()
    console.log(error)
  } finally {
    load.value = false
  }
}
</script>

<style lang="scss" scoped>
.connect {
  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 16px 0;
    font-weight: 700;
    font-size: 20px;
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 8px;
    background: none;
    color: #fff;
    margin-bottom: 8px;
    cursor: pointer;
    &:last-child {
      margin-bottom: 0px;
    }

    &-img {
      margin-right: 8px;
      height: 30px;
      height: 24px;
      width: 24px;
      @media screen and (min-width: 640px) {
        height: 40px;
        width: 40px;
      }
    }
  }
}
</style>
