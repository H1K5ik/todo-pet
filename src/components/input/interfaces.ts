import { ChangeEventHandler, KeyboardEventHandler } from 'react'

export interface IInput {
  handleInputChange?: ChangeEventHandler<HTMLInputElement>
  value: string
  onKeyDown: KeyboardEventHandler<HTMLInputElement>
  width?: string
  color?: string
  $isMobile?: boolean
}
