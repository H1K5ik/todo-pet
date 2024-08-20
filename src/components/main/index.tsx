import { Item } from '@component/item'
import React, { FC } from 'react'

import { List } from './style'

export interface ChildComponentProps {
  components?: string[]
  setComponents?: React.Dispatch<React.SetStateAction<string[]>>
}

export const Main: FC<ChildComponentProps> = ({ components, setComponents }) => {
  const handleDelete = (
    index: number,
    components: string[],
    setComponents?: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    if (setComponents) {
      const newComponents = components.filter((_, i) => i !== index)
      setComponents(newComponents)
      localStorage.setItem('items', JSON.stringify(newComponents))
    }
  }
  return (
    <List>
      {components?.map((component, index) => (
        <Item
          text={!component ? 'hello' : component}
          key={index}
          onDelete={() => handleDelete(index, components, setComponents)}
        />
      ))}
    </List>
  )
}
