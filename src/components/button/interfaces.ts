import { MouseEventHandler } from 'react'

export interface IButton {
  text: string
  color: string
  onClick: MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  width?: string
  $isMobile: boolean
}
