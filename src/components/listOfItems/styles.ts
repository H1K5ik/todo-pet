import { colors, fontStyle } from '@theme'
import { styled } from 'styled-components'

export const WrapperButton = styled.div<{ $isMobile: boolean; $isTablet: boolean }>`
  width: ${(props: { $isMobile: boolean }) => {
    if (props.$isMobile) {
      return '320px'
    }
    return '200px'
  }};
  margin: 2vh
    ${(props: { $isTablet: boolean; $isMobile: boolean }) => {
      if (props.$isTablet || props.$isMobile) {
        return 'auto'
      }
      return '150px'
    }};
`
export const WrapperText = styled.div`
  width: 115px;
  margin: 2vh auto;
`
export const WrapperList = styled.div<{ $isLight: boolean }>`
  overflow: auto;

  max-height: 310px;

  scrollbar-color: ${(props: { $isLight: boolean }) =>
    props.$isLight
      ? `${colors.WHITE} ${colors.SCROLL_LIGHT}`
      : `${colors.HEADER_TEXT_COLOR_DEFAULT_DARK} ${colors.SCROLL_DARK}`};
`

export const WrapperListText = styled.div<{ $isLight: boolean; $isTablet: boolean }>`
  max-width: 40%;
  margin: 5vh auto;

  color: ${(props: { $isLight: boolean }) => (props.$isLight ? colors.BLACK : colors.HEADER_TEXT_COLOR_LOGO_DARK)};

  opacity: 0.3;
  ${(props: { $isTablet: boolean }) => (props.$isTablet ? fontStyle.m : fontStyle.xxl)};
`

export const Block = styled.div`
  display: flex;
  flex-direction: column;
`
export const List = styled.div`
  overflow: hidden;
  max-width: 1140px;
`

export const BlockInput = styled.div`
  display: flex;

  max-width: 800px;
  margin: 5em auto;
`
