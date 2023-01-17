export function hexStringToByteArray(hexString: string) {
  if (hexString.length % 2 !== 0) {
    throw 'Must have an even number of hex digits to convert to bytes'
  }
  var numBytes = hexString.length / 2
  var byteArray = new Uint8Array(numBytes)
  for (var i = 0; i < numBytes; i++) {
    byteArray[i] = parseInt(hexString.substr(i * 2, 2), 16)
  }
  return byteArray
}

export function byteArrayToHexString(byteArray: Uint8Array) {
  var hexString = ''
  var nextHexByte
  for (var i = 0; i < byteArray.byteLength; i++) {
    nextHexByte = byteArray[i].toString(16)
    if (nextHexByte.length < 2) {
      nextHexByte = '0' + nextHexByte
    }
    hexString += nextHexByte
  }
  return hexString
}

export async function safe(promise: Promise<any>) {
  try {
    return [await promise, null]
  } catch (error) {
    return [null, error]
  }
}
