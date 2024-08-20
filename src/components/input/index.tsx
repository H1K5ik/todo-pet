import React, { FC } from 'react'

import * as styles from './styles'

export const Input: FC<{ handleInputChange: React.ChangeEventHandler<HTMLInputElement>; value: string }> = ({
  handleInputChange,
  value,
}) => {
  return <styles.InputBox placeholder={'hello'} onChange={handleInputChange} value={value}></styles.InputBox>
}
