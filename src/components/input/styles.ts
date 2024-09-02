import { colors, fontStyle } from '@theme'
import { styled } from 'styled-components'

export const InputBox = styled.input<{
  $isLight: boolean
  width: string
  color: string
  $isTablet: boolean
  $isMobile: boolean
}>`
  width: ${(props: { $isTablet: boolean; $isMobile: boolean }) => {
    if (props.$isMobile) return '280px'
    if (props.$isTablet) return '350px'
    return '557px'
  }};
  border: none;
  border-bottom: 2px solid
    ${(props: { $isLight: boolean; color: string }) => (props.$isLight ? colors.BORDER_COLOR : colors.BORDER_COLOR)};

  background: transparent;

  color: ${(props: { $isLight: boolean }) => (props.$isLight ? colors.BLACK : colors.TEXT_COLOR_DARK)};
  font-style: normal;
  ${fontStyle.l}

  &::placeholder {
    color: ${(props: { $isLight: boolean }) => (props.$isLight ? colors.GRAY : colors.TEXT_COLOR_DARK)};
    opacity: 0.6;
  }
`
