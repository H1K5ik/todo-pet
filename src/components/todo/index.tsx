import { Button } from '@component/button'
import { Input } from '@component/input'
import { ChildComponentProps } from '@component/listofitems'
import { useTheme } from '@component/themecontext'
import { Typography } from '@component/typography'
import { colors } from '@theme'
import React, { FC, ReactElement, useEffect, useState } from 'react'

import { Block, BlockInput, WrapperButton } from './style'

interface TodoProps {
  children: ReactElement<ChildComponentProps> | ReactElement<ChildComponentProps>[]
}

export const Todo: FC<TodoProps> = ({ children }) => {
  const [components, setComponents] = useState<string[]>(() => {
    const savedItems = localStorage.getItem('items')
    return savedItems ? JSON.parse(savedItems) : []
  })

  const [inputValue, setInputValue] = useState<string>('')

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(components))
  }, [components])

  const handleAddTodo = () => {
    const inputText = inputValue.trim()

    if (inputText.length > 30) {
      setInputValue('Todo task text must be less than 30 characters')
      return
    }

    setComponents([...components, inputText])
    setInputValue('')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const { isLight } = useTheme()

  return (
    <>
      <BlockInput>
        <Block>
          <Typography.Input text={'Add a new task'} color={colors.HEADER_BACK_COLOR_LIGHT} />
          <Input handleInputChange={handleInputChange} value={inputValue} />
        </Block>
        <WrapperButton>
          <Button.ButtonPC
            text={'Add todo'}
            color={isLight ? colors.HEADER_BACK_COLOR_LIGHT : colors.HEADER_BACK_COLOR_DARK}
            onClick={handleAddTodo}
          />
        </WrapperButton>
      </BlockInput>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, {
              components: components,
              setComponents: setComponents,
              setInputValue: setInputValue,
            })
          : child,
      )}
    </>
  )
}
