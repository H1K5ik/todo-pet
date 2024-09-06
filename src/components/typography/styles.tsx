import { NavLink } from 'react-router-dom'

import { colors, fontStyle } from '@theme'
import { styled } from 'styled-components'

export const InputText = styled.div<{ $isLight: boolean }>`
  margin: 0;

  color: ${(props) => (props.$isLight ? props.color : colors.TEXT_COLOR_DARK)};
  font-style: normal;
  ${fontStyle.m}
`

export const LogoText = styled.div<{ color: string; $isLight: boolean }>`
  background-color: transparent;

  color: ${(props) => (props.$isLight ? props.color : colors.TEXT_COLOR_DARK)};
  ${fontStyle.xl}

  text-align: left;
`

export const HeaderText = styled(NavLink)<{ $isLight: boolean; $isBurgerOpen: boolean }>`
  color: ${(props) => (props.$isLight ? colors.WHITE : colors.TEXT_COLOR_DARK)};
  font-style: normal;
  ${(props: { $isBurgerOpen: boolean }) => (props.$isBurgerOpen ? fontStyle.m : fontStyle.xl)}

  text-decoration: none;

  &.active {
    border-bottom: 2px solid ${(props) => (props.$isLight ? colors.WHITE : colors.GRAY)};
  }
`

export const DefaultText = styled.div<{ $isLight: boolean }>`
  color: ${(props) => (props.$isLight ? colors.BLACK : colors.TEXT_COLOR_DARK)};
  font-style: normal;
  ${fontStyle.l}
`

export const SettingsText = styled.div<{ color: string; $isLight: boolean }>`
  color: ${(props) => (props.$isLight ? props.color : colors.TEXT_COLOR_DARK)};
  font-style: normal;
  ${fontStyle.s}
`
