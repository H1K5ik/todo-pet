export interface IItem {
  text: string
  onDelete: () => void
  onSelect: () => void
  onEdit: () => void
  isSelected: boolean
}
