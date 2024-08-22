import { root } from '@const'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { App } from './App'

root.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>,
)
