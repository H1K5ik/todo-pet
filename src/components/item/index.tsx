import deleteItem from '@assets/deleteItem.svg'
import edit from '@assets/edit.svg'
import { Icons } from '@component/Icons'
import { useTheme } from '@component/themecontext'
import React, { FC } from 'react'

import { CheckItem, Indicator, ItemForm, Label, Wrapper, WrapperText } from './styles'
import { Typography } from '../typography'

interface IItem {
  text: string
  onDelete: () => void
  onSelect: () => void
  onEdit: () => void
  isSelected: boolean
}

export const Item: FC<IItem> = ({ text, onDelete, onSelect, isSelected, onEdit }) => {
  const { isLight } = useTheme()

  return (
    <ItemForm>
      <Wrapper>
        <Label isLight={isLight}>
          <CheckItem type='checkbox' checked={isSelected} onChange={onSelect} isLight={isLight} />
          <Indicator isLight={isLight} />
          <WrapperText>
            <Typography.Default text={text} />
          </WrapperText>
        </Label>
        <Icons src={edit} alt='edit-svg' width='5%' onClick={onEdit} />
        <Icons src={deleteItem} alt='delete-svg' width='5%' onClick={onDelete} />
      </Wrapper>
    </ItemForm>
  )
}
