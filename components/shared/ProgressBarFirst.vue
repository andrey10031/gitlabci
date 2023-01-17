<template>
  <div class="w-full max-w-[442px] px-10 flex items-center flex-col relative md:mt-4">
    <span class="text-[12px] text-gray-primary">{{ transaction.firstStageInfo }}</span>

    <div class="flex max-w-[274px] w-full flex-col items-center relative">
      <ul class="flex w-full justify-between text-[10px]">
        <li v-if="transaction.step === null">start</li>
        <li v-if="transaction.step !== null">0</li>
        <li>5</li>
        <li>10</li>
        <li>15</li>
        <li v-if="transaction.step < 20">20</li>
        <li v-if="transaction.step === 20">finish</li>
      </ul>

      <div class="flex items-center max-w-[400px] w-full justify-between">
        <div class="step" :class="[transaction.firstStart && 'step-active']">
          <div :class="[transaction.step === null && transaction.firstStart && 'step-animate']"></div>
        </div>
        <div class="step" :class="[stage >= 1 && 'step-active']">
          <div :class="[stage === 1 && 'step-animate']"></div>
        </div>
        <div class="step" :class="[stage >= 2 && 'step-active']">
          <div :class="[stage === 2 && 'step-animate']"></div>
        </div>
        <div class="step" :class="[stage >= 3 && 'step-active']">
          <div :class="[stage === 3 && 'step-animate']"></div>
        </div>
        <div class="step" :class="[stage === 4 && 'step-active']">
          <div :class="[stage === 4 && !transaction.firstFinished && 'step-animate']"></div>
        </div>
        <div class="absolute bg-gray h-[2px] w-full rounded-main"></div>

        <div class="w-full h-[2px] flex absolute z-[2232]">
          <div class="h-full !w-[25%]" :class="[stage === 1 && 'animate', stage > 1 && 'active']"></div>
          <div class="h-full !w-[25%]" :class="[stage === 2 && 'animate', stage > 2 && 'active']"></div>
          <div class="h-full !w-[25%]" :class="[stage === 3 && 'animate', stage > 3 && 'active']"></div>
          <div class="h-full !w-[25%]" :class="[stage === 4 && !transaction.firstFinished && 'animate', transaction.firstFinished && 'active']"></div>
        </div>
      </div>
      <ul class="flex w-full justify-around text-[10px]">
        <li class="opacity-0" :class="[stage === 1 && 'opacity-[1]']">{{ transaction.step }}/5</li>
        <li class="opacity-0" :class="[stage === 2 && 'opacity-[1]']">{{ transaction.step }}/10</li>
        <li class="opacity-0" :class="[stage === 3 && 'opacity-[1]']">{{ transaction.step }}/15</li>
        <li class="opacity-0" :class="[stage === 4 && 'opacity-[1]']">{{ transaction.step }}/20</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useTransactionStore } from '~~/store/useTransactionStore'

const transaction = useTransactionStore()

const stage = computed(() => {
  if (transaction.step <= 5 && transaction.step !== null) {
    return 1
  } else if (transaction.step > 5 && transaction.step <= 10) {
    return 2
  } else if (transaction.step > 15 && transaction.step <= 20) {
    return 4
  } else if (transaction.step === null) {
    return 0
  } else {
    return 3
  }
})

const percent = (100 / 4) * stage

const done = false
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
