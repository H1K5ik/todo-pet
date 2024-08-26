import { styled } from 'styled-components'

export const ButtonDesktop = styled.button<{ backgroundColor: string }>`
  width: 100vw;
  height: 100vh;
  max-width: 190px;
  max-height: 67px;
  border: 1px solid;
  border-radius: 10px;

  background-color: ${(props) => props.backgroundColor};
`
