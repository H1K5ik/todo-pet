import { useTheme } from '@component/themecontext'
import { colors } from '@theme'
import React, { FC } from 'react'

import { IButton } from './interfaces'
import { ButtonDesktop } from './styles'
import { Typography } from '../typography'

export const Button: FC<IButton> = ({ text, color, onClick, disabled = false, width, $isMobile }) => {
  const { isLight } = useTheme()
  return (
    <ButtonDesktop
      $backgroundColor={color}
      onClick={onClick}
      $isLight={isLight}
      style={{ visibility: disabled ? 'hidden' : 'visible', width: width }}
      $isMobile={$isMobile}
    >
      <Typography.Input text={text} color={colors.WHITE} />
    </ButtonDesktop>
  )
}
