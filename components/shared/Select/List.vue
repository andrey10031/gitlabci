<template>
  <div class="select__container w-full sm:w-[160px]">
    <ul class="select__list">
      <SharedSelectListItem v-for="el in options" :label="el.label" :img="el.img" :key="el.label" :show="show" :checked="label" :left="left" />
      <!-- <SharedSelectListItem :label="'matic'" :img="el.img" :key="el.label" :show="show" :checked="label" :left="left" /> -->
    </ul>
  </div>
</template>

<script setup lang="ts">
interface Option {
  label: string
  img: string
}

interface Props {
  show: () => void
  options: Array<Option>
  label: string
  left: boolean
}
const props = defineProps<Props>()
</script>

<style lang="scss">
.select {
  &__container {
    background: linear-gradient(90deg, #33ecfe 0%, #edacfc 34.03%, #8572ff 65.28%);
    position: absolute;
    top: -52px;
    left: 0;
    border-radius: 8px;
    padding: 2px;
  }
  &__list {
    background: #332558;
    box-shadow: 0px 8px 16px rgba(36, 37, 38, 0.1);
    border-radius: 8px;
    border: 2px solid linear-gradient(#33ecfe, #edacfc, #8572ff);
    width: 100%;
    &-wrapper {
      z-index: 2222;
      position: relative;
      width: 100%;
      background: #7469d9;
    }
  }
}
</style>
