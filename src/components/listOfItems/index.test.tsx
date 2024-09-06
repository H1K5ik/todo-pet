import React from 'react'

import { ThemeProvider } from '@component/themeContext'
import { fireEvent, render } from '@testing-library/react'

import '@testing-library/jest-dom'

import { ListOfItems } from './index'

const mockComponents = [
  { id: 1, text: 'Task 1', selected: false },
  { id: 2, text: 'Task 2', selected: false },
]

const mockSetComponents = jest.fn()
const mockSetInputValue = jest.fn()
const mockSetTodoId = jest.fn()
const mockOnEdit = jest.fn()

describe('Test changeTheme', () => {
  test('Should render the list of items when components prop is provided', () => {
    const { getByText } = render(
      <ThemeProvider>
        <ListOfItems
          components={mockComponents}
          onEdit={mockOnEdit}
          setComponents={mockSetComponents}
          setInputValue={mockSetInputValue}
          setTodoId={mockSetTodoId}
        />
      </ThemeProvider>,
    )

    expect(getByText('Task 1')).toBeInTheDocument()
    expect(getByText('Task 2')).toBeInTheDocument()
  })

  test('Should call the setComponents prop when an item is deleted', () => {
    const { queryAllByAltText } = render(
      <ThemeProvider>
        <ListOfItems
          components={mockComponents}
          onEdit={mockOnEdit}
          setComponents={mockSetComponents}
          setInputValue={mockSetInputValue}
          setTodoId={mockSetTodoId}
        />
      </ThemeProvider>,
    )

    const deleteButtons = queryAllByAltText('delete-svg')
    fireEvent.click(deleteButtons[0])

    expect(mockSetComponents).toHaveBeenCalledTimes(1)
    expect(mockSetComponents).toHaveBeenCalledWith(
      expect.arrayContaining([expect.objectContaining({ id: 2, text: 'Task 2', selected: false })]),
    )
  })

  test('Should call the setComponents prop when multiple items are deleted', () => {
    const { queryAllByAltText } = render(
      <ThemeProvider>
        <ListOfItems
          components={mockComponents}
          onEdit={mockOnEdit}
          setComponents={mockSetComponents}
          setInputValue={mockSetInputValue}
          setTodoId={mockSetTodoId}
        />
      </ThemeProvider>,
    )

    const deleteButtons = queryAllByAltText('delete-svg')
    fireEvent.click(deleteButtons[0])
    fireEvent.click(deleteButtons[1])

    expect(mockSetComponents).toHaveBeenCalledTimes(3)
    expect(mockSetComponents).toHaveBeenCalledWith(
      expect.arrayContaining([expect.objectContaining({ id: 2, text: 'Task 2', selected: false })]),
    )
    expect(mockSetComponents).toHaveBeenCalledWith(
      expect.arrayContaining([expect.objectContaining({ id: 1, text: 'Task 1', selected: false })]),
    )
  })
})
