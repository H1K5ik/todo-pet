import { darkTheme, lightTheme } from '@theme'
import React, { FC, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { Link, Wrapper, WrapperSettings } from './styles'
import { useTheme } from '../themecontext/index'
import { Typography } from '../typography'

export const Header: FC = () => {
  const { isLight } = useTheme()
  const themeMode = isLight ? lightTheme : darkTheme

  useEffect(() => {
    document.body.style.backgroundColor = themeMode.background
  }, [themeMode])

  return (
    <>
      <Link isLight={isLight}>
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
