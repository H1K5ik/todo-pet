import React, { FC } from 'react'

import { useTheme } from '@component/themeContext'
import { colors } from '@theme'

import { Typography } from '../typography'

import { IButton } from './interfaces'
import { ButtonDesktop } from './styles'

export const Button: FC<IButton> = ({ $isMobile, color, disabled = false, onClick, text, width }) => {
  const { isLight } = useTheme()

  return (
    <ButtonDesktop
      $backgroundColor={color}
      $isLight={isLight}
      $isMobile={$isMobile}
      onClick={onClick}
      style={{ visibility: disabled ? 'hidden' : 'visible', width: width }}
    >
      <Typography.Input color={colors.WHITE} text={text} />
    </ButtonDesktop>
  )
}
