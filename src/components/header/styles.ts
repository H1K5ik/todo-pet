import { colors } from '@theme'
import { styled } from 'styled-components'

export const Link = styled.div<{ $isLight: boolean; $windowWidth: number; $isopen: boolean }>`
  display: flex;
  align-items: ${(props) => (props.$isopen ? `start;` : 'center')};
  justify-content: space-between;

  width: ${(props) => (props.$windowWidth > 1140 ? `1140px;` : 'none')};
  height: 100vh;
  max-height: ${(props) => (!props.$isopen ? `130px;` : '220px')};
  margin: auto;

  background-color: ${(props: { $isLight: boolean }) =>
    props.$isLight ? colors.HEADER_BACK_COLOR_LIGHT : colors.HEADER_BACK_COLOR_DARK};

  color: ${(props: { $isLight: boolean }) => (props.$isLight ? colors.WHITE : colors.HEADER_TEXT_COLOR_NAV_DARK)};

  overflow-x: hidden;
  transition: max-height 0.2s ease-in;
`
export const Wrapper = styled.div<{ $isopen?: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.$isopen ? 'column' : 'row')};

  margin: 20px 0;

  box-sizing: border-box;
`
export const WrapperSettings = styled.div`
  margin: 1em;
  box-sizing: border-box;
`
export const WrapperBurger = styled.div<{ $isopen: boolean }>`
  display: ${(props: { $isopen: boolean }) => (props.$isopen ? 'static' : 'none')};

  margin: 1em;

  box-sizing: border-box;
`
export const IconBurger = styled.div`
  font-size: 34px;
  box-sizing: border-box;
`
