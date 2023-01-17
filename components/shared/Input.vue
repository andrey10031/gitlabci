<template>
  <div class="input">
    <div v-show="isBlocked" class="input__bg"></div>
    <div class="input__wrapper">
      <div class="input__amout-wrapper">
        <input
          :value="inputValue"
          @input="(event) => $emit('inputHandler', event)"
          type="text"
          class="input__amount"
          :class="error && 'error'"
          placeholder="0.0000000 NNI"
        />
        <div v-show="inputValue.length > 0 && inputValue.length < 9" :style="{ left: leftLabel + 'px' }" class="input__label">{{contentLabel}}</div>
      </div>
      <button @click="maxAMount" class="input__max">MAX</button>
    </div>
    <small v-show="error || bridgeBalanceError" class="input__error">{{error ? 'Invalid amount' : 'Amount exceeds bridge balance'}}</small>
  </div>
</template>

<script setup lang="ts">
interface Props {
  inputValue: string;
  balance: string;
  error: boolean;
  isBlocked: boolean;
  maxAMount: () => void;
  bridgeBalanceError: boolean
}
const props = defineProps<Props>();

const contentLabel = computed(() => {
    if (!props.inputValue.includes('.')) {
        return '.000 NNI';
    } else if (props.inputValue.includes('.')) {
        return 'NNI';
    }
});

const leftLabel = computed(() => (props.inputValue.length === 0 ? 0 : 23 + props.inputValue.length * 13));
</script>

<style lang="scss" scoped>
.input {
  height: 54px;
  position: relative;
  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #333;
    opacity: 0.3;
    z-index: 2;
    border-radius: 12px;
  }
  &__amount {
    width: 100%;
    padding: 12px 20px 11px;
    background: #866bcb;
    border-radius: 12px;
    font-weight: 700;
    font-size: 24px;
    line-height: normal !important;
    color: #fff;
    &::placeholder {
      color: #fff;
      opacity: 0.5;
    }
    &-wrapper {
      position: relative;
    }
  }

  &__wrapper {
    margin-top: 16px;
    position: relative;
  }

  &__max {
    position: absolute;
    top: 52%;
    right: 15px;
    transform: translate(0%, -45%);
    font-weight: 700;
    font-size: 20px;
    line-height: normal;
    color: #293694;
    background: none;
    cursor: pointer;
  }

  &__label {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(0%, -45%);
    font-weight: 700;
    font-size: 24px;
  }

  &__error {
    margin-top: 5px;
    color: red;
    padding-left: 23px;
    font-size: 14px;
  }
}

.error {
  border: 1px solid red;
}
</style>
