import deleteItem from '@assets/deleteItem.svg'
import edit from '@assets/edit.svg'
import { Icons } from '@component/icon'
import { useTheme } from '@component/themeContext'
import React, { FC } from 'react'

import { IItem } from './interfaces'
import { CheckItem, Indicator, ItemForm, Label, Wrapper, WrapperText } from './styles'
import { Typography } from '../typography'

export const Item: FC<IItem> = ({ text, onDelete, onSelect, isSelected, onEdit }) => {
  const { isLight } = useTheme()
  return (
    <ItemForm>
      <Wrapper>
        <Label $isLight={isLight}>
          <CheckItem type='checkbox' checked={isSelected} onChange={onSelect} />
          <Indicator $isLight={isLight} />
          <WrapperText>
            <Typography.Default text={text} />
          </WrapperText>
        </Label>
        <Icons src={edit} alt='edit-svg' onClick={onEdit} />
        <Icons src={deleteItem} alt='delete-svg' onClick={onDelete} />
      </Wrapper>
    </ItemForm>
  )
}
