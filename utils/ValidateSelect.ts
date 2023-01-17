import { OldLock } from './types'

export const getOldLock = (label: string, oldLockObj: OldLock): boolean => {
  if (label === 'Binance Smart Chain' && oldLockObj.bsc.isOldLock) {
    return true
  } else if (label === 'Ethereum' && oldLockObj.eth.isOldLock) {
    return true
  } else if (label === 'Solana' && oldLockObj.sol.isOldLock) {
    return true
  } else {
    return false
  }
}
