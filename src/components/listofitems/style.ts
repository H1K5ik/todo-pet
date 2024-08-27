import { colors, fontStyle } from '@theme'
import { styled } from 'styled-components'

export const WrapperButton = styled.div`
  max-width: 30%;
  margin: 2vh auto;
`
export const WrapperText = styled.div`
  max-width: 8%;
  margin: 2vh auto;
`
export const WrapperList = styled.div`
  overflow: auto;
  max-height: 39vh;
`

export const WrapperListText = styled.div<{ isLight: boolean }>`
  max-width: 25%;
  margin: 5vh auto;

  color: ${(props: { isLight: boolean }) => (props.isLight ? colors.BLACK : colors.HEADER_TEXT_COLOR_LOGO_DARK)};

  opacity: 0.3;
  ${fontStyle.xxl};
`

export const Block = styled.div`
  display: flex;
  flex-direction: column;
`
export const List = styled.div`
  overflow: hidden;
  margin-top: 2vh;
`

export const BlockInput = styled.div`
  display: flex;

  max-width: 800px;
  margin: 5em auto;
`
