import deleteItem from '@assets/deleteItem.svg'
import edit from '@assets/edit.svg'
import { Icons } from '@component/icon'
import { useTheme } from '@component/themeContext'
import React, { FC } from 'react'

import { IItem } from './interfaces'
import { CheckItem, Indicator, ItemForm, Label, Wrapper, WrapperText } from './styles'
import { Typography } from '../typography'

export const Item: FC<IItem> = ({ isSelected, onDelete, onEdit, onSelect, text }) => {
  const { isLight } = useTheme()

  return (
    <ItemForm>
      <Wrapper>
        <Label $isLight={isLight}>
          <CheckItem checked={isSelected} onChange={onSelect} type='checkbox' />
          <Indicator $isLight={isLight} />
          <WrapperText>
            <Typography.Default text={text} />
          </WrapperText>
        </Label>
        <Icons alt='edit-svg' onClick={onEdit} src={edit} />
        <Icons alt='delete-svg' onClick={onDelete} src={deleteItem} />
      </Wrapper>
    </ItemForm>
  )
}
