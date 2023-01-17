<template>
  <div class="modal">
    <div @click="close" class="modal__bg"></div>
    <div class="modal__content">
      <img @click="close" class="modal__close w-[32px] sm:w-[24px] opacity-[0.8]" src="~/assets/close.svg" alt="close" />
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  close: () => void
}

const props = defineProps<Props>()
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2222;

  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(4px);
    cursor: pointer;
  }

  &__content {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 495px;
    width: 92.5%;
    padding: 32px;
    background: #332558;
    /* backdrop-filter: blur(8px); */
    box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
  }

  &__close {
    position: absolute;
    top: 14px;
    right: 14px;
    cursor: pointer;
  }
}
</style>
