import { BridgeBalances } from './types'
import { bscTokenContract } from './contracts'
import { address as bscBridgeAddr } from '../abis/bsc/BridgeAssist.json'
import { web3 } from '@project-serum/anchor'
import { clusterApiUrl } from '@solana/web3.js'
import { bridgeTokenAddress, SOLANA_NETWORK, SOLANA_WS_NETWORK } from "../abis/config.json"
import { BNToNumstr } from './BigNumber'
import { BigNumber } from 'ethers'

export async function getBridgeBalances(): Promise<BridgeBalances> {
    let connection = new web3.Connection(SOLANA_NETWORK, {wsEndpoint: SOLANA_WS_NETWORK});
    const bscBridgeBalance = BNToNumstr(await bscTokenContract.balanceOf(bscBridgeAddr), 18, 0)
    const solanaBridgeBalanceWei = await (await connection.getTokenAccountBalance(new web3.PublicKey(bridgeTokenAddress))).value.amount
    const solanaBridgeBalance = BNToNumstr(BigNumber.from(solanaBridgeBalanceWei), 6, 0)
    return { bscBridgeBalance, solanaBridgeBalance }
}

