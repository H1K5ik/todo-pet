import { colors } from '@theme'
import { styled } from 'styled-components'

export const Link = styled.div<{ isLight: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100vh;
  max-width: 1140px;
  max-height: 130px;
  margin: auto;

  background-color: ${(props: { isLight: boolean }) =>
    props.isLight ? colors.HEADER_BACK_COLOR_LIGHT : colors.HEADER_BACK_COLOR_DARK};

  color: ${(props: { isLight: boolean }) => (props.isLight ? 'white' : colors.HEADER_TEXT_COLOR_NAV_DARK)};
`
export const Wrapper = styled.div`
  display: flex;
  margin: 1em;
`
export const WrapperSettings = styled.div`
  margin: 1em;
`
