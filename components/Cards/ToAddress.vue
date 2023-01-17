<template>
  <div class="!mt-2">
    <div className="flex justify-between opacity-[0.6] mb-2">
      <span class="sm:hidden">Wallet Address</span>
    </div>
    <input
      v-model="store.walletAddressTo"
      placeholder="Wallet address"
      type="text"
      class="w-full h-[52px] bg-[#FFFFFF10] rounded-[8px] p-3 text-sm sm:text-base placeholder:text-base"
    />
    <small v-show="store.getBridgeWalletTo" style="padding-left: 20px; color: red; margin-top: 5px"> invalid address </small>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from '../../store/useStore'

const store = useStore()
</script>
