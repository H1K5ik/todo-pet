import { useTheme } from '@component/themeContext'
import React, { FC } from 'react'

import { IItems } from './interfaces'
import { WrapperIcons } from './styles'

export const Icons: FC<IItems> = ({ alt, onClick, src }) => {
  const { isLight } = useTheme()

  return (
    <WrapperIcons $isLight={isLight}>
      <img alt={alt} onClick={onClick} src={src} />
    </WrapperIcons>
  )
}
