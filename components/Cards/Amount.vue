<template>
  <div class="!mt-10">
    <div className="flex justify-between opacity-[0.6] mb-2">
      <span>Amount</span>
      <span>Balance: {{ balance }} NNI</span>
    </div>
    <input
      :value="inputValue"
      @input="(event) => $emit('inputHandler', event)"
      type="text"
      placeholder="0.0"
      class="w-full h-[52px] bg-[#FFFFFF10] rounded-[8px] p-3 text-xl sm:text-2xl placeholder:text-2xl"
    />
  </div>
</template>

<script lang="ts" setup>
interface Props {
  inputValue: string
  balance: string
  error: boolean
  isBlocked: boolean
  maxAMount: () => void
  bridgeBalanceError: boolean
}
const props = defineProps<Props>()

const contentLabel = computed(() => {
  if (!props.inputValue.includes('.')) {
    return '.000 NNI'
  } else if (props.inputValue.includes('.')) {
    return 'NNI'
  }
})

const leftLabel = computed(() => (props.inputValue.length === 0 ? 0 : 23 + props.inputValue.length * 13))
</script>

<style lang="scss"></style>
