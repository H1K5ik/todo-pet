import React, { FC } from 'react'
import { useMedia } from 'react-media-hook'

import { IItems } from './interfaces'
import { Icon, WrapperIcons } from './styles'

export const Icons: FC<IItems> = ({ alt, onClick, src }) => {
  const isMobile = useMedia('(max-width: 600px)')?.matches

  return (
    <WrapperIcons>
      <Icon $isMobile={isMobile ?? false} alt={alt} onClick={onClick} src={src} />
    </WrapperIcons>
  )
}
