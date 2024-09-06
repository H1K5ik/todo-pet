import React, { FC } from 'react'
import { useMedia } from 'react-media-hook'

import deleteItem from '@assets/deleteItem.svg'
import edit from '@assets/edit.svg'
import { Icons } from '@component/icon'
import { useTheme } from '@component/themeContext'

import { Typography } from '../typography'

import { IItem } from './interfaces'
import { CheckItem, Indicator, ItemForm, Label, Wrapper, WrapperText } from './styles'

export const Item: FC<IItem> = ({ isSelected, onDelete, onEdit, onSelect, text }) => {
  const { isLight } = useTheme()
  const isMobile = useMedia('(max-width: 600px)')?.matches

  return (
    <ItemForm $isMobile={isMobile ?? false}>
      <Wrapper>
        <Label $isLight={isLight} $isMobile={isMobile ?? false}>
          <CheckItem checked={isSelected} onChange={onSelect} type='checkbox' />
          <Indicator $isLight={isLight} data-testid='indicator' />
          <WrapperText $isMobile={isMobile ?? false}>
            <Typography.Default text={text} />
          </WrapperText>
        </Label>
        <Icons alt='edit-svg' onClick={onEdit} src={edit} />
        <Icons alt='delete-svg' onClick={onDelete} src={deleteItem} />
      </Wrapper>
    </ItemForm>
  )
}
