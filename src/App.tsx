import { ThemeProvider } from '@component/themecontext'
import { Global } from '@const'
import { useWindowWidth } from '@utils/useWindow'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Header } from './components/header'
import { config } from './config'

export const App = () => {
  const windowWidth = useWindowWidth()
  return (
    <ThemeProvider>
      <Global $windowWidth={windowWidth} />
      <Routes>
        <Route path='/' element={<Header />}>
          {config ? config.map(({ path, element }) => <Route path={path} element={element} key={path} />) : ''}
        </Route>
      </Routes>
    </ThemeProvider>
  )
}
