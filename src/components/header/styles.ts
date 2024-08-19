import { colors, spaces } from '@theme'
import { styled } from 'styled-components'

export const Link = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${spaces.ALLSITEWIDTH}

  background-color: ${colors.HEADER_BACK_COLOR};
`
export const Wrapper = styled.div`
  display: flex;
  ${spaces.DEFAULTMARGIN}
`
export const WrapperSettings = styled.div`
  ${spaces.DEFAULTMARGIN}
`
