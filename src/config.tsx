import React from 'react'
import { Navigate } from 'react-router-dom'

import { ErrorPage } from './pages/error'
import { MainPage } from './pages/main'
import { SettingsPage } from './pages/settings'

export const config = [
  { path: '/', element: <Navigate replace to={'/home'} /> },
  { path: 'home', element: <MainPage /> },
  { path: 'settings', element: <SettingsPage /> },
  { path: '*', element: <Navigate to={'/home'} /> },
  { path: '/error', element: <ErrorPage /> },
]
