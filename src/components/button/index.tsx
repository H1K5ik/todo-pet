import { colors } from '@theme'
import React, { FC } from 'react'

import { ButtonDesktop } from './styles'
import { Typography } from '../typography'

export const Button: FC<{
  text: string
  color: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  width?: string
}> = ({ text, color, onClick, disabled = false, width }) => {
  return (
    <ButtonDesktop
      backgroundColor={color}
      onClick={onClick}
      style={{ visibility: disabled ? 'hidden' : 'visible', width: width }}
    >
      <Typography.Input text={text} color={colors.WHITE} />
    </ButtonDesktop>
  )
}
