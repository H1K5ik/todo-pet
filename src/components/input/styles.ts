import { colors } from '@theme'
import { styled } from 'styled-components'

export const InputBox = styled.input<{ isLight: boolean }>`
  width: 557px;
  border: none;
  border-bottom: 2px solid
    ${(props: { isLight: boolean }) => (props.isLight ? colors.HEADER_BACK_COLOR_LIGHT : colors.HEADER_BACK_COLOR_DARK)};

  background: transparent;

  color: ${(props: { isLight: boolean }) => (props.isLight ? 'black' : colors.HEADER_TEXT_COLOR_DEFAULT_DARK)};
  font-style: normal;
  font-weight: 400;
  font-size: 24px;

  font-family: Jost, sans-serif;
`
