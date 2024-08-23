import { colors } from '@theme'
import { styled } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 343px;
  max-height: 60px;
  margin: 7vh 25vw;
`
export const Input = styled.input<{ isLight: boolean }>`
  width: 282px;
  height: 60px;
  padding-bottom: 5px;
  border: none;
  border-bottom: 1px solid ${(props: { isLight: boolean }) => (props.isLight ? 'gray' : colors.HEADER_BACK_COLOR_DARK)};

  background: transparent;

  color: ${(props: { isLight: boolean }) => (props.isLight ? 'black' : colors.HEADER_TEXT_COLOR_DEFAULT_DARK)};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;

  font-family: Jost, sans-serif;
`
