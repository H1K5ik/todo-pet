import { useTheme } from '@component/themecontext'
import { DEFAULT_MESSAGE } from '@const'
import React, { FC } from 'react'

import { InputBox } from './styles'

export const Input: FC<{ handleInputChange: React.ChangeEventHandler<HTMLInputElement>; value: string }> = ({
  handleInputChange,
  value,
}) => {
  const { isLight } = useTheme()
  return <InputBox placeholder={DEFAULT_MESSAGE} onChange={handleInputChange} value={value} isLight={isLight} />
}
