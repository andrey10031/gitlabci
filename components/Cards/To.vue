<template>
    <div class="cards__wrapper">
        <h3 class="cards__title">To</h3>
        <div class="cards__header">
            <SharedSelect 
                :options="select.getOptions"
                :label="select.getTo.label"
                :imgPath="select.getTo.img"
                :left="false"
                @select="select.toHandler"
            />
            <div @click="bridgeWalletToHandler" class="cards__input-wrapper">
                <div v-show="isOldLock" class="cards__input-bg"></div>
                <input 
                    v-model="store.walletAdressTo" 
                    type="text" 
                    :style="store.getBridgeWalletTo ? 'border: 1px solid red;' : 'border: none'" 
                    class="cards__input" 
                    placeholder="Wallet address"
                />
                <small 
                    v-show="store.getBridgeWalletTo" 
                    style="padding-left: 20px; color: red; margin-top: 5px;"
                >
                    invalid address
                </small>
            </div>
        </div>
        <div class="cards__footer">
            <h3 class="cards__title">You will receive</h3>
             <div class="cards__receive">
                {{Number(commission) < Number(balance) ? commission : '0'}} NNI
            </div>
            <ul class="cards__list">
                <li class="cards__list-item">
                    <img src="~~/assets/icons/info.svg" alt="info" class="cards__info">
                    <span class="cards__list-description">Make sure the network matches the entered network address.</span>
                </li>
            </ul>
        </div>
    </div> 
</template>


<script lang="ts" setup>
import {useSelectStore} from "~~/store/useSelectStore"
import { useStore } from "~~/store/useStore"
import { sliceAddress } from "~~/utils/BigNumber"
import { finalCommissionForUser } from "~~/utils/Comission"
import { getOldLock } from "~~/utils/ValidateSelect"

const store = useStore()
const select = useSelectStore()

const walletAddress = computed(() => sliceAddress(store.getWalletAddresTo))

const isOldLock = computed(()=> {
  // getOldLock(select.getFrom.label, store.getOldLock)
  if (!getOldLock(select.getFrom.label, store.getOldLock) && !store.invalidWCProvider ) {
    return false;
  } else {
    return true
  }
  
})

const bridgeWalletToHandler = () => store.bridgeWalletTo = false 

const balance = computed(() => select.getFrom.label === "Solana" ? store.getBalanceSol : store.getBalanceBe)


const commission = computed(() => finalCommissionForUser(select.getFrom.label, select.getTo.label, store.getComission, store.inputAmount) )

</script>

<style lang="scss" scoped>
    .cards {
        .cards {
            &__input {
                &-wrapper {
                    height: 56px;
                    position: relative;
                }
                &-bg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: #333;
                    opacity: 0.3;
                    border-radius: 12px;
                }
                &-value {
                    position: absolute;
                    left: 20px;
                    top: 50%;
                    transform: translate(0%, -45%);
                    font-weight: 700;
                    font-size: 16px;
                }
            }
        }


        &__receive {
            display: flex;
            align-items: center;
            align-self: center;
            min-height: 52px;
            padding-top: 25px;
            font-weight: 700;
            font-size: 24px;
            line-height: 24px;
            color: #fff;
            margin-bottom: 25px;
        }
        &__list {
            &-item {
                display: flex;
                align-items: flex-start;
            }
        }
        &__info {
            margin-right: 5px;
        }
    }
</style>