import { useTheme } from '@component/themeContext'
import { DEFAULT_MESSAGE } from '@const'
import { colors } from '@theme'
import React, { FC, KeyboardEvent } from 'react'
import { useMedia } from 'react-media-hook'

import { IInput } from './interfaces'
import { InputBox } from './styles'

export const Input: FC<IInput> = ({
  $isMobile,
  color = `${colors.BLACK}`,
  handleInputChange,
  onKeyDown,
  value,
  width = '557px',
}) => {
  const { isLight } = useTheme()
  const isTablet = useMedia('(max-width: 830px)')?.matches

  const handleOnKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event?.key === 'Enter') {
      onKeyDown(event)
    }
  }

  return (
    <InputBox
      $isLight={isLight}
      $isMobile={$isMobile ?? false}
      $isTablet={isTablet ?? false}
      color={color}
      onChange={handleInputChange}
      onKeyDown={handleOnKeyDown}
      placeholder={DEFAULT_MESSAGE}
      value={value}
      width={width}
    />
  )
}
