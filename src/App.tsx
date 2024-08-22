import { ThemeProvider } from '@component/themecontext'
import { Global } from '@const'
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { Header } from './components/header'
import { MainPage } from './pages/main'
import { SettingsPage } from './pages/settings'

export const App = () => {
  return (
    <ThemeProvider>
      <Global />
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Navigate to={'/home'} replace />} />
          <Route path='home' element={<MainPage />} />
          <Route path='settings' element={<SettingsPage />} />
          <Route path='*' element={<Navigate to={'/home'} replace />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}
