<template>
  <div class="connect">
    <h2 class="connect__title flex justify-center sm:justify-start text-2xl sm:text-[32px]">Connect to a Wallet</h2>
    <SharedConnectButton class="!mt-0" :connectFunc="phantomConnect" :text="'Phantom'" :path="'Phantom'" />
    <SharedConnectButton :text="'Solflare'" :connectFunc="solflareConnect" :path="'Solflare'" />
    <SharedConnectButton class="opacity-[30%]" :text="'Trust Wallet'" :path="'TrustWallet'" />
    <SharedConnectButton class="opacity-[30%]" :text="'Coinbase'" :path="'CoinBase'" />
  </div>
</template>

<script setup lang="ts">
import { useStore } from '~/store/useStore'

const phantomConnect = async() => await connect.connectPhantom(true)

const solflareConnect = async() => await connect.connectPhantom(false)

const connect = useStore()
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
}
</style>
