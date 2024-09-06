import { ErrorBoundary } from '@component/errorBoundary'
import { ThemeProvider } from '@component/themeContext'
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
      <ErrorBoundary>
        <Routes>
          <Route element={<Header />} path='/'>
            {config && config.map(({ element, path }) => <Route element={element} key={path} path={path} />)}
          </Route>
        </Routes>
      </ErrorBoundary>
    </ThemeProvider>
  )
}
