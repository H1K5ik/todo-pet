import React, { FC } from 'react'

interface IItems {
  onClick: () => void
  src: string
  alt: string
  width: string
}

export const Icons: FC<IItems> = ({ onClick, src, alt, width }) => {
  return <img src={src} onClick={onClick} alt={alt} width={width} />
}
