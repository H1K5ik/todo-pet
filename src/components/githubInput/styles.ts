import { styled } from 'styled-components'

export const Wrapper = styled.div<{ $isMobile: boolean }>`
  width: 100%;
  height: 100vh;
  max-width: 350px;
  max-height: 60px;
  margin: 100px ${(props: { $isMobile: boolean }) => (props.$isMobile ? 'auto' : '40px')};
`
export const WrapperGithub = styled.div`
  margin: 20px 0;
`
export const WrapperInput = styled.div`
  display: flex;
`
export const WrapperGithubLogin = styled.div`
  display: flex;
  flex-direction: column;

  margin: 50px;
`
export const ImageGithub = styled.div<{ $src: string; $isMobile: boolean }>`
  width: ${(props: { $isMobile: boolean }) => (props.$isMobile ? '215px' : '366px')};
  height: ${(props: { $isMobile: boolean }) => (props.$isMobile ? '204px' : '364px')};

  background-image: url(${(props) => props.$src});
  background-position: center;
  background-size: cover;
`
