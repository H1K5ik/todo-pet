import React from 'react'
import { useMedia } from 'react-media-hook'

import { ThemeProvider } from '@component/themeContext'
import { render } from '@testing-library/react'

import '@testing-library/jest-dom'

import { ChangeTheme } from './index'

jest.mock('react-media-hook', () => ({
  useMedia: jest.fn(),
}))

describe('Test changeTheme', () => {
  test('Should render the theme switcher correctly on desktop', () => {
    const { getByText } = render(
      <ThemeProvider>
        <ChangeTheme />
      </ThemeProvider>,
    )

    const switchThemeText = getByText('Switch Theme')
    expect(switchThemeText).toBeInTheDocument()

    const lightThemeOption = getByText('Light theme')
    expect(lightThemeOption).toBeInTheDocument()

    const darkThemeOption = getByText('Dark theme')
    expect(darkThemeOption).toBeInTheDocument()
  })

  test('Should render the theme switcher with the correct options', () => {
    const { getByText } = render(
      <ThemeProvider>
        <ChangeTheme />
      </ThemeProvider>,
    )

    const switchThemeText = getByText('Switch Theme')
    expect(switchThemeText).toBeInTheDocument()

    const lightThemeOption = getByText('Light theme')
    expect(lightThemeOption).toBeInTheDocument()

    const darkThemeOption = getByText('Dark theme')
    expect(darkThemeOption).toBeInTheDocument()
  })

  test('should render the theme switcher correctly on mobile', () => {
    ;(useMedia as jest.Mock).mockReturnValueOnce({ matches: true })

    const { getByText } = render(
      <ThemeProvider>
        <ChangeTheme />
      </ThemeProvider>,
    )

    expect(getByText('Switch Theme')).toBeInTheDocument()
    expect(getByText('Light theme')).toBeInTheDocument()
    expect(getByText('Dark theme')).toBeInTheDocument()
  })
})
