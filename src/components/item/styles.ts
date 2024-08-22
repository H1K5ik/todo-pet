import { colors } from '@theme'
import { styled } from 'styled-components'

export const ItemForm = styled.div`
  width: 100vw;
  max-width: 650px;
  margin: 1vh auto;
`

export const CheckItem = styled.input<{ isLight: boolean }>`
  width: 38px;
  height: 35px;
  border-radius: 5px;

  color: red;
`

export const WrapperCheck = styled.div`
  display: flex;
  align-items: center;

  width: 80%;
  height: 70px;
  border-top: 1px solid ${colors.BORDER_COLOR};
  border-bottom: 1px solid ${colors.BORDER_COLOR};
`

export const Wrapper = styled.div`
  display: flex;
`
export const WrapperText = styled.div`
  margin: 1em;
`
