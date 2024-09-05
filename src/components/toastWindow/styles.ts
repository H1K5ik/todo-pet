import { colors } from '@theme'
import { css, styled } from 'styled-components'

const modalAnimation = css<{ $isOpen: boolean }>`
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  transform: ${(props) => (props.$isOpen ? 'translateY(0)' : 'translateY(-10px)')};
  transition:
    opacity 300ms ease-in-out,
    transform 300ms ease-in-out;
`

export const ToastWrapper = styled.div<{ $isOpen: boolean; $isLight: boolean; $isMobile: boolean }>`
  position: absolute;
  top: ${(props: { $isMobile: boolean }) => (!props.$isMobile ? '120px' : '60px')};
  z-index: 1000;

  width: 300px;
  margin: 10px auto;
  padding: 10px;
  box-shadow: 0 2px 10px
    ${(props: { $isLight: boolean }) =>
      props.$isLight ? colors.HEADER_BACK_COLOR_LIGHT : colors.HEADER_BACK_COLOR_DARK};

  background-color: ${(props: { $isLight: boolean }) =>
    props.$isLight ? colors.HEADER_BACK_COLOR_LIGHT : colors.HEADER_BACK_COLOR_DARK};

  color: ${colors.WHITE};
  ${modalAnimation};
`
