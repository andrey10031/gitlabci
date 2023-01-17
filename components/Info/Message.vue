<template>
  <div class="w-full h-full rounded-main p-3 sm:px-8 sm:py-6 flex items-start">
    <div>
      <img class="imgIcon" v-if="props.type === 'error'" src="~~/assets/icons/error.svg" alt="error" />
      <img class="imgIcon" v-else-if="props.type === 'success'" src="~~/assets/icons/success.svg" alt="success" />
      <img class="imgIcon" v-else-if="props.isOldLock" src="~~/assets/icons/error.svg" alt="info" />
    </div>
    <div class="flex flex-col ml-3 sm:ml-4 w-full">
      <h3 v-if="props.type" class="capitalize mb-[10px]">{{ props.type }}!</h3>
      <p v-if="props.type === 'error'" class="opacity-[80%]">
        {{ value }}
      </p>
      <div v-else-if="props.isOldLock" class="flex items-start">
        <span>
          Before transfering, you should finish the old bridge.<br />You`ve locked amount: <span class="font-bold">{{ amount }} tokens</span> <br />to be
          transfered to: <span class="oldLock">{{ address }}</span> <br />on: <span class="font-bold">{{ chain }}</span></span
        >
      </div>
      <div v-else-if="props.type === 'success'">
        <div v-if="hash" class="flex flex-col">
          <span class="opacity-[0.6]">You can follow the status of your transaction with this transaction hash:</span>
          <div class="flex justify-between mt-1 items-center w-full text-[14px]">
            <span class="font-medium hidden sm:flex text-[#33ECFE]">{{ sliceHash(props.hash, 28) }}</span>
            <span class="font-medium flex sm:hidden text-[#33ECFE]">{{ sliceHash(props.hash, 16) }}</span>
            <div @click="copyHash" class="flex items-center cursor-pointer">
              <img src="~~/assets/icons/copy.svg" alt="copy" />
              <!-- <span class="font-bold ml-2">Copy</span> -->
            </div>
          </div>
        </div>
        <div v-else>
          {{ props.value }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { customString } from '~/utils/tools'
import { useSelectStore } from '~~/store/useSelectStore'
import { useStore } from '~~/store/useStore'
import { BNToNumstr } from '~~/utils/BigNumber'
import { sliceHash } from '../../utils/BigNumber'

interface Message {
  type?: string
  value?: string
  hash?: string
  isOldLock?: boolean
}

const props = defineProps<Message>()

const copyHash = () => window.navigator.clipboard.writeText(props.hash)

const store = useStore()
const select = useSelectStore()

const amount = computed(() => {
  if (select.getFrom.label === 'Binance Smart Chain') {
    return BNToNumstr(store.getOldLock.bsc.amount, 18, 3)
  } else if (select.getFrom.label === 'Ethereum') {
    return BNToNumstr(store.getOldLock.eth.amount, 18, 3)
  } else if (select.getFrom.label === 'Solana') {
    return store.getOldLock.sol.amount.toString().slice(0, -6) + '.' + store.getOldLock.sol.amount.toString().slice(-6)
  } else {
    null
  }
})

const address = computed(() => {
  if (select.getFrom.label === 'Binance Smart Chain') {
    return store.getOldLock.bsc.address
  } else if (select.getFrom.label === 'Ethereum') {
    return store.getOldLock.eth.address
  } else if (select.getFrom.label === 'Solana') {
    return store.getOldLock.sol.address
  } else {
    return ''
  }
})

const chain = computed(() => {
  if (select.getFrom.label === 'Binance Smart Chain' || select.getFrom.label === 'Ethereum') {
    return 'Solana'
  } else if (store.getOldLock.sol.ethereum) {
    return 'Ethereum'
  } else if (!store.getOldLock.sol.ethereum) {
    return 'Binance Smart Chain'
  } else {
    return ''
  }
})
</script>

<style lang="scss" scoped>
.oldLock {
  font-weight: bold;
  word-break: break-word;
  color: #33ecfe;
}
.imgIcon {
  width: 40px;
  height: 40px;
  @media screen and (min-width: 640px) {
    width: 48px;
    height: 48px;
  }
}
</style>
