import { styled } from 'styled-components'

export const ButtonBig = styled.button<{ backgroundColor: string }>`
  width: 100vw;
  height: 100vh;
  max-width: 190px;
  max-height: 67px;
  border: 1px solid;
  border-radius: 10px;

  background-color: ${(props) => props.backgroundColor};
`
export const ButtonAdapt = styled.button<{ backgroundColor: string }>`
  width: 100%;
  height: 100vh;
  max-width: 190px;
  max-height: 67px;
  margin: 1vh 0 0 5vw;
  border: 1px solid;
  border-radius: 10px;

  background-color: ${(props) => props.backgroundColor};
`
