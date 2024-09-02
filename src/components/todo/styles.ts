import { styled } from 'styled-components'

export const WrapperButton = styled.div`
  margin: 0 auto;
`

export const Block = styled.div`
  display: flex;
  flex-direction: column;

  margin: 20px auto;
`
export const List = styled.div`
  margin-top: 2vh;
`

export const BlockInput = styled.div<{ $isTablet: boolean; $isMobile: boolean }>`
  display: flex;
  flex-direction: ${(props: { $isMobile: boolean }) => (!props.$isMobile ? 'raw' : 'column')};

  width: ${(props: { $isTablet: boolean; $isMobile: boolean }) => {
    if (props.$isMobile) {
      return '320px'
    }
    if (props.$isTablet) {
      return '550px'
    }
    return '780px'
  }};
  margin: 5em auto;
`
