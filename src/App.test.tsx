import { render } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'

import { App } from './App'

describe('Test App', () => {
  test('Should render the Header component when the root route is accessed', () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    )

    expect(getByTestId('header')).toBeInTheDocument()
  })

  test('Should render the Header component when a nested route is accessed', () => {
    const { queryByTestId } = render(
      <MemoryRouter initialEntries={['/nested-route/']}>
        <App />
      </MemoryRouter>,
    )

    expect(queryByTestId('header')).toBeInTheDocument()
  })
  test('Should render the correct component when a route is accessed multiple times', () => {
    const { getByTestId, rerender } = render(
      <MemoryRouter initialEntries={['/nested-route/']}>
        <App />
      </MemoryRouter>,
    )

    expect(getByTestId('header')).toBeInTheDocument()

    rerender(
      <MemoryRouter initialEntries={['/nested-route/']}>
        <App />
      </MemoryRouter>,
    )

    expect(getByTestId('header')).toBeInTheDocument()
  })
})
