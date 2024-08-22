import { useTheme } from '@component/themecontext'
import React, { FC } from 'react'

import { InputBox } from './styles'

export const Input: FC<{ handleInputChange: React.ChangeEventHandler<HTMLInputElement>; value: string }> = ({
  handleInputChange,
  value,
}) => {
  const { isLight } = useTheme()
  return <InputBox placeholder={'hello'} onChange={handleInputChange} value={value} isLight={isLight}></InputBox>
}
