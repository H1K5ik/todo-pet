import { colors } from '@theme'
import { styled } from 'styled-components'

export const Link = styled.div<{ $isLight: boolean; $windowWidth: number }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: ${(props: { $windowWidth: number }) => (props.$windowWidth > 770 ? `${props.$windowWidth - 10}px;` : 'none')};
  height: 100vh;
  max-height: 130px;
  margin: auto;

  background-color: ${(props: { $isLight: boolean }) =>
    props.$isLight ? colors.HEADER_BACK_COLOR_LIGHT : colors.HEADER_BACK_COLOR_DARK};

  color: ${(props: { $isLight: boolean }) => (props.$isLight ? colors.WHITE : colors.HEADER_TEXT_COLOR_NAV_DARK)};

  overflow-x: hidden;
`
export const Wrapper = styled.div`
  display: flex;

  margin: 1em;

  box-sizing: border-box;
`
export const WrapperSettings = styled.div`
  margin: 1em;
  box-sizing: border-box;
`
