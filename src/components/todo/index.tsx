import { Button } from '@component/button'
import { Input } from '@component/input'
import { useTheme } from '@component/themeContext'
import { Toast } from '@component/toastWindow'
import { Typography } from '@component/typography'
import { ITEMS, MAX_TEXT_LENGTH } from '@const'
import { colors } from '@theme'
import { keygen } from '@utils/keygen'
import React, { FC, useEffect, useState } from 'react'
import { useMedia } from 'react-media-hook'

import { IComponents, ITodo } from './interfaces'
import { Block, BlockInput, WrapperButton } from './styles'

export const Todo: FC<ITodo> = ({ children }) => {
  const [components, setComponents] = useState<IComponents[]>(() => {
    const savedItems = localStorage.getItem('items')
    return savedItems ? JSON.parse(savedItems) : []
  })
  const [inputValue, setInputValue] = useState<string>('')
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [todoId, setTodoId] = useState<number>()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { isLight } = useTheme()
  const isMobile = useMedia('(max-width: 600px)')?.matches
  const isTablet = useMedia('(max-width: 770px)')?.matches

  useEffect(() => {
    localStorage.setItem(ITEMS, JSON.stringify(components))
  }, [components])

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

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
      {
        id: keygen(components.length ? components[components.length - 1].id : 1),
        text: inputText || 'hello',
        selected: false,
      },
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
        newComponents.forEach((obj) => {
          if (obj.id == index) {
            obj.text = newText
          }
        })
      }

      setComponents(newComponents)
      localStorage.setItem(ITEMS, JSON.stringify(newComponents))
    }

    setInputValue('')
    setIsEdit(false)
  }
  return (
    <>
      <BlockInput $isMobile={isMobile ?? false} $isTablet={isTablet ?? false}>
        <Toast isOpen={isModalOpen} onClose={closeModal}>
          {`Todo task text must be less than ${MAX_TEXT_LENGTH} characters`}
        </Toast>
        <Block>
          <Typography.Input color={colors.HEADER_BACK_COLOR_LIGHT} text={!isEdit ? 'Add a new task' : 'Edit task'} />
          <Input
            $isMobile={isMobile}
            handleInputChange={handleInputChange}
            onKeyDown={handleAddTodo}
            value={inputValue}
          />
        </Block>
        <WrapperButton>
          <Button
            $isMobile={isMobile ?? false}
            color={isLight ? colors.HEADER_BACK_COLOR_LIGHT : colors.HEADER_BACK_COLOR_DARK}
            onClick={!isEdit ? handleAddTodo : handleSaveEdit}
            text={!isEdit ? 'Add todo' : 'Edit'}
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
