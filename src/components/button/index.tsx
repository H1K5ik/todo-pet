import { useTheme } from '@component/themeContext'
import { colors } from '@theme'
import React, { FC } from 'react'

import { IButton } from './interfaces'
import { ButtonDesktop } from './styles'
import { Typography } from '../typography'

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
