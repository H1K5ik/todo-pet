import { renderHook } from '@testing-library/react'

import { getItems } from './getItemsFormLocalStorage'
import { keygen } from './keygen'
import { useWindowWidth } from './useWindow'

describe('Test utils', () => {
  test('Should return an empty set when there are no selected items in local storage', () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => null)

    const result = getItems()

    expect(result).toEqual(new Set<number>())
  })

  test('Should return the same value when called multiple times with the same key', () => {
    const initialKey = 10
    const firstCall = keygen(initialKey)
    const secondCall = keygen(initialKey)

    expect(firstCall).toBe(initialKey + 1)
    expect(secondCall).toBe(initialKey + 1)
  })

  test('Should correctly initialize window width on initial render', () => {
    const mockInnerWidth = 1024
    Object.defineProperty(window, 'innerWidth', { value: mockInnerWidth })

    const { result } = renderHook(() => useWindowWidth())

    expect(result.current).toBe(mockInnerWidth)
  })
})
