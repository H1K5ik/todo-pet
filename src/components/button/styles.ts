import { colors } from '@theme'
import { styled } from 'styled-components'

export const ButtonDesktop = styled.button<{ $backgroundColor: string; $isLight: boolean; $isMobile: boolean }>`
  width: 100vw;
  height: 100vh;
  max-width: ${(props: { $isMobile: boolean }) => (!props.$isMobile ? '200px' : '320px')};
  max-height: 67px;
  border: 1px solid;
  border-radius: 10px;

  background-color: ${(props) => props.$backgroundColor};

  transition: box-shadow 0.2s ease-in;
  transition: border-radius 0.2s ease-in;

  &:hover {
    border-radius: 0;
    box-shadow: 0 1px 15px ${(props: { $isLight: boolean }) => (props.$isLight ? colors.GRAY : colors.BORDER_COLOR)};

    cursor: pointer;
  }
`
