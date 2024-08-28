import { colors } from '@theme'
import { styled } from 'styled-components'

export const WrapperIcons = styled.div<{ isLight: boolean }>`
  margin: 5px;
  transition: box-shadow 0.2s ease-in;

  &:hover {
    box-shadow: 0 10px 20px -10px ${(props: { isLight: boolean }) => (props.isLight ? colors.GRAY : colors.BORDER_COLOR)};
    cursor: pointer;
  }
`
