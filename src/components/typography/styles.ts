import { colors, fontStyle } from '@theme'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

export const LogoText = styled.div<{ color: string; isLight: boolean }>`
  background-color: transparent;

  color: ${(props: { isLight: boolean; color: string }) =>
    props.isLight ? props.color : colors.HEADER_TEXT_COLOR_LOGO_DARK};
  ${fontStyle.xl}

  text-align: left;

  font-family: Jost;
`

export const HeaderText = styled(NavLink)<{ isLight: boolean }>`
  color: ${(props: { isLight: boolean }) => (props.isLight ? colors.WHITE : colors.HEADER_TEXT_COLOR_NAV_DARK)};
  font-style: normal;

  ${fontStyle.xl}

  text-decoration: none;

  &.active {
    border-bottom: 2px solid
      ${(props: { isLight: boolean }) => (props.isLight ? colors.WHITE : colors.HEADER_TEXT_COLOR_NAV_DARK)};
  }
`

export const DefaultText = styled.div<{ isLight: boolean }>`
  color: ${(props: { isLight: boolean }) => (props.isLight ? colors.BLACK : colors.HEADER_TEXT_COLOR_DEFAULT_DARK)};
  font-style: normal;
  ${fontStyle.l}
`

export const InputText = styled.div<{ color: string; isLight: boolean }>`
  color: ${(props: { isLight: boolean; color: string }) =>
    props.isLight ? props.color : colors.HEADER_TEXT_COLOR_NAV_DARK};
  font-style: normal;
  ${fontStyle.m}
`
export const Settings = styled.div<{ color: string; isLight: boolean }>`
  color: ${(props: { isLight: boolean; color: string }) =>
    props.isLight ? props.color : colors.HEADER_TEXT_COLOR_NAV_DARK};
  font-style: normal;
  ${fontStyle.s}
`
