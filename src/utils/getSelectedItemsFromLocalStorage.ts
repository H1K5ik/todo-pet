export const getSelectedItems = () => {
  const savedItems = localStorage.getItem('items')
  if (savedItems) {
    const parsedItems = JSON.parse(savedItems) as Array<{ id: number; selected: boolean }>
    const selItems = parsedItems.filter((obj) => obj.selected).map((obj) => obj.id)
    return new Set(selItems)
  }
  return new Set<number>()
}
