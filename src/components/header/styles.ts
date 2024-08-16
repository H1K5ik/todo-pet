import { styled } from 'styled-components'

import { HEADER_BACK_COLOR } from '../../constants' // почему-то не видит алиасы с tsconfig @const

export const Link = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100vh;
  max-width: 1140px;
  max-height: 130px;
  margin: auto;

  background-color: ${HEADER_BACK_COLOR};

  color: white;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;

  font-family: Jost, sans-serif;
`
export const Logo = styled.a`
  margin-left: 1em;

  font-weight: 500;
  font-size: 36px;
  text-align: left;

  font-family: Jost;
`
// Можно ли маргин пихать в блок?

// На макете у логотипа такой же font-weight: 400, но они выглядят по-разному... https://www.figma.com/design/vDAg1ykKrPYKJEW4fMO5aU/Modsen-Todo-List?node-id=0-72&t=nn0aiFAM50HDsFAb-0
