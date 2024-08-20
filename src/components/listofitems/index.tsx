import { Button } from '@component/button'
import { Item } from '@component/item'
import { Typography } from '@component/typography'
import { colors } from '@theme'
import React, { FC, useState } from 'react'

import { List, WrapperButton, WrapperText } from './style'

export interface ChildComponentProps {
  components?: string[]
  setComponents?: React.Dispatch<React.SetStateAction<string[]>>
  setInputValue?: React.Dispatch<React.SetStateAction<string>>
}

export const ListOfItems: FC<ChildComponentProps> = ({ components, setComponents, setInputValue }) => {
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
      localStorage.setItem('items', JSON.stringify(newComponents))
    }
  }

  const handleSave = (index: number, newText: string) => {
    if (components && setComponents && setInputValue) {
      const newComponents = [...components]

      if (newText.length > 30) {
        setInputValue('Todo task text must be less than 30 characters')
      } else {
        newComponents[index] = newText
      }

      setComponents(newComponents)
      localStorage.setItem('items', JSON.stringify(newComponents))
    }
  }

  const handleDeleteSelected = () => {
    if (components && setComponents) {
      const newComponents = components.filter((_, index) => !selectedItems.has(index))
      setComponents(newComponents)
      setSelectedItems(new Set())
      localStorage.setItem('items', JSON.stringify(newComponents))
    }
  }

  return (
    <>
      <List>
        <WrapperText>
          <Typography.Logo text={'Task list'} color={'black'} />
        </WrapperText>
        {components?.map((component, index) => (
          <Item
            text={!component ? 'hello' : component}
            key={index}
            onSave={(newText: string) => handleSave(index, newText)}
            isSelected={selectedItems.has(index)}
            onDelete={() => handleDelete(index)}
            onSelect={() => handleSelect(index)}
          />
        ))}
        <WrapperButton>
          <Button.ButtonPC
            text={'Deleted selected'}
            color={colors.DELETE_BUTTON_COLOR}
            onClick={handleDeleteSelected}
            disabled={selectedItems.size === 0}
          />
        </WrapperButton>
      </List>
    </>
  )
}
