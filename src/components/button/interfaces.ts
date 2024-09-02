export interface IButton {
  text: string
  color: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  width?: string
  $isMobile: boolean
}
