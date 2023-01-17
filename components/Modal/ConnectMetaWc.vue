<template>
  <div class="connect">
    <h2 class="connect__title flex justify-center sm:justify-start text-2xl sm:text-[32px]">Connect to a Wallet</h2>
    <!-- <div class="connect__disabled">
      <div class="connect__disabled-bg"></div>
      <SharedConnectButton :text="'WalletConnect'" :path="'WC'" />
    </div> -->
    <SharedConnectButton :connectFunc="connect.connectWc" :text="'WalletConnect'" :path="'WC'" />
    <SharedConnectButton :connectFunc="connect.connectMetamask" :text="'Metamask'" :path="'Metamask'" />
    <SharedConnectButton class="opacity-[30%]" :text="'Trust Wallet'" :path="'TrustWallet'" />
    <SharedConnectButton class="opacity-[30%]" :text="'Coinbase'" :path="'CoinBase'" />
    <SharedConnectButton class="opacity-[30%]" :text="'Coin98'" :path="'Coin98'" />
  </div>
</template>

<script lang="ts" setup>
import { useStore } from '~/store/useStore'
import { useWcStore } from '~/store/useWcStore'

const connect = useStore()
const connectWc = useWcStore()
</script>

<style lang="scss" scoped>
.connect {
  width: 100%;
  display: flex;
  flex-direction: column;
  &__title {
    font-weight: 700;
    line-height: 36px;
    margin-bottom: 32px;
  }

  &__subtitle {
    text-align: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #d1d5db;
    margin-bottom: 32px;
  }

  &__disabled {
    position: relative;
    &-bg {
      position: absolute;
      content: '';
      left: 0;
      bottom: 0;
      width: 100%;
      height: 64px;
      border-radius: 12px;
      background-color: #333;
      z-index: 444;
      opacity: 0.4;
    }
  }
}
</style>
