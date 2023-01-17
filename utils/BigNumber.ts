import { BigNumber, BigNumberish, utils } from 'ethers'

export const secondsInDay = 86400

export const sliceAddress = (address: string | null): string => (address ? `${address.slice(0, 6)}...${address.slice(-4, address.length)}` : '')
export const sliceHash = (hash: string | null, decimals: number): string => (hash ? `${hash.slice(0, decimals)}...${hash.slice(-5, hash.length)}` : '')

export function timestampToDate(timestamp: number): string {
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const date = new Date(timestamp * 1000)
  return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`
}

export const formatToTime = (start, period) => {
  const now = new Date().getTime() / 1000
  let endDate = Number(start) + Number(period)
  const timeMinut = endDate - now
  let seconds = Math.floor(timeMinut % 60) 
  let minutes = Math.floor((timeMinut / 60) % 60) 
  let hour = Math.floor((timeMinut / 60 / 60) % 24)
  let days = Math.floor(timeMinut / 60 / 60 / 24)
  return ` ${days <= 0 ? '' : days + 'd' + ' : '}  ${hour <= 0 ? '00' + 'h' : hour + 'h'} : ${minutes <= 0 ? '00m' : minutes + 'm'} : ${
    seconds <= 0 ? '00' + 's' : seconds + 's'
  }`
}

export const removeTrailingZeros = (str: string): string => {
  return str.replace(/\.?0+$/, '')
}

export const numstrToBN = (input: string, dec: number): BigNumber => {
  if (!input) return BigNumber.from(0)
  const spl = input.split('.')
  if (spl[1]?.length > dec) {
    input = [spl[0], spl[1].slice(0, dec)].join('.')
  }
  return utils.parseUnits(input, dec)
}

export const BNToNumstr = (bn: BigNumberish | null, dec: number, prec: number): string => {
  let res = BNToNumstrStrict(bn, dec, prec)
  if (res.split('.')[1]) res = removeTrailingZeros(res)
  return res
}

export const BNToNumstrStrict = (bn: BigNumberish, dec: number, prec: number): string => {
  if (!bn) return '0'
  const spl = utils.formatUnits(bn, dec).split('.')
  if (prec === 0) return spl[0]
  return [spl[0], ((spl[1] || '') + '0'.repeat(prec)).slice(0, prec)].join('.')
}
