import { colors, fontStyle } from '@theme'
import { styled } from 'styled-components'

export const WrapperSelect = styled.select<{ $isLight: boolean }>`
  width: 100%;
  height: 100vh;
  max-width: 343px;
  max-height: 60px;
  border: 1px solid ${(props: { $isLight: boolean }) => (props.$isLight ? colors.BLACK : colors.BORDER_COLOR)};

  background-color: transparent;

  color: ${(props: { $isLight: boolean }) => (props.$isLight ? colors.BLACK : colors.TEXT_COLOR_DARK)};
  font-style: normal;
  ${fontStyle.s}

  transition: box-shadow 0.2s ease-in;

  &:hover {
    box-shadow: 0 1px 15px ${(props: { $isLight: boolean }) => (props.$isLight ? colors.GRAY : colors.BORDER_COLOR)};
    cursor: pointer;
  }
`
export const Wrapper = styled.div<{ $isMobile: boolean }>`
  width: 100%;
  height: 100vh;
  max-width: 343px;
  max-height: 60px;
  margin: 40px ${(props: { $isMobile: boolean }) => (props.$isMobile ? 'auto' : '40px')};
`

export const Option = styled.option<{ $isLight: boolean }>`
  background-color: ${(props: { $isLight: boolean }) => (!props.$isLight ? colors.GRAY : colors.WHITE)};
  color: ${(props: { $isLight: boolean }) => (!props.$isLight ? colors.WHITE : colors.GRAY)};
`
