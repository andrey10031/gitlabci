import { Option, Commission } from './types'
import { BNToNumstr } from '~~/utils/BigNumber'
import { BigNumber } from 'ethers'

export const commissionCalculation = (value: BigNumber, inputAmount: BigNumber): string => {
  if (Number(BNToNumstr(inputAmount.sub(value), 6, 7)) < 0) {
    return '0'
  } else {
    return BNToNumstr(inputAmount.sub(value), 6, 7)
  }
}
export const finalCommissionForUser = (valueFrom: string, valueTo: string, objectCommision: Commission, inputAmount: BigNumber): string => {
  if (valueFrom === 'Binance Smart Chain' && valueTo === 'Solana') {
    return commissionCalculation(objectCommision.bscSol, inputAmount)
  } else if (valueFrom === 'Ethereum' && valueTo === 'Solana') {
    return commissionCalculation(objectCommision.ethSol, inputAmount)
  } else if (valueFrom === 'Solana' && valueTo === 'Binance Smart Chain') {
    return commissionCalculation(objectCommision.solBsc, inputAmount)
  } else if (valueFrom === 'Solana' && valueTo === 'Ethereum') {
    return commissionCalculation(objectCommision.solEth, inputAmount)
  }
}

export const commissionCalcForChains = (valueFrom: string, valueTo: string, objectCommision: Commission): string => {
  if (valueFrom === 'Binance Smart Chain' && valueTo === 'Solana') {
    return BNToNumstr(objectCommision.bscSol, 6, 7)
  } else if (valueFrom === 'Ethereum' && valueTo === 'Solana') {
    return BNToNumstr(objectCommision.ethSol, 6, 7)
  } else if (valueFrom === 'Solana' && valueTo === 'Binance Smart Chain') {
    return BNToNumstr(objectCommision.solBsc, 6, 7)
  } else if (valueFrom === 'Solana' && valueTo === 'Ethereum') {
    return BNToNumstr(objectCommision.solEth, 6, 7)
  }
}
