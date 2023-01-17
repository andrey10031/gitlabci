<template>
  <div class="w-full max-w-[442px] px-10 flex items-center flex-col relative md:mt-4">
    <span class="text-[12px] text-gray-primary">Waiting for confirmation</span>

    <div class="flex max-w-[274px] w-full flex-col items-center relative">
      <div class="flex items-center max-w-[400px] w-full justify-between">
        <div class="step" :class="[start && 'step-active']">
          <div :class="[start && 'step-animate']"></div>
        </div>
        <div class="step" :class="[start && 'step-active']">
          <div :class="[!finish && start && 'step-animate']"></div>
        </div>
        <div class="absolute bg-gray h-[2px] w-full rounded-main"></div>

        <div class="w-full h-[2px] flex absolute z-[2232]">
          <div class="h-full !w-[100%]" :class="[!finish && start && 'animate', finish && start && 'active']"></div>
        </div>
      </div>
      <ul class="flex w-full justify-between text-[12px]">
        <li>start</li>
        <li>finish</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useTransactionStore } from '~~/store/useTransactionStore'

const transaction = useTransactionStore()

interface Props {
  start: any
  finish: any
  info: any
}
const props = defineProps<Props>()
</script>

<style lang="scss" scoped>
@import '~/assets/css/variables.scss';
.step {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: $gray;
  z-index: 2222;
  display: flex;
  align-items: center;
  justify-content: center;

  &-active {
    background: white;
  }

  &-animate {
    animation: pulse 1.2s infinite;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    z-index: -1;
  }
}

.animate {
  background: white;
  transform-origin: left top;
  transform: scaleX(0);
  animation: scale var(--time) infinite forwards;
  --time: 1.2s;
}

.active {
  opacity: 1;
  background: white;
  border-radius: 50%;
  width: 100%;
  height: 100%;
}

@-webkit-keyframes pulse {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.247);
  }
  30% {
    -webkit-box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.301);
  }
}

@keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.281);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.274);
  }
  30% {
    -moz-box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.164);
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.24);
  }
}

@keyframes scale {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}
</style>
