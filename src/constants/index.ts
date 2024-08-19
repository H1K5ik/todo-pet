import ReactDOM from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'

export const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

export const Global = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }
`
