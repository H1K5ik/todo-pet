import { useTheme } from '@component/themeContext'
import { colors } from '@theme'
import React, { FC } from 'react'

import { IText } from './interfaces'
import { DefaultText, HeaderText, InputText, LogoText, SettingsText } from './styles'

export const Typography: FC & {
  Logo: typeof Logo
  Header: typeof Header
  Input: typeof Input
  Default: typeof Default
  Settings: typeof Settings
} = () => {
  return <></>
}

const Header = ({ isBurgerOpen, path, text }: IText) => {
  const { isLight } = useTheme()

  return (
    <HeaderText $isBurgerOpen={isBurgerOpen ?? false} $isLight={isLight} to={path || ''}>
      {text}
    </HeaderText>
  )
}

const Input = ({ color = colors.WHITE, text }: IText) => {
  const { isLight } = useTheme()

  return (
    <InputText $isLight={isLight} color={color}>
      {text}
    </InputText>
  )
}

const Logo = ({ color = colors.WHITE, text }: IText) => {
  const { isLight } = useTheme()

  return (
    <LogoText $isLight={isLight} color={color}>
      {text}
    </LogoText>
  )
}

const Default = ({ text }: IText) => {
  const { isLight } = useTheme()

  return <DefaultText $isLight={isLight}>{text}</DefaultText>
}

const Settings = ({ color = colors.WHITE, text }: IText) => {
  const { isLight } = useTheme()

  return (
    <SettingsText $isLight={isLight} color={color}>
      {text}
    </SettingsText>
  )
}

Typography.Logo = Logo
Typography.Header = Header
Typography.Input = Input
Typography.Default = Default
Typography.Settings = Settings
