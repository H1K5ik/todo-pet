import { ThemeProvider } from '@component/themeContext'
import { fireEvent, render, waitFor } from '@testing-library/react'
import React from 'react'

import '@testing-library/jest-dom'

import { GithubInfo } from './index'

describe('Test githubInput', () => {
  test('Should display nothing when the GitHub username is not found', async () => {
    const { getByAltText, getByPlaceholderText, queryByText } = render(
      <ThemeProvider>
        <GithubInfo />
      </ThemeProvider>,
    )

    const input = getByPlaceholderText('hello')
    fireEvent.change(input, { target: { value: 'nonexistent_user' } })

    const searchButton = getByAltText('search-svg')
    fireEvent.click(searchButton)

    await waitFor(() => expect(queryByText('Login: nonexistent_user')).toBeNull())
  })

  test('Should handle empty input gracefully', async () => {
    const { getByAltText, getByPlaceholderText, queryByText } = render(
      <ThemeProvider>
        <GithubInfo />
      </ThemeProvider>,
    )

    const input = getByPlaceholderText('hello')
    fireEvent.change(input, { target: { value: '' } })

    const searchButton = getByAltText('search-svg')
    fireEvent.click(searchButton)

    await waitFor(() => expect(queryByText('GitHub API error')).toBeNull())
  })

  test('Should handle case sensitivity in GitHub usernames', async () => {
    const { getByAltText, getByPlaceholderText, queryByText } = render(
      <ThemeProvider>
        <GithubInfo />
      </ThemeProvider>,
    )

    const input = getByPlaceholderText('hello')
    fireEvent.change(input, { target: { value: 'H1K5IK' } })

    const searchButton = getByAltText('search-svg')
    fireEvent.click(searchButton)

    await waitFor(() => expect(queryByText('Login: H1K5IK')).toBeNull())
  })
})
