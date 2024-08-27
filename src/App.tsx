import { ThemeProvider } from '@component/themecontext'
import { Global } from '@const'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Header } from './components/header'
import { config } from './config'

export const App = () => {
  return (
    <ThemeProvider>
      <Global />
      <Routes>
        <Route path='/' element={<Header />}>
          {config ? config.map(({ path, element }) => <Route path={path} element={element} key={path} />) : ''}
        </Route>
      </Routes>
    </ThemeProvider>
  )
}
