import React, { FC } from 'react'

import { CheckItem, ItemForm, Wrapper, WrapperCheck, WrapperText } from './styles'
import deleteItem from '../../assets/deleteItem.svg'
import edit from '../../assets/edit.svg'
import { Typography } from '../typography'

export const Item: FC<{ text: string }> = ({ text }) => {
  return (
    <ItemForm>
      <Wrapper>
        <WrapperCheck>
          <CheckItem type='checkbox'></CheckItem>
          <WrapperText>
            <Typography.Default text={text}></Typography.Default>
          </WrapperText>
        </WrapperCheck>
        <img src={edit} alt='edit-svg' width={'5%'} />
        <img src={deleteItem} alt='edit-svg' width={'5%'} />
      </Wrapper>
    </ItemForm>
  )
}
