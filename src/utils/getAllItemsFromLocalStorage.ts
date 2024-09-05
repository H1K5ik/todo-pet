export const getItems = () => {
  const savedItems = localStorage.getItem('items')
  return savedItems ? JSON.parse(savedItems) : []
}
