import React from 'react'
import { Navigate } from 'react-router-dom'

import { MainPage } from './pages/main'
import { SettingsPage } from './pages/settings'

export const config = [
  { path: '/', element: <Navigate to={'/home'} replace /> },
  { path: 'home', element: <MainPage /> },
  { path: 'settings', element: <SettingsPage /> },
  { path: '*', element: <Navigate to={'/home'} replace /> },
]
