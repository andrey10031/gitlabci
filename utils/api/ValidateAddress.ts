import { PublicKey } from '@solana/web3.js'
import { utils } from 'ethers'

export const validateAddress = async (destAddress: string, isSolana: boolean): Promise<boolean> => {
  if (isSolana) {
    return await validateAddressToSolana(destAddress)
  } else {
    return await validateAddressToBscEth(destAddress)
  }
}

export const validateAddressToSolana = async (destAddress: string): Promise<boolean> => {
  try {
    const publicKey = new PublicKey(destAddress)
    const validAdress = await PublicKey.isOnCurve(publicKey.toBuffer())
    return validAdress
  } catch (error) {
    return false
  }
}

export const validateAddressToBscEth = async (destAddress: string): Promise<boolean> => {
  try {
    return utils.isAddress(destAddress)
  } catch (error) {
    return false
  }
}
