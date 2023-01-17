import axios from 'axios'
import { BigNumber, ethers } from 'ethers'

const BSC_RPC = 'https://bsc-dataseed.binance.org/'
const ETH_RPC = 'https://bsc-dataseed1.binance.org/'

interface FetchFee {
  bscSol: BigNumber
  ethSol: BigNumber
  solBsc: BigNumber
  solEth: BigNumber
}

async function getGasPrice(isBsc: boolean) {
  const rpc = isBsc ? BSC_RPC : ETH_RPC
  const provider = new ethers.providers.JsonRpcProvider(rpc)
  const gasPrice = await provider.getGasPrice()
  return gasPrice
}

// async function getDollarPrice(symbol: string): Promise<number> {
//   const res = await axios.get(
//     `https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=${symbol}-USDT`
//   );
//   if (symbol == "BNB") {
//   }
//   return parseFloat(res.data.data.price);
// }

export async function getDollarPrice(symbol: string) {
  const res = await axios.get(`https://www.xt.pub/exchange/api/markets/returnOrderBook?depth=1&level=1&currencyPair=${symbol}_USDT`)
  return res.data.asks[0][0][0]
}

export const fetchFee = async (): Promise<FetchFee> => {
  const bscSol = await calculateFee(BigNumber.from(50000), true)
  const ethSol = await calculateFee(BigNumber.from(50000), false)
  const solBsc = await calculateFee(BigNumber.from(60000), true)
  const solEth = await calculateFee(BigNumber.from(60000), false)
  return { bscSol, ethSol, solBsc, solEth }
}

export async function calculateFee(gas: BigNumber, isBsc: boolean) {
  // returns fee in arenum wei
  try {
    const neonomadPrice = await getDollarPrice('NNI')
    const nativeEvmTokenFeeBN = (await getGasPrice(isBsc)).mul(gas).div(10 ** 12) // evm fee * 10 ** 6
    let nativeEvmTokenFee = nativeEvmTokenFeeBN.toNumber()
    if (isBsc) {
      nativeEvmTokenFee = nativeEvmTokenFee * (await getDollarPrice('BNB'))
    } else {
      nativeEvmTokenFee = nativeEvmTokenFee * (await getDollarPrice('ETH'))
    }

    const solanaPart = ((await getDollarPrice('SOL')) * 0.01) / neonomadPrice // solana fee in arenum wei
    const evmPart = nativeEvmTokenFee / neonomadPrice // evm fee in arenum wei
    let fullFee = solanaPart + evmPart
    if (fullFee < 1) {
      fullFee = 1
    }
    return BigNumber.from(Math.ceil(fullFee))
  } catch {
    return BigNumber.from(240000)
      .mul(isBsc ? 1 : 28)
      .mul(gas)
      .div(40000)
  }
}
