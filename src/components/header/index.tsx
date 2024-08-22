import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { Link, Wrapper, WrapperSettings } from './styles'
import { Typography } from '../typography'

export const Header: FC = () => {
  return (
    <>
      <Link>
        <Wrapper>
          <Typography.Logo text={'Modsen Todo list'} />
        </Wrapper>
        <Wrapper>
          <WrapperSettings>
            <Typography.Header text={'Home'} path={'/home'} />
          </WrapperSettings>
          <WrapperSettings>
            <Typography.Header text={'Settings'} path={'/settings'} />
          </WrapperSettings>
        </Wrapper>
      </Link>
      <Outlet />
    </>
  )
}
