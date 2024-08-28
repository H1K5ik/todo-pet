import { Button } from '@component/button'
import { Input } from '@component/input'
import { IListOfItems } from '@component/listofitems'
import { Toast } from '@component/modalwindow'
import { useTheme } from '@component/themecontext'
import { Typography } from '@component/typography'
import { ITEMS, MAX_TEXT_LENGTH } from '@const'
import { colors } from '@theme'
import { keygen } from '@utils/keygen'
import React, { FC, ReactElement, useEffect, useState } from 'react'

import { Block, BlockInput, WrapperButton } from './style'

interface ITodo {
  children: ReactElement<IListOfItems> | ReactElement<IListOfItems>[]
}
export interface IComponents {
  id: number
  text: string
}

export const Todo: FC<ITodo> = ({ children }) => {
  const { isLight } = useTheme()
  const [components, setComponents] = useState<IComponents[]>(() => {
    const savedItems = localStorage.getItem('items')
    return savedItems ? JSON.parse(savedItems) : []
  })
  const [inputValue, setInputValue] = useState<string>('')
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [todoId, setTodoId] = useState<number>()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(components))
  }, [components])

  const handleEdit = () => {
    setIsEdit(true)
  }

  const handleAddTodo = () => {
    const inputText = inputValue.trim()

    if (inputText.length > MAX_TEXT_LENGTH) {
      setInputValue(``)
      openModal()
      return
    }

    setComponents([
      ...components,
      { id: keygen(components.length ? components[components.length - 1].id : 1), text: inputText || 'hello' },
    ])
    setInputValue('')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSaveEdit = () => {
    const newText = inputValue.trim()
    const index = todoId || 0
    if (components && setComponents && setInputValue) {
      const newComponents = [...components]

      if (newText.length > MAX_TEXT_LENGTH) {
        setInputValue(``)
        openModal()
      } else {
        newComponents[index].text = newText
      }

      setComponents(newComponents)
      localStorage.setItem(ITEMS, JSON.stringify(newComponents))
    }

    setInputValue('')
    setIsEdit(false)
  }

  return (
    <>
      <BlockInput>
        <Toast isOpen={isModalOpen} onClose={closeModal} isLight={isLight}>
          <div>Todo task text must be less than {MAX_TEXT_LENGTH} characters</div>
        </Toast>
        <Block>
          <Typography.Input text={!isEdit ? 'Add a new task' : 'Edit task'} color={colors.HEADER_BACK_COLOR_LIGHT} />
          <Input handleInputChange={handleInputChange} value={inputValue} />
        </Block>
        <WrapperButton>
          <Button
            text={!isEdit ? 'Add todo' : 'Edit'}
            color={isLight ? colors.HEADER_BACK_COLOR_LIGHT : colors.HEADER_BACK_COLOR_DARK}
            onClick={!isEdit ? handleAddTodo : handleSaveEdit}
            onKeyDown={handleAddTodo}
          />
        </WrapperButton>
      </BlockInput>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, {
              components: components,
              setComponents: setComponents,
              setInputValue: setInputValue,
              onEdit: handleEdit,
              setTodoId: setTodoId,
            })
          : child,
      )}
    </>
  )
}
