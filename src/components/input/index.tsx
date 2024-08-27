import { useTheme } from '@component/themecontext'
import { DEFAULT_MESSAGE } from '@const'
import React, { FC } from 'react'

import { InputBox } from './styles'

interface IInput {
  handleInputChange: React.ChangeEventHandler<HTMLInputElement>
  value: string
}

export const Input: FC<IInput> = ({ handleInputChange, value }) => {
  const { isLight } = useTheme()
  return <InputBox placeholder={DEFAULT_MESSAGE} onChange={handleInputChange} value={value} isLight={isLight} />
}
