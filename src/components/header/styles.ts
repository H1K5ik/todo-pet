import { colors } from '@theme'
import { styled } from 'styled-components'

export const WrapperHeader = styled.div<{ $isLight: boolean }>`
  width: 100vw;
  background-color: ${(props: { $isLight: boolean }) =>
    props.$isLight ? colors.HEADER_BACK_COLOR_LIGHT : colors.HEADER_BACK_COLOR_DARK};
`
export const Link = styled.div<{ $isLight: boolean; $windowWidth: number; $isBurgerOpen: boolean; $isMobile: boolean }>`
  display: flex;
  align-items: ${(props) => (props.$isBurgerOpen ? `start;` : 'center')};
  justify-content: space-between;

  height: ${(props: { $isMobile: boolean; $isBurgerOpen: boolean }) =>
    props.$isMobile ? (props.$isBurgerOpen ? `200px;` : `70px;`) : `130px;`};
  max-width: ${(props) => (props.$windowWidth > 1140 ? `1140px;` : `${props.$windowWidth}px`)};
  margin: 0 auto;

  background-color: ${(props: { $isLight: boolean }) =>
    props.$isLight ? colors.HEADER_BACK_COLOR_LIGHT : colors.HEADER_BACK_COLOR_DARK};

  color: ${(props: { $isLight: boolean }) => (props.$isLight ? colors.WHITE : colors.HEADER_TEXT_COLOR_NAV_DARK)};

  overflow-x: hidden;
  transition: height 0.2s ease-in-out;
`

export const Wrapper = styled.div<{ $isBurgerOpen?: boolean; $isMobile: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.$isBurgerOpen ? 'column' : 'row')};
  position: ${(props) => (props.$isMobile ? 'absolute' : 'static')};
  top: 20px;
  left: 20px;

  margin: 0;
  padding: 0 20px;

  box-sizing: border-box;
`
export const WrapperLink = styled.div<{ $isBurgerOpen?: boolean; $isMobile: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.$isBurgerOpen ? 'column' : 'row')};

  margin: 0 20px;

  box-sizing: border-box;
`

export const WrapperSettings = styled.div<{ $isMobile: boolean }>`
  margin: 0 10px;
  box-sizing: border-box;
`

export const WrapperBurger = styled.div<{ $isBurgerOpen: boolean }>`
  visibility: ${(props) => (props.$isBurgerOpen ? 'visible' : 'hidden')};
  position: absolute;
  top: 70px;
  left: 78vw;

  box-sizing: border-box;
  transform: ${(props) => (props.$isBurgerOpen ? 'translateY(0)' : 'translateY(-60px)')};
  transition: transform 0.2s ease-in-out;

  &:last-child {
    top: 120px;
  }
`

export const IconBurger = styled.div`
  position: absolute;
  top: 20px;
  left: 90vw;

  font-size: 32px;

  box-sizing: border-box;
`
