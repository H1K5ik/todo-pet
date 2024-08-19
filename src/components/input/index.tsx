import { colors } from '@theme'
import React, { FC } from 'react'

import { Block, BlockInput, InputBox, WrapperButton } from './styles'
import { Button } from '../button'
import { Item } from '../item'
import { Typography } from '../typography'

const Input: FC = () => {
  return <InputBox placeholder={'hello'}></InputBox>
}

export const InputMain: FC = () => {
  const [components, setComponents] = React.useState([<></>])

  const addComponent = () => {
    setComponents([...components, <Item key={Date.now()} />])
  }

  return (
    <>
      <BlockInput>
        <Block>
          <Typography.Input text={'Add a new task'} color={colors.HEADER_BACK_COLOR} />
          <Input />
        </Block>
        <WrapperButton>
          <Button.ButtonPC text={'Add todo'} color={colors.HEADER_BACK_COLOR} onClick={addComponent} />
        </WrapperButton>
      </BlockInput>
      <div>{components.map((components) => components)}</div>
    </>
  )
}
