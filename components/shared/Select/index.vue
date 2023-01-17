<template>
  <div class="select">
    <div class="select__wrapper" @click="show">
      <div class="select__content">
        <div class="select__block">
          <!-- <img :src="`/assets/icons/select/${imgPath}.svg`" alt="" class="select__img"> -->
          <img v-if="imgPath === 'solana'" src="~~/assets/icons/select/sol.svg" alt="solana" width="24" class="select__img" />
          <img v-if="imgPath === 'binance'" src="~~/assets/icons/select/bsc.svg" alt="binance" width="24" class="select__img" />
          <img v-if="imgPath === 'ethereum'" src="~~/assets/icons/select/eth.svg" alt="ethereum" width="24" class="select__img" />
          <!-- <input type="text" :value="label" class="select__input" disabled> -->
          <img class="mr-2" v-if="!imgPath" src="~/assets/icons/select/oldLogo.svg" alt="" />
          <div class="select__input">{{ label }}</div>
        </div>
        <img
          src="~/assets/icons/select/breakpoint.svg"
          v-if="isSelect"
          :style="listShow && 'transform: rotate(180deg); z-index: 10000'"
          alt="breakpoint"
          class="select__breakpoint"
        />
      </div>
      <div @click="show" v-show="listShow" class="select__list-wrapper">
        <SharedSelectList
          v-if="label !== 'NNI'"
          :options="options"
          :show="show"
          :label="label"
          :left="left"
          @select="({ value, img }) => $emit('select', { value, img })"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Option {
  label: string
  img: string
}

interface Props {
  options: Array<Option>
  label: string
  imgPath: string
  left: boolean
  isSelect: boolean
}

const props = defineProps<Props>()

const listShow = ref(false)

const show = () => (listShow.value = !listShow.value)
</script>

<style lang="scss" scoped>
.select {
  height: 52px;
  margin-top: 8px;
  // @media screen and (max-width: 639px) {
  //   margin-top: 8px;
  // }
  &__wrapper {
    display: flex;
    flex-direction: column;
  }
  &__content {
    display: flex;
    height: 52px;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    background: #7469d9;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.1);
  }

  &__block {
    display: flex;
    align-items: center;
  }

  &__img {
    margin-right: 8px;
  }

  &__input {
    padding-top: 4px;
    background: inherit;
    font-weight: 500;
    font-size: 20px;
    color: #fff;
  }

  &__breakpoint {
    cursor: pointer;
  }
}
</style>
