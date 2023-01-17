import { Contract, providers } from 'ethers'
import { Token, BridgeAssist } from '~~/typechain-types'
import { BSC_RPC, ETH_RPC } from '../abis/config.json'
import { abi as bscTokenAbi, address as bscTokenAddr } from '../abis/bsc/Token.json'
import { abi as bscBridgeAbi, address as bscBridgeAddr } from '../abis/bsc/BridgeAssist.json'
import { abi as ethTokenAbi, address as ethTokenAddr } from '../abis/eth/Token.json'
import { abi as ethBridgeAbi, address as ethBridgeAddr } from '../abis/eth/BridgeAssist.json'

export const bscProvider = new providers.JsonRpcProvider(BSC_RPC)
export const bscTokenContract = new Contract(bscTokenAddr, bscTokenAbi, bscProvider) as Token
export const bscBridgeContract = new Contract(bscBridgeAddr, bscBridgeAbi, bscProvider) as BridgeAssist

export const ethProvider = new providers.JsonRpcProvider(ETH_RPC)
export const ethTokenContract = new Contract(ethTokenAddr, ethTokenAbi, ethProvider) as Token
export const ethBridgeContract = new Contract(ethBridgeAddr, ethBridgeAbi, ethProvider) as BridgeAssist

export const getEthTokenSigner = (signer: any): Token => new Contract(ethTokenAddr, ethTokenAbi, signer) as Token

export const getEthBridgeSigner = (signer: any): BridgeAssist => new Contract(ethBridgeAddr, ethBridgeAbi, signer) as BridgeAssist

export const getBscTokenSigner = (signer: any): Token => new Contract(bscTokenAddr, bscTokenAbi, signer) as Token

export const getBscBridgeSigner = (signer: any): BridgeAssist => new Contract(bscBridgeAddr, bscBridgeAbi, signer) as BridgeAssist
