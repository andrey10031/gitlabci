<template>
  <div class="w-full mt-[24px] flex items-center justify-center">
    <div class="max-w-[512px] w-full h-full flex items-center justify-center rounded-main bg-primary backdrop-blur-sm">
      <transition name="fade">
        <span class="py-6 text-center px-3 sm:px-8 opacity-[0.6]" v-if="info.message === null && isOldLock === false"
          >Information about your transaction will appear here.</span
        >
        <InfoMessage v-else-if="info.message !== null" :type="info.message.type" :value="info.message.value" :hash="info.message.hash" />
        <InfoMessage v-else-if="isOldLock" :isOldLock="isOldLock" />
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useInfoStore } from '~/store/useInfoStore'
import { useStore } from '~~/store/useStore'
import { BNToNumstr } from '~~/utils/BigNumber'
import { useSelectStore } from '../../store/useSelectStore'
import { getOldLock } from '../../utils/ValidateSelect'

const store = useStore()
const select = useSelectStore()

const isOldLock = computed(() => getOldLock(select.getFrom.label, store.getOldLock))

const info = useInfoStore()
</script>

<style lang="scss" scoped>
.fade-enter-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-leave-active {
  display: none;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
