import { styled } from 'styled-components'

export const WrapperIcons = styled.div`
  margin: 5px;
`
export const Icon = styled.img<{ $isMobile: boolean }>`
  width: ${(props: { $isMobile: boolean }) => (props.$isMobile ? '45px' : '50px')};
  margin: 5px;

  &:hover {
    cursor: pointer;
  }
`
