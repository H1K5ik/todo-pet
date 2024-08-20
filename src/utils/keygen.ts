export function keygen(key: number) {
  if (!key) {
    return (key = 1)
  }
  key = key + 1
  console.log(key)
  return key
}
