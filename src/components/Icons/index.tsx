import { useTheme } from '@component/themecontext'
import React, { FC } from 'react'

import { WrapperIcons } from './styles'

interface IItems {
  onClick: () => void
  src: string
  alt: string
}

export const Icons: FC<IItems> = ({ onClick, src, alt }) => {
  const { isLight } = useTheme()
  return (
    <WrapperIcons $isLight={isLight}>
      <img src={src} onClick={onClick} alt={alt} />
    </WrapperIcons>
  )
}
