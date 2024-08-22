import { useTheme } from '@component/themecontext'
import React, { FC } from 'react'

import { DefaultText, HeaderText, InputText, LogoText } from './styles'

export const Typography: FC & {
  Logo: typeof Logo
  Header: typeof Header
  Input: typeof Input
  Default: typeof Default
  Settings: typeof Settings
} = () => {
  return <></>
}

// Заменить на интерфейс один и подумать, как сократить
const Header = ({ text, path }: { text: string; path: string }) => {
  const { isLight } = useTheme()
  return (
    <HeaderText to={path} isLight={isLight}>
      {text}
    </HeaderText>
  )
}

const Input = ({ text, color = 'white' }: { text: string; color?: string }) => {
  const { isLight } = useTheme()
  return (
    <InputText color={color} isLight={isLight}>
      {text}
    </InputText>
  )
}

const Logo = ({ text, color = 'white' }: { text: string; color?: string }) => {
  const { isLight } = useTheme()
  return (
    <LogoText color={color} isLight={isLight}>
      {text}
    </LogoText>
  )
}

const Default = ({ text }: { text: string }) => {
  const { isLight } = useTheme()
  return <DefaultText isLight={isLight}>{text}</DefaultText>
}

const Settings = ({ text, color = 'white' }: { text: string; color?: string }) => {
  const { isLight } = useTheme()
  return (
    <InputText color={color} isLight={isLight}>
      {text}
    </InputText>
  )
}

Typography.Logo = Logo
Typography.Header = Header
Typography.Input = Input
Typography.Default = Default
Typography.Settings = Settings
