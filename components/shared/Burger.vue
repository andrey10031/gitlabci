<template>
  <div class="burger-menu">
    <span />
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/css/variables.scss';
.burger-menu {
  cursor: pointer;
  display: none;
}

@media screen and (max-width: 801px) {
  .burger-menu {
    cursor: pointer;
    display: block;
    position: relative;
    width: 30px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:before,
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 3px;
      background: $white;
    }

    &:before {
      top: 0;
    }

    &:after {
      bottom: 0;
    }

    span {
      position: absolute;
      width: 100%;
      height: 3px;
      background: $white;
    }
  }
}
</style>
