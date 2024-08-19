import React, { FC } from 'react'

import { ButtonAdapt, ButtonBig } from './styles'
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
}: {
  text: string
  color: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}) => {
  return (
    <ButtonBig backgroundColor={color} onClick={onClick}>
      <Typography.Input text={text} color={'white'} />
    </ButtonBig>
  )
}

const ButtonAdaptive = ({ text, color }: { text: string; color: string }) => {
  return <ButtonAdapt backgroundColor={color}>{text}</ButtonAdapt>
} // Пока к адаптивной кнопке стили правильно не написал!!

Button.ButtonPC = ButtonPC
Button.ButtonAdaptive = ButtonAdaptive
