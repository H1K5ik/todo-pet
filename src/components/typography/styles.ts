import { colors } from '@theme'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

export const LogoText = styled.div<{ color: string; isLight: boolean }>`
  background-color: transparent;

  color: ${(props: { isLight: boolean; color: string }) =>
    props.isLight ? props.color : colors.HEADER_TEXT_COLOR_LOGO_DARK};
  font-weight: 400;
  font-size: 36px;
  text-align: left;

  font-family: Jost;
`

export const HeaderText = styled(NavLink)<{ isLight: boolean }>`
  color: ${(props: { isLight: boolean }) => (props.isLight ? 'white' : colors.HEADER_TEXT_COLOR_NAV_DARK)};
  font-style: normal;
  font-weight: 400;
  font-size: 36px;

  font-family: Jost, sans-serif;
  text-decoration: none;

  &.active {
    text-decoration: underline;
  }
`

export const DefaultText = styled.div<{ isLight: boolean }>`
  color: ${(props: { isLight: boolean }) => (props.isLight ? 'black' : colors.HEADER_TEXT_COLOR_DEFAULT_DARK)};
  font-style: normal;
  font-weight: 400;
  font-size: 28px;

  font-family: Jost, sans-serif;
`

export const InputText = styled.div<{ color: string; isLight: boolean }>`
  color: ${(props: { isLight: boolean; color: string }) =>
    props.isLight ? props.color : colors.HEADER_TEXT_COLOR_NAV_DARK};
  font-style: normal;
  font-weight: 400;
  font-size: 24px;

  font-family: Jost, sans-serif;
`
