import { colors } from '@theme'
import { styled } from 'styled-components'

export const Link = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100vh;
  max-width: 1140px;
  max-height: 130px;
  margin: auto;

  background-color: ${colors.HEADER_BACK_COLOR};
`
export const Wrapper = styled.div`
  display: flex;
  margin: 1em;
`
export const WrapperSettings = styled.div`
  margin: 1em;
`
