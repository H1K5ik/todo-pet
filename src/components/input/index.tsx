import { useTheme } from '@component/themecontext'
import { DEFAULT_MESSAGE } from '@const'
import React, { FC } from 'react'

import { InputBox } from './styles'

interface IInput {
  handleInputChange: React.ChangeEventHandler<HTMLInputElement>
  value: string
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement>
}

export const Input: FC<IInput> = ({ handleInputChange, value, onKeyDown }) => {
  const { isLight } = useTheme()
  return (
    <InputBox
      placeholder={DEFAULT_MESSAGE}
      onChange={handleInputChange}
      value={value}
      isLight={isLight}
      onKeyDown={(event) => {
        if (event?.key === 'Enter') {
          onKeyDown(event)
        }
      }}
    />
  )
}
