import { styled } from 'styled-components'

export const LogoText = styled.h1`
  color: white;
  font-weight: 500;
  font-size: 36px;
  text-align: left;

  font-family: Jost;
`

export const HeaderText = styled.a`
  color: white;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;

  font-family: Jost, sans-serif;
`

export const DefaultText = styled.div`
  color: black;
  font-style: normal;
  font-weight: 400;
  font-size: 28px;

  font-family: Jost, sans-serif;
`

export const InputText = styled.div<{ color: string }>`
  color: ${(props) => props.color};
  font-style: normal;
  font-weight: 400;
  font-size: 24px;

  font-family: Jost, sans-serif;
`
