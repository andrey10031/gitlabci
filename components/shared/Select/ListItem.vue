<template>
  <li class="select__item" :class="checked === label || label === 'Ethereum' || label === 'Matic' || label === 'Avax' ? 'active' : null">
    <div class="select__item-wrapper" @click="itemHandler">
      <img v-if="img === 'solana'" src="~~/assets/icons/select/sol.svg" alt="solana" class="select__img" />
      <img v-if="img === 'binance'" src="~~/assets/icons/select/bsc.svg" alt="binance" class="select__img" />
      <img v-if="img === 'ethereum'" src="~~/assets/icons/select/eth.svg" width="24" alt="ethereum" class="select__img" />
      <img v-if="img === 'matic'" src="~~/assets/icons/select/matic.svg" width="24" alt="matic" class="select__img" />
      <img v-if="img === 'avax'" src="~~/assets/icons/select/avax.svg" width="24" alt="avax" class="select__img" />
      <!-- <img src="~~/assets/icons/select/matic.svg" alt="binance" class="select__img" />
      <img src="~~/assets/icons/select/avax.svg" alt="binance" class="select__img" /> -->
      <span class="select__item-label">{{ label.slice(0, 3) }}</span>
    </div>
    <div v-if="label === 'Ethereum'" class="select__item-bg"></div>
    <div v-if="label === 'Matic'" class="select__item-bg"></div>
    <div v-if="label === 'Avax'" class="select__item-bg"></div>
  </li>
</template>

<script setup lang="ts">
import { useInfoStore } from '~~/store/useInfoStore'
import { useSelectStore } from '../../../store/useSelectStore'

const select = useSelectStore()
const info = useInfoStore()

interface Props {
  show: () => void
  label: string
  img: string
  checked: string
  left: boolean
}

const props = defineProps<Props>()

// const emit = defineEmits<{
//   (event: "selected", { value, img }): void;
// }>();

const itemHandler = () => {
  // emit("selected", { value: props.label, img: props.img });
  props.left ? select.fromHandler({ value: props.label, img: props.img }) : select.toHandler({ value: props.label, img: props.img })
  if (props.label === 'Ethereum') {
    info.showMessage('error', 'The choosen chain is not supported!')
    // props.left ? select.fromHandler({ value: 'Ethereum', img: 'ethereum' }) : select.toHandler({ value: 'Ethereum', img: 'ethereum' })
  }
  props.show()
}
</script>

<style lang="scss" scoped>
.select {
  &__img {
    margin-right: 8px;
  }

  &__item {
    padding: 0 16px;
    position: relative;
    &:last-child {
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
    }

    &:hover {
      background: #6055c6;
      border-radius: 8px;
      & > div {
        background: #6055c6;
        // border-top: 1px solid #6055c6;
        & > span {
          font-weight: 700;
          font-size: 20px;
          line-height: 32px;
          color: #d1d5db;
        }
      }
    }

    &-bg {
      opacity: 0.1;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    &-wrapper {
      display: flex;
      align-items: center;
      padding: 12px 0;
      font-weight: 700;
      font-size: 24px;
      // border-top: 1px solid #897fdf;
      cursor: pointer;
    }

    &-label {
      font-weight: 500;
      font-size: 20px;
      line-height: 32px;
      color: #ffffff;
      margin-bottom: 0 !important;
    }
  }
}

.active {
  pointer-events: none;

  & > div {
    & > span {
      color: #000000;
    }
    & > img {
      opacity: 0.5;
    }
  }
}
</style>
