<template>
  <section class="cards relative">
    <div class="container">
      <div class="card__template">
        <div class="cards__block">
          <!-- <CardsFrom
                        :openModal="modal.showMainModal"
                    />
                    <CardsTo/> -->
          <Card :openModal="modal.showMainModal" />
        </div>
        <Info />
        <CardsBottom :openModal="modal.showMainModal" />
      </div>
      <img class="hidden lg:flex absolute right-[64px] -top-[104px]" src="~/assets/bgTitle.png" alt="" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useModalStore } from '~/store/useModalStore'
import Card from './Card.vue'

const modal = useModalStore()
</script>

<style lang="scss">
.cards {
  max-width: 1600px;
  margin: auto;
  padding-top: 40px;
  &__template {
    display: flex;
    flex-direction: column;
  }

  &__bottom {
  }

  &__fromTo {
    @apply flex w-full flex-col justify-between sm:flex-row;
    .tokenNetwork {
      @apply w-full max-w-full mt-2 sm:mt-0;
      span {
        margin-bottom: 8px;
      }
      color: rgba(255, 255, 255, 0.6);
    }
  }

  &__block {
    display: flex;
    justify-content: center;
  }

  &__wrapper {
    max-width: 512px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 32px;
    // background: linear-gradient(180deg, #4b55e7 0%, #b66196 100%);
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(4px);
    box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
  }

  &__title {
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    color: #ffffff;
  }

  &__amount,
  &__input {
    width: 100%;
    padding: 18px 20px;
    background: #866bcb;
    border-radius: 12px;
    font-weight: 700;
    font-size: 16px;
    color: #fff;
    &::placeholder {
      color: #fff;
      opacity: 0.5;
    }

    &-wrapper {
      margin-top: 16px;
      position: relative;
    }
  }

  &__button {
    position: absolute;
    right: 8px;
    top: 8px;
    padding: 12px 28px;
    font-weight: 700;
    font-size: 13px;
    line-height: normal;
    color: #fff;
    background: linear-gradient(90deg, #273592 0%, #6639e3 100%);
    border-radius: 8px;
    cursor: pointer;
  }

  &__max {
    position: absolute;
    top: 15px;
    right: 15px;
    font-weight: 700;
    font-size: 20px;
    color: #293694;
    background: none;
    cursor: pointer;
  }

  &__amount {
    padding: 12px 16px;
    font-weight: 700;
    font-size: 24px;
  }

  &__list {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    width: 100%;
    &-item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
      &:last-child {
        margin-bottom: 0;
      }
    }

    &-description {
      text-align: left;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #d1d5db;
    }

    &-value {
      text-align: right;
      font-weight: 700;
      font-size: 16px;
    }
  }
}

@media screen and (max-width: 1030px) {
  .cards {
    padding-left: 16px;
    padding-right: 16px;
    &__block {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    &__wrapper {
      &:first-child {
        margin-bottom: 18px;
      }
    }
  }
}
</style>
