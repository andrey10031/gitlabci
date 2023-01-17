<template>
  <div class="menu">
    <img v-if="!burgerMenu" src="~/assets/burgerMenu.svg" alt="" />
    <img width="28" v-else src="~/assets/close.svg" alt="" />
    <nav v-if="burgerMenu" class="menu__nav z-[1]">
      <ul class="menu__nav-list">
        <li class="menu__nav-list-item">
          <a href="#" target="_blank">Staking</a>
        </li>
        <li class="menu__nav-list-item">
          <a href="#" target="_blank">Nomadpad</a>
        </li>
        <li class="menu__nav-list-item">
          <a href="#" target="_blank">Swap</a>
        </li>
        <li class="menu__nav-list-item">
          <a href="#" target="_blank">Farms</a>
        </li>
        <li class="menu__nav-list-item">
          <a href="#" target="_blank">Pools</a>
        </li>
        <li class="menu__nav-list-item">Bridge</li>
        <li class="menu__nav-list-item">
          <a href="#" target="_blank">Capital</a>
        </li>
        <li class="menu__nav-list-item">
          <a href="#" target="_blank">Nomadpay</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
interface Burger {
  burgerMenu: boolean
}
const props = defineProps<Burger>()
</script>

<style lang="scss" scoped>
@import '~/assets/css/variables.scss';

.menu {
  display: flex;
  justify-content: center;
  width: 32px;

  #toggle {
    position: absolute;
    height: 30px;
    opacity: 0;
    width: 30px;

    &:not(:checked) + .menu__nav {
      height: 0px;
      overflow: hidden;
      opacity: 0;
    }

    &::checked + .menu__nav {
      height: fit-content;
      opacity: 1;
    }
  }

  &__nav {
    position: absolute;
    top: 83px;
    transition-duration: 0.3s;
    left: 0;
    width: 100%;
    background: #332558;
    padding: 11px 35px 0px 0px;
    display: flex;
    justify-content: right;
    text-align: center;

    &-list {
      display: flex;
      flex-direction: column;
      list-style: none;

      &-item {
        margin-top: 8px;
        cursor: pointer;
        font-size: 16px;
        font-weight: 500;
        text-align: end;
        height: 40px;

        &:first-child {
          margin-top: 0;
        }

        &:last-child {
          color: $white;
          /* font-weight: 500; */
        }

        a {
          text-decoration: none;
          color: $gray-dark;
        }

        :hover {
          color: $gray;
        }
      }
    }
  }

  @media screen and (min-width: 801px) {
    display: none;
  }
}
</style>
