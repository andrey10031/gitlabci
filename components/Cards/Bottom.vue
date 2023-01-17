<template>
  <div class="bottom">
    <!-- Показываем при заходе пользователя на страницу, выполняет функцию подключения кошелька -->
    <SharedButton class="!bg-[#8a84ae]" v-if="info.getBackendIsDown">Service unavailable</SharedButton>
    <SharedButton v-else-if="!store.getWalletAddressFrom && !connected" @click="openModal">Connect Wallet</SharedButton>
    <!-- Показываем при вводе непрвильного amount из input  -->
    <SharedButton v-else-if="errorInput && !isOldLock">Invalid Amount</SharedButton>
    <SharedButton v-else-if="isOldLock && !loader" @click="oldLockHandler">Process old lock</SharedButton>
    <!-- Показываем если пользвователь законектился к кошельку -->
    <div class="bottom__error-wrapper" v-else-if="connected && !loader && !isOldLock">
      <SharedButton @click="bridgeHandler">Transfer</SharedButton>
      <div v-if="select.getFrom.label == 'Ethereum' || select.getTo.label == 'Ethereum' || store.invalidWCProvider" class="bottom__error"></div>
    </div>
    <!-- <SharedButton v-else-if="isOldLock && !loader">Process old lock</SharedButton> -->
    <!-- Показываем если пользватель решил сделать bridge, будет крутиться до полного завершения функции bridgeHandler -->
    <!-- <SharedButton v-else-if="loader"
      ><div class="spinner__wrapper"><div class="spinner"></div></div
    ></SharedButton> -->
  </div>
</template>

<script lang="ts" setup>
import { useStore } from '~~/store/useStore'
import { useSelectStore } from '~~/store/useSelectStore'
import { useInfoStore } from '~~/store/useInfoStore'
import { validateAddress } from '~~/utils/api/ValidateAddress'
import { getOldLock } from '~~/utils/ValidateSelect'
import { numstrToBN } from '~~/utils/BigNumber'
import { commissionCalcForChains } from '~~/utils/Comission'

const store = useStore()
const select = useSelectStore()
const info = useInfoStore()

const loader = ref(false)

const path = ref(false)

interface Props {
  openModal: () => void
}

const props = defineProps<Props>()

const isOldLock = computed(() => getOldLock(select.getFrom.label, store.getOldLock))

const connected = computed(() =>
  (store.BeProvider && select.from.label === 'Binance Smart Chain') ||
  (store.BeProvider && select.from.label === 'Ethereum') ||
  (store.solanaConnection && select.from.label === 'Solana')
    ? true
    : false
)

const oldLockHandler = async () => {
  select.getFrom.label === 'Solana' ? (path.value = true) : (path.value = false)
  await store.bridge(path.value)
}

const commission = computed(() => commissionCalcForChains(select.getFrom.label, select.getTo.label, store.getComission))

const balance = computed(() => (select.getFrom.label === 'Solana' ? store.getBalanceSol : store.getBalanceBe))

const errorInput = computed(() => {
  if (
    Number(store.getInputAmountString) > Number(balance.value) ||
    (Number(store.getInputAmountString) < Number(commission.value) * 3 && store.getInputAmountString !== '')
  ) {
    return true
  } else {
    return false
  }
})

const bridgeHandler = async () => {
  select.getFrom.label === 'Solana' ? (path.value = true) : (path.value = false)
  loader.value = true
  try {
    const valid = await validateAddress(store.walletAddressTo, !path.value)
    if (valid && store.inputAmount._hex !== '0x00') {
      store.bridgeWalletTo = false
      store.errorInput = false
      await store.bridge(path.value)
    } else if (!valid && store.inputAmount._hex === '0x00') {
      store.bridgeWalletTo = true
      store.errorInput = true
    } else if (store.inputAmount._hex === '0x00') {
      store.errorInput = true
    } else if (!valid) {
      store.bridgeWalletTo = true
    }
  } catch (error) {
    console.log(error)
  } finally {
    loader.value = false
  }
}
</script>

<style lang="scss" scoped>
.bottom {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 24px 0;
  &__error {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    background: #333;
    border-radius: 12px;
    &-wrapper {
      position: relative;
      max-width: 360px;
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
}
.a {
  width: 100px;
}
</style>
