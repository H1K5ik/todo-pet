import { useTheme } from '@component/themecontext'
import { colors } from '@theme'
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

interface IText {
  text: string
  path?: string
  color?: string
}

const Header = ({ text, path }: IText) => {
  const { isLight } = useTheme()
  return (
    <HeaderText to={path || ''} isLight={isLight}>
      {text}
    </HeaderText>
  )
}

const Input = ({ text, color = colors.WHITE }: IText) => {
  const { isLight } = useTheme()
  return (
    <InputText color={color} isLight={isLight}>
      {text}
    </InputText>
  )
}

const Logo = ({ text, color = colors.WHITE }: IText) => {
  const { isLight } = useTheme()
  return (
    <LogoText color={color} isLight={isLight}>
      {text}
    </LogoText>
  )
}

const Default = ({ text }: IText) => {
  const { isLight } = useTheme()
  return <DefaultText isLight={isLight}>{text}</DefaultText>
}

const Settings = ({ text, color = colors.WHITE }: IText) => {
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
