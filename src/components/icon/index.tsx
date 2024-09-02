import { useTheme } from '@component/themecontext'
import React, { FC } from 'react'

import { IItems } from './interfaces'
import { WrapperIcons } from './styles'

export const Icons: FC<IItems> = ({ onClick, src, alt }) => {
  const { isLight } = useTheme()
  return (
    <WrapperIcons $isLight={isLight}>
      <img src={src} onClick={onClick} alt={alt} />
    </WrapperIcons>
  )
}
