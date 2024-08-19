import { colors } from '@theme'
import React, { FC, useState } from 'react'

import { Block, BlockInput, InputBox, List, WrapperButton } from './styles'
import { Button } from '../button'
import { Item } from '../item'
import { Typography } from '../typography'

const Input: FC<{ handleInputChange: React.ChangeEventHandler<HTMLInputElement>; value: string }> = ({
  handleInputChange,
  value,
}) => {
  return <InputBox placeholder={'hello'} onChange={handleInputChange} value={value}></InputBox>
}

export const InputMain: FC = () => {
  const [components, setComponents] = useState([<></>])
  const [inputValue, setInputValue] = useState<string>('')

  const handleAddComponent = () => {
    const inputText = inputValue.trim()
    if (inputText !== '') {
      if (inputText.length > 30) {
        setInputValue('Todo task text must be less than 30 characters')
        return
      } else {
        setComponents([...components, <Item text={inputValue} key={Date.now()} />])
      }
    } else {
      setComponents([...components, <Item text={'hello'} key={Date.now()} />])
    }

    setInputValue('')
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <>
      <BlockInput>
        <Block>
          <Typography.Input text={'Add a new task'} color={colors.HEADER_BACK_COLOR} />
          <Input handleInputChange={handleInputChange} value={inputValue} />
        </Block>
        <WrapperButton>
          <Button.ButtonPC text={'Add todo'} color={colors.HEADER_BACK_COLOR} onClick={handleAddComponent} />
        </WrapperButton>
      </BlockInput>
      <List>{components.map((components) => components)}</List>
    </>
  )
}
