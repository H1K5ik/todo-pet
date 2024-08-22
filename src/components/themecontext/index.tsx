import React, { FC, ReactNode, createContext, useContext, useState } from 'react'

interface IThemeContext {
  isLight: boolean
  toggleTheme: () => void
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('context error')
  }

  return context
}

interface IThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: FC<IThemeProviderProps> = ({ children }) => {
  const [isLight, setisLight] = useState(true)

  const toggleTheme = () => {
    setisLight((isLight) => !isLight)
  }

  return <ThemeContext.Provider value={{ isLight, toggleTheme }}>{children}</ThemeContext.Provider>
}
