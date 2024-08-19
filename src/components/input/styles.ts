import { colors } from '@theme'
import { styled } from 'styled-components'

export const WrapperButton = styled.div`
  margin: 1vh 0 0 3vw;
`

export const Block = styled.div`
  display: flex;
  flex-direction: column;
`
export const List = styled.div`
  margin-top: 2vh;
`

export const InputBox = styled.input`
  width: 557px;
  border: none;
  border-bottom: 2px solid ${colors.HEADER_BACK_COLOR};

  font-style: normal;
  font-weight: 400;
  font-size: 24px;

  font-family: Jost, sans-serif;
`
export const BlockInput = styled.div`
  display: flex;

  max-width: 800px;
  margin: 5em auto;
`
