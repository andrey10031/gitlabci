<template>
  <header
    :class="{ '!bg-[#332558]': burgerMenu }"
    class="header bg-[#8572FF30] px-3 sm:px-6 lg:px-[60px] h-[64px] w-full flex items-center top-0 justify-between"
  >
    <div className="header__logo">
      <img class="h-[52px]" src="~/assets/logo.svg" alt="" />
      <img src="~/assets/title.svg" alt="" className="flex ml-3" />
    </div>
    <nav class="header__nav">
      <ul class="header__nav-list flex list-none">
        <li class="header__nav-list-item">
          <a href="#" target="_blank">Staking</a>
        </li>
        <li class="header__nav-list-item">
          <a href="#" target="_blank">Nomadpad</a>
        </li>
        <li class="header__nav-list-item">
          <a href="#" target="_blank">Swap</a>
        </li>
        <li class="header__nav-list-item">
          <a href="#" target="_blank">Farms</a>
        </li>
        <li class="header__nav-list-item">
          <a href="#" target="_blank">Pools</a>
        </li>
        <li class="header__nav-list-item">Bridge</li>
        <li class="header__nav-list-item">
          <a href="#" target="_blank">Capital</a>
        </li>
        <li class="header__nav-list-item">
          <a href="#" target="_blank">Nomadpay</a>
        </li>
        <div class="flex items-center ml-auto">
          <button v-if="!walletAddress" @click="modal.showMainModal" class="newButton">Connect wallet</button>
          <button v-else @click="a" class="newButton">{{ walletAddress }}</button>

          <MobileMenu :burgerMenu="burgerMenu" @click="burgerMenu = !burgerMenu" class="ml-[16px]" />
        </div>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import { useModalStore } from '../store/useModalStore'
import { sliceAddress } from '../utils/BigNumber'
import { useSelectStore } from '../store/useSelectStore'
import { useStore } from '../store/useStore'

const a = () => {
  modal.showModalDisconnect()
}

const modal = useModalStore()
const burgerMenu = ref(false)
const select = useSelectStore()
const store = useStore()
const connect = useStore()
const walletAddress = computed(() =>
  select.getFrom.label === 'Solana' ? sliceAddress(store.getWalletAddressFromSol) : sliceAddress(store.getWalletAddressFromBe)
)
watchEffect(() => {
  if((window as any).solana) {
    connect.connectPhantom(true)
  } else if((window as any).solflare) {
    connect.connectPhantom(false)
  }
})
</script>

<style lang="scss" scoped>
@import '~/assets/css/variables.scss';

.newButton {
  @apply text-sm sm:text-base w-[155px] lg:w-[170px] ml-[14px] lg:ml-8;
  border-radius: 8px;
  border: 2px solid #33ecfe;
  color: #fff;
  height: 45px;
  width: 180px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  line-height: 40px;
}

.header {
  padding: 20px auto;
  height: 83px;
  z-index: 100;
  font-family: 'Mako', sans-serif;
  // background: rgba(133, 114, 255, 0.2);
  @media screen and(min-width: 1325px) {
    padding-left: 120px;
    padding-right: 120px;
  }

  &__logo {
    display: flex;
    flex-direction: row;
    :last-child {
      @media screen and(max-width:1200px) {
        display: none;
      }
    }
  }

  &__nav {
    &-list {
      & > li {
        margin-left: 32px;
        &:first-child {
          margin-left: 0;
        }
        @media screen and(max-width: 1024px) {
          margin-left: 14px;
        }
      }
    }
    &-list-item {
      @media screen and(max-width: 810px) {
        display: none;
      }
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      font-weight: 400;
      display: flex;
      align-items: center;
      cursor: pointer;

      a {
        color: $gray-dark;
        text-decoration: none;
      }

      :hover {
        color: $gray;
      }

      &:last-child {
        color: $white;
        font-weight: 700;
      }
    }
  }
}
</style>
