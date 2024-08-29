import { useTheme } from '@component/themecontext'
import { DEFAULT_MESSAGE } from '@const'
import { colors } from '@theme'
import React, { FC } from 'react'

import { InputBox } from './styles'

interface IInput {
  handleInputChange?: React.ChangeEventHandler<HTMLInputElement>
  value: string
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement>
  width?: string
  color?: string
}

export const Input: FC<IInput> = ({
  handleInputChange,
  value,
  onKeyDown,
  width = '557px',
  color = `${colors.BLACK}`,
}) => {
  const { isLight } = useTheme()
  return (
    <InputBox
      placeholder={DEFAULT_MESSAGE}
      onChange={handleInputChange}
      width={width}
      color={color}
      value={value}
      $isLight={isLight}
      onKeyDown={(event) => {
        if (event?.key === 'Enter') {
          onKeyDown(event)
        }
      }}
    />
  )
}
