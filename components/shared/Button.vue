<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.button {
  background: #8572ff;
  box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 19px;
  width: 100%;
  max-width: 360px;
  font-weight: 700;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
}
</style>
