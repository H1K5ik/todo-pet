import { useTheme } from '@component/themecontext'
import { DEFAULT_MESSAGE } from '@const'
import { colors } from '@theme'
import React, { FC } from 'react'
import { useMedia } from 'react-media-hook'

import { IInput } from './interfaces'
import { InputBox } from './styles'

export const Input: FC<IInput> = ({
  handleInputChange,
  value,
  onKeyDown,
  width = '557px',
  color = `${colors.BLACK}`,
  $isMobile,
}) => {
  const { isLight } = useTheme()
  const isTablet = useMedia('(max-width: 770px)')?.matches
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
      $isTablet={isTablet || false}
      $isMobile={$isMobile ?? false}
    />
  )
}
