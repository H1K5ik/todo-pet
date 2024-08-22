import { useTheme } from '@component/themecontext'
import React, { FC, useState } from 'react'

import { CheckItem, ItemForm, Wrapper, WrapperCheck, WrapperText } from './styles'
import deleteItem from '../../assets/deleteItem.svg'
import edit from '../../assets/edit.svg'
import { Typography } from '../typography'

interface ItemProps {
  text: string
  onDelete: () => void
  onSelect: () => void
  onSave: (newText: string) => void
  isSelected: boolean
}

export const Item: FC<ItemProps> = ({ text, onDelete, onSelect, onSave, isSelected }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [editableText, setEditableText] = useState<string>(text)

  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleSaveClick = () => {
    onSave(editableText)
    setIsEditing(false)
  }

  const handleCancelClick = () => {
    setEditableText(text)
    setIsEditing(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditableText(e.target.value)
  }

  const { isLight } = useTheme()
  return (
    <ItemForm>
      <Wrapper>
        <WrapperCheck>
          <CheckItem type='checkbox' checked={isSelected} onChange={onSelect} isLight={isLight} />
          <WrapperText>
            {isEditing ? (
              <div>
                <input type='text' value={editableText} onChange={handleInputChange} />
                <button onClick={handleSaveClick}>Save</button>
                <button onClick={handleCancelClick}>Cancel</button>
              </div>
            ) : (
              <Typography.Default text={text} />
            )}
          </WrapperText>
        </WrapperCheck>
        <img src={edit} alt='edit-svg' width='5%' onClick={handleEditClick} />
        <img src={deleteItem} alt='delete-svg' width='5%' onClick={onDelete} />
      </Wrapper>
    </ItemForm>
  )
}
