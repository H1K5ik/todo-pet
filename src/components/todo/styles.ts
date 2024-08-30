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

export const BlockInput = styled.div<{ $isTablet: boolean }>`
  display: flex;

  width: ${(props: { $isTablet: boolean }) => (!props.$isTablet ? '780px' : '550px')};
  margin: 5em auto;
`
