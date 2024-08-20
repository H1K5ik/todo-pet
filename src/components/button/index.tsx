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
      <Typography.Input text={text} color={'white'} />
    </ButtonBig>
  )
}

const ButtonAdaptive = ({ text, color }: { text: string; color: string }) => {
  return <ButtonMobile backgroundColor={color}>{text}</ButtonMobile>
} // Пока к мобильным кнопкам стили правильно не писал!!

Button.ButtonPC = ButtonPC
Button.ButtonAdaptive = ButtonAdaptive
