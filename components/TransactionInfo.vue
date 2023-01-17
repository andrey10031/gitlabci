<template>
  <div class="absolute top-0 left-0 w-full h-full z-[2222]">
    <div class="bg"></div>
    <div class="transaction">
      <h2 class="transaction__title">Transaction Status</h2>
      <div class="transaction-info">
        <table class="transaction-table text-center">
          <thead>
            <tr>
              <th class="w-[33.3%]">From</th>
              <th class="w-[33.3%]">Amount</th>
              <th class="w-[33.3%]">To</th>
            </tr>
          </thead>
          <tbody>
            <tr class="body-1">
              <td>
                <div>
                  <div class="item" v-if="transaction.from === 'bsc'"><img src="~/assets/icons/select/bsc.svg" /><span>BSC</span></div>
                  <div class="item" v-if="transaction.from === 'eth'"><img src="~/assets/icons/eth.svg" /><span>ETH</span></div>
                  <div class="item" v-if="transaction.from === 'sol'"><img src="~/assets/icons/sol.svg" /><span>Solana</span></div>
                </div>
              </td>
              <td>{{ transaction.amount }} NNI</td>
              <td>
                <div>
                  <div class="item" v-if="transaction.to === 'bsc'"><img src="~/assets/icons/select/bsc.svg" /><span>BSC</span></div>
                  <div class="item" v-if="transaction.to === 'eth'"><img src="~/assets/icons/eth.svg" /><span>ETH</span></div>
                  <div class="item" v-if="transaction.to === 'sol'"><img src="~/assets/icons/sol.svg" /><span>SOL</span></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="transaction-status">
        <table class="transaction-table" cellpadding="0" cellspacing="0">
          <thead>
            <tr>
              <th class="w-[50%] text-left md:w-[100px]">Network</th>
              <th class="hidden !text-center md:table-cell">Progress</th>
              <th class="w-[50%] !text-right md:w-[100px]">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="width: 100px">
                <span v-if="transaction.from === 'sol'" class="item md:w-[50px]"><img src="~/assets/icons/sol.svg" /><span>Solana</span></span>
                <span v-if="transaction.from === 'eth'" class="item md:w-[50px]"><img src="~/assets/icons/eth.svg" /><span>ETH</span></span>
                <span v-if="transaction.from === 'bsc'" class="item md:w-[50px]"><img src="~/assets/icons/select/bsc.svg" /><span>BSC</span></span>
              </td>
              <td class="hidden justify-center md:inline w-full">
                <SharedProgressBarFirst v-if="transaction.from !== 'sol'" />
                <SharedProgressBarSecond v-else :start="transaction.firstStart" :finish="transaction.firstFinished" :info="transaction.firstStageInfo" />
              </td>
              <td class="max-w-[100px] w-full !text-right">
                <SharedTimer :key="'firstTimer'" :active="transaction.firstStart && transaction.firstFinished === false" />
              </td>
            </tr>
          </tbody>
        </table>
        <span class="flex justify-center items-center md:hidden w-full">
          <SharedProgressBarFirst v-if="transaction.from !== 'sol'" />
          <SharedProgressBarSecond v-else :start="transaction.firstStart" :finish="transaction.firstFinished" :info="transaction.firstStageInfo" />
        </span>
        <table class="transaction-table" cellpadding="0" cellspacing="0">
          <thead>
            <tr>
              <th></th>
              <th class="hidden md:table-cell"></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="width: 100px">
                <span v-if="transaction.to === 'sol'" class="item md:w-[50px]"><img src="~/assets/icons/sol.svg" /><span>Solana</span></span>
                <span v-if="transaction.to === 'eth'" class="item md:w-[50px]"><img src="~/assets/icons/eth.svg" /><span>ETH</span></span>
                <span v-if="transaction.to === 'bsc'" class="item md:w-[50px]"><img src="~/assets/icons/select/bsc.svg" /><span>BSC</span></span>
              </td>
              <td class="hidden md:inline w-full !py-0">
                <!-- <span>Waiting for first process</span> -->
                <SharedProgressBarSecond :start="transaction.secondStart" :finish="transaction.secondFinished" :info="transaction.secondStageInfo" />
              </td>
              <td class="max-w-[100px] w-full !text-right">
                <SharedTimer :key="'secTimer'" :active="transaction.secondStart && transaction.secondFinished === false" />
              </td>
            </tr>
          </tbody>
        </table>
        <span class="md:hidden w-full flex justify-center items-center">
          <SharedProgressBarSecond :start="transaction.secondStart" :finish="transaction.secondFinished" :info="transaction.secondStageInfo" />
        </span>
      </div>
      <SharedButton class="w-full md:!w-[226px] !p-0 h-[56px] mt-8 opacity-[80%]">
        <div class="spinner__wrapper flex items-center">
          <div class="spinner"></div>
          <span class="font-medium text-base ml-2">Wait for it</span>
        </div></SharedButton
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSelectStore } from '~~/store/useSelectStore'
import { useStore } from '~~/store/useStore'
import { useTransactionStore } from '~~/store/useTransactionStore'
import { commissionCalcForChains } from '~~/utils/Comission'
import { BNToNumstr } from '~~/utils/BigNumber'

const transaction = useTransactionStore()
const store = useStore()
const select = useSelectStore()

const commission = computed(() => {
  let to

  if (transaction.to === 'eth') {
    to = 'Ethereum'
  } else if (transaction.to === 'bsc') {
    to = 'Binance Smart Chain'
  } else {
    to = 'Solana'
  }

  return commissionCalcForChains(select.getFrom.label, to, store.getComission)
})

const nativeFee = computed(() => {
  return BNToNumstr(transaction.nativeFee, 18, 6)
})
</script>

<style lang="scss" scoped>
@import '~/assets/css/variables.scss';

.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(46, 22, 100, 0.6);
  backdrop-filter: blur(4px);
  cursor: pointer;
}

.transaction {
  padding: 30px 24px;
  display: flex;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 690px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background: $primary-bg;
  border-radius: $rounded;

  &-info {
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    margin-top: 24px;
    max-width: 444px;
    width: 100%;
  }
  &-table {
    color: $white;
    width: 100%;
    border-collapse: collapse;
    .body-1 {
      .item {
        @apply justify-center;
      }
    }
    th {
      padding: 10px 0px;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: $gray-primary;
      border-bottom: 1px solid $gray-primary;
      color: rgba(255, 255, 255, 0.6);
      @media screen and(min-width: 640px) {
        text-align: start;
      }
    }

    td {
      padding-top: 20px;
      padding-bottom: 20px;
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
      width: auto;
      text-align: center;
      // padding-left: 0px !important;
      // padding-right: 0px !important;
      @media screen and(min-width: 640px) {
        text-align: start;
        div {
          display: flex;
        }
      }

      .item {
        display: flex;
        align-items: center;
        justify-content: start;
        span {
          margin-left: 6px;
        }
      }
    }
  }

  &-status {
    width: 100%;
    margin-top: 24px;
  }
}

@media screen and(max-width: 800px) {
  .transaction {
    width: 98%;
  }
}
</style>
