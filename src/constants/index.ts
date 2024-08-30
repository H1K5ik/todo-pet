import ReactDOM from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'

export const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

export const Global = createGlobalStyle<{ $windowWidth: number }>`
  * {
    max-width: ${(props) => (props.$windowWidth > 1140 ? `1140px;` : 'none')};
    margin: 0 auto;
    padding: 0;

    box-sizing: border-box;
  }
`

export const DEFAULT_MESSAGE = 'hello'

export const ITEMS = 'items'
export const IS_LIGHT = 'isLIght '
export const MAX_TEXT_LENGTH = 30
