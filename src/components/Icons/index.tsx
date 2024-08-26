import React, { FC } from 'react'

export const Icons: FC<{
  onClick: () => void
  src: string
  alt: string
  width: string
}> = ({ onClick, src, alt, width }) => {
  return <img src={src} onClick={onClick} alt={alt} width={width} />
}
