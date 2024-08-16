import React from 'react'

import { Link, Logo } from './styles'
import { HeaderHome } from '../Menu'
import { HeaderSettings } from '../Settings'

export function Header() {
  return (
    <Link>
      <Logo>Modsen Todo list</Logo>
      <div>
        <HeaderHome />
        <HeaderSettings />
      </div>
    </Link>
  )
}
