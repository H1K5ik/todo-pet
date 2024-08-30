import { colors } from '@theme'
import { keyframes, styled } from 'styled-components'

export const ItemForm = styled.div`
  width: 100vw;
  max-width: 650px;
  margin: 1vh auto;
`

export const Label = styled.label<{ $isLight: boolean }>`
  display: flex;

  width: 557px;
  height: 66px;
  margin: 0;
  border-top: 1px solid ${colors.BORDER_COLOR};
  border-bottom: 1px solid ${colors.BORDER_COLOR};

  transition: box-shadow 0.2s ease-in;

  user-select: none;

  &:hover {
    box-shadow: 0 1px 15px ${(props: { $isLight: boolean }) => (props.$isLight ? colors.GRAY : colors.BORDER_COLOR)};
    cursor: pointer;
  }
`

export const CheckItem = styled.input`
  z-index: -1;

  width: 0;
  height: 0;
  margin: 0;

  opacity: 0;
`

export const Wrapper = styled.div`
  display: flex;
`
export const WrapperText = styled.div`
  margin: 1em;
`
const rotate = keyframes`
 from {
    opacity: 0;
    transform: rotate(0deg);
  }

  to {
    opacity: 1;
    transform: rotate(45deg);
  }
`

export const Indicator = styled.div<{ $isLight: boolean }>`
  width: 35px;
  height: 35px;
  margin: 0;
  margin-top: 1em;
  border: 1px solid ${(props: { $isLight: boolean }) => (props.$isLight ? colors.BLACK : colors.BORDER_COLOR)};
  border-radius: 5px;

  background: ${(props: { $isLight: boolean }) => (props.$isLight ? colors.WHITE : colors.THEME_DARK)};

  &::after {
    display: none;
    content: '';
  }

  ${CheckItem}:checked + &::after {
    display: block;

    width: 8px;
    height: 25px;
    margin-left: 10px;
    border: solid ${(props: { $isLight: boolean }) => (props.$isLight ? colors.BLACK : colors.WHITE)};
    border-width: 0 3px 3px 0;

    animation-duration: 0.3s;
    animation-fill-mode: forwards;
    animation-name: ${rotate};
  }
`
