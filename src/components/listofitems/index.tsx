import { Button } from '@component/button'
import { Item } from '@component/item'
import { useTheme } from '@component/themecontext'
import { Typography } from '@component/typography'
import { DEFAULT_MESSAGE, ITEMS } from '@const'
import { colors } from '@theme'
import React, { FC, useState } from 'react'

import { List, WrapperButton, WrapperList, WrapperListText, WrapperText } from './style'

export interface IListOfItems {
  components?: string[]
  setComponents?: React.Dispatch<React.SetStateAction<string[]>>
  setInputValue?: React.Dispatch<React.SetStateAction<string>>
  onEdit?: () => void
}

export const ListOfItems: FC<IListOfItems> = ({ components, setComponents, onEdit }) => {
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
      const newComponents = components?.filter((_, i) => i !== index) || []
      setComponents(newComponents)
      localStorage.setItem(ITEMS, JSON.stringify(newComponents))
    }
  }

  // const handleSave = (index: number, newText: string) => {
  //   if (components && setComponents && setInputValue) {
  //     const newComponents = [...components]

  //     if (newText.length > MAX_TEXT_LENGTH) {
  //       setInputValue(`Todo task text must be less than ${MAX_TEXT_LENGTH} characters`)
  //     } else {
  //       newComponents[index] = newText
  //     }

  //     setComponents(newComponents)
  //     localStorage.setItem(ITEMS, JSON.stringify(newComponents))
  //   }
  // }

  const handleDeleteSelected = () => {
    if (components && setComponents) {
      const newComponents = components.filter((_, index) => !selectedItems.has(index))
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
            components.map((component, index) => (
              <Item
                text={component ? component : DEFAULT_MESSAGE}
                key={index}
                isSelected={selectedItems.has(index)}
                onDelete={() => handleDelete(index)}
                onSelect={() => handleSelect(index)}
                onEdit={onEdit ? onEdit : () => {}}
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
