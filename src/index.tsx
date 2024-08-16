import React from 'react'
import ReactDOM from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'

import { Header } from './components/header'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const Global = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }
`

root.render(
  <>
    <Global />
    <Header />
  </>,
)
