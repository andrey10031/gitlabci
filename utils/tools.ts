export function customString(str: string) {
  if (str.length >= 9) {
    return str[0] + str[1] + str[2] + str[3] + str[4] + str[5] + '...' + str[str.length - 4] + str[str.length - 3] + str[str.length - 2] + str[str.length - 1]
  } else {
    return str
  }
}
