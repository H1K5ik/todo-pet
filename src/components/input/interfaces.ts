export interface IInput {
  handleInputChange?: React.ChangeEventHandler<HTMLInputElement>
  value: string
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement>
  width?: string
  color?: string
  $isMobile?: boolean
}
