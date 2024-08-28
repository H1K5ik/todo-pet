import { colors, fontStyle } from '@theme'
import { styled } from 'styled-components'

export const InputBox = styled.input<{ isLight: boolean; width: string; color: string }>`
  width: ${(props: { width: string }) => props.width};
  border: none;
  border-bottom: 2px solid
    ${(props: { isLight: boolean; color: string }) =>
      props.color ? props.color : props.isLight ? colors.HEADER_BACK_COLOR_LIGHT : colors.HEADER_BACK_COLOR_DARK};

  background: transparent;

  color: ${(props: { isLight: boolean }) => (props.isLight ? colors.BLACK : colors.HEADER_TEXT_COLOR_DEFAULT_DARK)};
  font-style: normal;
  ${fontStyle.l}

  &::placeholder {
    color: ${(props: { isLight: boolean }) => (props.isLight ? colors.GRAY : colors.HEADER_TEXT_COLOR_DEFAULT_DARK)};
    opacity: 0.6;
  }
`
