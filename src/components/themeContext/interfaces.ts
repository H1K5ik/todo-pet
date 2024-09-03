import { ReactNode } from 'react'

export interface IThemeContext {
  isLight: boolean
  toggleTheme: () => void
}

export interface IThemeProviderProps {
  children: ReactNode
}
