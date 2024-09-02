import { IS_LIGHT } from '@const'
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
  const [isLight, setisLight] = useState(() => {
    const isLight = localStorage.getItem(IS_LIGHT)
    return isLight ? !!JSON.parse(isLight) : true
  })
  const toggleTheme = () => {
    setisLight((prevIsLight) => {
      const newIsLight = !prevIsLight
      localStorage.setItem(IS_LIGHT, JSON.stringify(newIsLight))
      return newIsLight
    })
  }

  return <ThemeContext.Provider value={{ isLight, toggleTheme }}>{children}</ThemeContext.Provider>
}
