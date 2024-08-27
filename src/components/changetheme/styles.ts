import { colors, fontStyle } from '@theme'
import { styled } from 'styled-components'

export const WrapperSelect = styled.select`
  width: 100%;
  height: 100vh;
  max-width: 343px;
  max-height: 60px;
  border: 1px solid ${colors.BLACK};

  background-color: transparent;

  font-style: normal;
  ${fontStyle.s}
`
export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 343px;
  max-height: 60px;
  margin: 5vh 25vw;
`
