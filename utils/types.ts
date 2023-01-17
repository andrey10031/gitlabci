import { BigNumber } from 'ethers'
import { BN } from '@project-serum/anchor'

export interface Commission {
  bscSol: BigNumber
  ethSol: BigNumber
  solBsc: BigNumber
  solEth: BigNumber
}

export interface Option {
  label: string
  img: string
}

export interface OldLock {
  bsc: {
    isOldLock: boolean
    amount: number | BigNumber
    address: string
  }
  eth: {
    isOldLock: boolean
    amount: number | BigNumber
    address: string
  }
  sol: {
    isOldLock: boolean
    amount: number | BN
    address: string
    ethereum: boolean
  }
}

export interface BridgeBalances {
  bscBridgeBalance: string,
  solanaBridgeBalance: string
}
