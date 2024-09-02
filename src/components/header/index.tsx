/* stylelint-disable value-keyword-case */
import { darkTheme, lightTheme } from '@theme'
import { useWindowWidth } from '@utils/useWindow'
import React, { FC, useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useMedia } from 'react-media-hook'
import { Outlet } from 'react-router-dom'

import { config } from './config'
import { IconBurger, Link, Wrapper, WrapperBurger, WrapperHeader, WrapperSettings } from './styles'
import { useTheme } from '../themecontext/index'
import { Typography } from '../typography'

export const Header: FC = () => {
  const { isLight } = useTheme()
  const themeMode = isLight ? lightTheme : darkTheme
  const windowWidth = useWindowWidth()
  const [isopen, setIsOpen] = useState(false)
  const isMobile = useMedia('(max-width: 600px)')?.matches

  useEffect(() => {
    document.body.style.backgroundColor = themeMode.background
  }, [themeMode])
  const toggleMenu = () => {
    setIsOpen(!isopen)
  }

  return (
    <>
      <WrapperHeader $isLight={isLight}>
        <Link $isLight={isLight} $windowWidth={windowWidth} $isopen={isopen}>
          <Wrapper $isopen={isopen}>
            {isMobile ? <Typography.Input text={'Modsen Todo list'} /> : <Typography.Logo text={'Modsen Todo list'} />}
          </Wrapper>
          <Wrapper $isopen={isopen}>
            {config && !isMobile ? (
              config.map(({ text, path }) => (
                <WrapperSettings key={text}>
                  <Typography.Header text={text} path={path} />
                </WrapperSettings>
              ))
            ) : (
              <IconBurger onClick={toggleMenu}>{isopen ? <FaTimes /> : <FaBars />}</IconBurger>
            )}
            {config &&
              isMobile &&
              config.map(({ text, path }) => (
                <WrapperBurger key={text} $isopen={isopen}>
                  <Typography.Input text={text} path={path} isopen={isopen} />
                </WrapperBurger>
              ))}
          </Wrapper>
        </Link>
      </WrapperHeader>
      <Outlet />
    </>
  )
}
