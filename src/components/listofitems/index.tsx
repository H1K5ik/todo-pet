import { Button } from '@component/button'
import { Item } from '@component/item'
import { useTheme } from '@component/themecontext'
import { IComponents } from '@component/todo'
import { Typography } from '@component/typography'
import { DEFAULT_MESSAGE, ITEMS } from '@const'
import { colors } from '@theme'
import React, { FC, useState } from 'react'

import { List, WrapperButton, WrapperList, WrapperListText, WrapperText } from './style'

export interface IListOfItems {
  components?: IComponents[]
  setComponents?: React.Dispatch<React.SetStateAction<IComponents[]>>
  setInputValue?: React.Dispatch<React.SetStateAction<string>>
  onEdit?: () => void
  setTodoId?: React.Dispatch<React.SetStateAction<number | undefined>>
}

export const ListOfItems: FC<IListOfItems> = ({ components, setComponents, setInputValue, onEdit, setTodoId }) => {
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set())

  const handleSelect = (index: number) => {
    setSelectedItems((prev) => {
      const newSelection = new Set(prev)
      if (newSelection.has(index)) {
        newSelection.delete(index)
      } else {
        newSelection.add(index)
      }
      return newSelection
    })
  }

  const handleDelete = (index: number) => {
    if (setComponents) {
      const newComponents = components?.filter((obj) => obj.id !== index) || []
      setComponents(newComponents)
      localStorage.setItem(ITEMS, JSON.stringify(newComponents))
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
  const { isLight } = useTheme()
  return (
    <>
      <List>
        <WrapperText>
          <Typography.Logo text={'Task list'} color={colors.BLACK} />
        </WrapperText>
        <WrapperList>
          {components && components.length > 0 ? (
            components.map(({ id, text }) => (
              <Item
                text={text ? text : DEFAULT_MESSAGE}
                key={id}
                isSelected={selectedItems.has(id)}
                onDelete={() => handleDelete(id)}
                onSelect={() => handleSelect(id)}
                onEdit={() => handleEdit(id)}
              />
            ))
          ) : (
            <WrapperListText isLight={isLight}>Create your first ToDo</WrapperListText>
          )}
        </WrapperList>
        <WrapperButton>
          <Button
            text={'Deleted selected'}
            color={isLight ? colors.DELETE_BUTTON_COLOR : colors.HEADER_BACK_COLOR_DARK}
            onClick={handleDeleteSelected}
            disabled={selectedItems.size === 0}
            onKeyDown={handleDeleteSelected}
          />
        </WrapperButton>
      </List>
    </>
  )
}
