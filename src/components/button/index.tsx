import { colors } from '@theme'
import React, { FC } from 'react'

import { ButtonBig, ButtonMobile } from './styles'
import { Typography } from '../typography'

export const Button: FC & {
  ButtonPC: typeof ButtonPC
  ButtonAdaptive: typeof ButtonAdaptive
} = () => {
  return <></>
}
const ButtonPC = ({
  text,
  color,
  onClick,
  disabled = false,
}: {
  text: string
  color: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
}) => {
  return (
    <ButtonBig backgroundColor={color} onClick={onClick} style={{ visibility: disabled ? 'hidden' : 'visible' }}>
      <Typography.Input text={text} color={colors.WHITE} />
    </ButtonBig>
  )
}

const ButtonAdaptive = ({ text, color }: { text: string; color: string }) => {
  return <ButtonMobile backgroundColor={color}>{text}</ButtonMobile>
}

Button.ButtonPC = ButtonPC
Button.ButtonAdaptive = ButtonAdaptive
