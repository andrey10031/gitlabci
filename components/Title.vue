<template>
  <section class="flex justify-center h-auto">
    <div class="max-w-[512px] w-full flex flex-col sm:flex-row items-center justify-between mt-[52px] sm:mt-[90px]">
      <h1 class="font-semibold text-[48px]">Bridge</h1>
      <div class="flex flex-row text-xl sm:text-2xl font-medium mt-9 sm:mt-0">
        <span>TVL: $ 32565.39</span>
        <img src="~/assets/icons/render.svg" alt="" class="render" :class="activeSpinning ? 'active' : ''" @click="reloadTimer" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeSpinning = ref(false)

// reloadTimer() {
//   this.flush()
//   this.$accessor.wallet.getTokenAccounts()
//   this.activeSpinning = true
//   setTimeout(() => {
//     this.activeSpinning = false
//   }, 1000)
// },
const reloadTimer = () => {
  activeSpinning.value = true
  setTimeout(() => {
    activeSpinning.value = false
  }, 1000)
}
</script>

<style lang="scss" scoped>
.render {
  margin-left: 8px;
  cursor: pointer;
  &.active {
    transform: rotate(360deg);
    transition: all 1s ease-in-out;
  }
}
</style>
