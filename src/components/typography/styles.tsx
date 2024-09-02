import { colors, fontStyle } from '@theme'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

const NavLinkStyled = styled(NavLink)<{ $isLight: boolean; color: string }>`
  color: ${(props) => (props.$isLight ? colors.WHITE : colors.HEADER_TEXT_COLOR_NAV_DARK)};
  font-style: normal;
  ${fontStyle.m}

  text-decoration: none;

  &.active {
    border-bottom: 2px solid ${(props) => (props.$isLight ? colors.WHITE : colors.HEADER_TEXT_COLOR_NAV_DARK)};
  }
`

const DivStyled = styled.div<{ $isLight: boolean; color: string }>`
  margin: 0;

  color: ${(props) => (props.$isLight ? props.color : colors.HEADER_TEXT_COLOR_NAV_DARK)};
  font-style: normal;
  ${fontStyle.m}
`

const InputTextComponent: React.FC<{
  $isopen?: boolean
  color: string
  $isLight: boolean
  path?: string
  children?: React.ReactNode
}> = ({ $isopen = false, path = '', children, $isLight, color, ...props }) => {
  if ($isopen) {
    return (
      <NavLinkStyled to={path || '#'} $isLight={$isLight} color={color} {...props}>
        {children}
      </NavLinkStyled>
    )
  }

  return (
    <DivStyled $isLight={$isLight} color={color} {...props}>
      {children}
    </DivStyled>
  )
}

export const InputText = styled(InputTextComponent)`
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

export const HeaderText = styled(NavLink)<{ $isLight: boolean }>`
  color: ${(props) => (props.$isLight ? colors.WHITE : colors.TEXT_COLOR_DARK)};
  font-style: normal;
  ${fontStyle.xl}

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

export const Settings = styled.div<{ color: string; $isLight: boolean }>`
  color: ${(props) => (props.$isLight ? props.color : colors.TEXT_COLOR_DARK)};
  font-style: normal;
  ${fontStyle.s}
`
