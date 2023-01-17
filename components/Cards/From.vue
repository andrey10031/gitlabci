<template>
  <div class="cards__wrapper">
    <h3 class="cards__title">From</h3>
    <div class="cards__header">
      <SharedSelect
        :options="select.getOptions"
        :label="select.getFrom.label"
        :imgPath="select.getFrom.img"
        :left="true"
        @select="select.fromHandler"
      />
      <div class="cards__input-wrapper">
        <input :value="walletAddress" type="text" class="cards__input" placeholder="Wallet address" readonly />
        <button v-if="!disconnectButton" @click="openModal" class="cards__button">Connect Wallet</button>
        <button v-else @click="disconnectFunc" class="cards__button">Disconnect</button>
      </div>
    </div>
    <div class="cards__footer">
      <h3 class="cards__title">Amount</h3>
      <SharedInput
        @inputHandler="inputHandler"
        :inputValue="store.getInputAmountString"
        :error="errorInput"
        :bridgeBalanceError='bridgeBalanceError'
        :balance="store.getBalance"
        :maxAMount="maxAMount"
        :isBlocked="isOldLock"
      />
      <ul class="cards__list">
        <li class="cards__list-item">
          <span class="cards__list-description">Balance</span>
          <span class="cards__list-value">{{ balance }} NNI</span>
        </li>
        <li class="cards__list-item">
          <span class="cards__list-description">Fee</span>
          <span class="cards__list-value">{{Number(commission) <= 0 ? '...calculating fee' : `${commission} NNI` }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from '~/store/useStore';
import { useSelectStore } from '~~/store/useSelectStore';
import { sliceAddress } from '~~/utils/BigNumber';
import { commissionCalcForChains } from '~~/utils/Comission';
import { BNToNumstr } from '../../utils/BigNumber';
import { getOldLock } from '../../utils/ValidateSelect';

const store = useStore();
const select = useSelectStore();

interface Props {
  openModal: () => void;
}
const props = defineProps<Props>();

const inputValue = ref('');

const balance = computed(() => select.getFrom.label === "Solana" ? store.getBalanceSol : store.getBalanceBe)

const walletAddress = computed(() => select.getFrom.label === "Solana" ? 
  sliceAddress(store.getWalletAddressFromSol) 
  : 
  sliceAddress(store.getWalletAddressFromBe))

const disconnectButton = computed(() => { 
  if (select.getFrom.label === "Solana"  && store.getWalletAddressFromSol || select.getFrom.label === "Binance Smart Chain" 
      && store.getWalletAddressFromBe || select.getFrom.label === "Ethereum" && store.getWalletAddressFromBe) {
    return true
  } else {
    return false
  }
})

const disconnectFunc = async() => select.getFrom.label === 'Solana' ?  store.resetPhantom() : await store.resetMetamask()

const inputHandler = (e: any) => {
  const regex = /^[0-9]*[.]?[0-9]*$/;
  if (!regex.test(e.target.value)) {
    e.target.value = store.inputAmountString;
  } else {
    store.inputAmountString = e.target.value;
    store.setInputAmount(store.inputAmountString)
    store.errorInput = false;
    // Number(inputValue.value) > Number(balance.value) || Number(inputValue.value) < Number(commission.value) * 3 
    //   ? (store.errorInput = true) 
    //   : (store.errorInput = false);
  }
};

const maxAMount = () => {
  store.inputAmountString = balance.value
  store.setInputAmount(store.inputAmountString)
};

const isOldLock = computed(()=> {
  // getOldLock(select.getFrom.label, store.getOldLock)
  if (!getOldLock(select.getFrom.label, store.getOldLock) && !store.invalidWCProvider ) {
    return false;
  } else {
    return true
  }
  
})


const commission = computed(() => commissionCalcForChains(select.getFrom.label, select.getTo.label, store.getComission))

const bridgeBalanceError = computed(() => {
  if (select.getFrom.label === "Solana" && store.inputAmountString !== '') {
    return Number(store.inputAmountString) >= Number(store.bridgeBalances.bsc)
  } else if (select.getFrom.label === "Binance Smart Chain" && store.inputAmountString !== '') {
    return Number(store.inputAmountString) >= Number(store.bridgeBalances.sol)
  } else {
    return false
  }
})

const errorInput = computed(() => {
  if (Number(store.getInputAmountString) > Number(balance.value) || Number(store.getInputAmountString) < Number(commission.value) * 3 &&  store.getInputAmountString !== "" || store.getErrorInput) {
    return true;
  } else {
    return false
  }
})

</script>



<style lang="scss" scoped></style>
