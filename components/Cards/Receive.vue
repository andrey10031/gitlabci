<template>
  <div class="flex w-full flex-col !mt-8">
    <div class="flex flex-row justify-between">
      <span class="flex items-center opacity-[0.6]">You will receive</span>
      <div class="flex items-center text-xl sm:text-2xl space-x-2 cursor-pointer" @click="show = !show">
        <img src="~/assets/icons/select/oldLogo.svg" alt="" class="mr-1" />
        {{ willReceive }} NNI
        <img :style="show && 'transform: rotate(180deg)'" src="~/assets/icons/select/breakpoint.svg" alt="" />
      </div>
    </div>
    <div v-show="show" class="feeInfo">
      <div>
        <span class="text">Fee</span>
        <span>{{ Number(comission) <= 0 ? '...calculating fee' : `${comission} NNI` }}</span>
      </div>
      <div>
        <span class="text">Slippage</span>
        <span>0.5%</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useSelectStore } from '../../store/useSelectStore'
import { useStore } from '../../store/useStore'
import { commissionCalcForChains } from '../../utils/Comission'

const show = ref(false)
const select = useSelectStore()
const store = useStore()
const comission = computed(() => commissionCalcForChains(select.getFrom.label, select.getTo.label, store.getComission))
const willReceive = computed(() =>
  Number(store.getInputAmountString) >= Number(comission.value) ? (Number(store.getInputAmountString) - Number(comission.value)).toFixed(3) : '0'
)
</script>

<style lang="scss">
.feeInfo {
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 84px;
  padding: 16px 24px;
  border-radius: 8px;
  margin-top: 16px;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 14px;
    span {
      font-weight: 500;
    }
    .text {
      opacity: 80%;
      font-weight: 400;
    }
  }
}
</style>
