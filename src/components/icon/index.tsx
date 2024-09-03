import { useTheme } from '@component/themeContext'
import React, { FC } from 'react'
import { useMedia } from 'react-media-hook'

import { IItems } from './interfaces'
import { WrapperIcons } from './styles'

export const Icons: FC<IItems> = ({ alt, onClick, src }) => {
  const { isLight } = useTheme()
  const isMobile = useMedia('(max-width: 600px)')?.matches

  return (
    <WrapperIcons $isLight={isLight}>
      <img alt={alt} onClick={onClick} src={src} width={`${isMobile ? '45px' : '50px'}`} />
    </WrapperIcons>
  )
}
