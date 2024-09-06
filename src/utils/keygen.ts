export function keygen(key: number) {
  if (!key) {
    return (key = 1)
  }
  key = key + 1
  return key
}
