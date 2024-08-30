import { darkTheme, lightTheme } from '@theme'
import { useWindowWidth } from '@utils/useWindow'
import React, { FC, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { config } from './config'
import { Link, Wrapper, WrapperSettings } from './styles'
import { useTheme } from '../themecontext/index'
import { Typography } from '../typography'

export const Header: FC = () => {
  const { isLight } = useTheme()
  const themeMode = isLight ? lightTheme : darkTheme
  const windowWidth = useWindowWidth()

  useEffect(() => {
    document.body.style.backgroundColor = themeMode.background
  }, [themeMode])
  return (
    <>
      <Link $isLight={isLight} $windowWidth={windowWidth}>
        <Wrapper>
          <Typography.Logo text={'Modsen Todo list'} />
        </Wrapper>
        <Wrapper>
          {config
            ? config.map(({ text, path }) => (
                <WrapperSettings key={text}>
                  <Typography.Header text={text} path={path} />
                </WrapperSettings>
              ))
            : ''}
        </Wrapper>
      </Link>
      <Outlet />
    </>
  )
}
