import { Button } from '@component/button'
import { Item } from '@component/item'
import { useTheme } from '@component/themeContext'
import { Typography } from '@component/typography'
import { DEFAULT_MESSAGE, ITEMS } from '@const'
import { colors } from '@theme'
import { getSelectedItems } from '@utils/getSelectedItemsFromLocalStorage'
import React, { FC, useEffect, useState } from 'react'
import { useMedia } from 'react-media-hook'

import { IListOfItems } from './interfaces'
import { List, WrapperButton, WrapperList, WrapperListText, WrapperText } from './styles'

export const ListOfItems: FC<IListOfItems> = ({ components, onEdit, setComponents, setInputValue, setTodoId }) => {
  const [selectedItems, setSelectedItems] = useState<Set<number>>(getSelectedItems())
  const [isEmpty, setIsEmpty] = useState<boolean>(false)

  useEffect(() => {
    if (components!.length > 0 && selectedItems.size !== 0) {
      setIsEmpty(false)
    } else {
      setIsEmpty(true)
    }
    return
  }, [components, selectedItems])

  const { isLight } = useTheme()
  const isMobile = useMedia('(max-width: 600px)')?.matches
  const isTablet = useMedia('(max-width: 830px)')?.matches

  const toggleComponentSelection = (index: number) => {
    if (setComponents && components) {
      const updatedComponents = components.map((obj) => (obj.id === index ? { ...obj, selected: !obj.selected } : obj))
      setComponents(updatedComponents)
      localStorage.setItem(ITEMS, JSON.stringify(updatedComponents))
    }
  }

  const handleSelect = (index: number) => {
    setSelectedItems((prev) => {
      const newSelection = new Set(prev)
      if (newSelection.has(index)) {
        newSelection.delete(index)
      } else {
        newSelection.add(index)
      }

      toggleComponentSelection(index)

      return newSelection
    })
  }

  const handleDelete = (index: number) => {
    if (!setComponents) return

    const newComponents = components?.filter((obj) => obj.id !== index) || []
    setComponents(newComponents)
    localStorage.setItem(ITEMS, JSON.stringify(newComponents))

    if (selectedItems.has(index)) {
      selectedItems.delete(index)
      setSelectedItems(new Set(selectedItems))
    }
  }

  const handleEdit = (index: number) => {
    if (setTodoId && onEdit && components && setInputValue) {
      const foundItem = components.find((obj) => obj.id === index)
      setTodoId(index)
      setInputValue(foundItem!.text)
      onEdit()
    }
  }

  const handleDeleteSelected = () => {
    if (components && setComponents) {
      const newComponents = components.filter((obj) => !selectedItems.has(obj.id))
      setComponents(newComponents)
      setSelectedItems(new Set())
      localStorage.setItem(ITEMS, JSON.stringify(newComponents))
    }
  }

  return (
    <List>
      <WrapperText>
        {isMobile ? (
          <Typography.Logo color={colors.BLACK} text={'Task list'} />
        ) : (
          <Typography.Default color={colors.BLACK} text={'Task list'} />
        )}
      </WrapperText>
      <WrapperList $isLight={isLight}>
        {components && components.length > 0 ? (
          components.map(({ id, text }) => (
            <Item
              data-test-id={'input'}
              isSelected={selectedItems.has(id)}
              key={id}
              onDelete={() => handleDelete(id)}
              onEdit={() => handleEdit(id)}
              onSelect={() => handleSelect(id)}
              text={text ? text : DEFAULT_MESSAGE}
            />
          ))
        ) : (
          <WrapperListText $isLight={isLight} $isTablet={isTablet ?? false} data-test-id={'create'}>
            Create your first ToDo
          </WrapperListText>
        )}
      </WrapperList>
      <WrapperButton $isMobile={isMobile ?? false} $isTablet={isTablet ?? false}>
        <Button
          $isMobile={isMobile ?? false}
          color={isLight ? colors.DELETE_BUTTON_COLOR : colors.HEADER_BACK_COLOR_DARK}
          disabled={isEmpty}
          onClick={handleDeleteSelected}
          text={'Delete selected'}
        />
      </WrapperButton>
    </List>
  )
}
