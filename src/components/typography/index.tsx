import React, { FC } from 'react'

import { DefaultText, HeaderText, InputText, LogoText } from './styles'

export const Typography: FC & {
  Logo: typeof Logo
  Header: typeof Header
  Input: typeof Input
  Default: typeof Default
} = () => {
  return <></>
}

const Header = ({ text }: { text: string }) => {
  return <HeaderText>{text}</HeaderText>
}

const Input = ({ text, color }: { text: string; color: string }) => {
  return <InputText color={color}>{text}</InputText>
}

const Logo = ({ text, color = 'white' }: { text: string; color?: string }) => {
  return <LogoText color={color}>{text}</LogoText>
}

const Default = ({ text }: { text: string }) => {
  return <DefaultText>{text}</DefaultText>
}

Typography.Logo = Logo
Typography.Header = Header
Typography.Input = Input
Typography.Default = Default
