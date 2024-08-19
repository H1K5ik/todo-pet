import { Global, root } from '@const'
import React from 'react'

import { Header } from './components/header'
import { InputMain } from './components/input'

root.render(
  <>
    <Global />
    <Header />
    <InputMain />
  </>,
)
