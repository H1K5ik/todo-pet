/* stylelint-disable value-keyword-case */
import { darkTheme, lightTheme } from '@theme'
import { useWindowWidth } from '@utils/useWindow'
import React, { FC, useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useMedia } from 'react-media-hook'
import { Outlet } from 'react-router-dom'

import { config } from './config'
import { IconBurger, Link, Wrapper, WrapperBurger, WrapperHeader, WrapperSettings } from './styles'
import { useTheme } from '../themeContext/index'
import { Typography } from '../typography'

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const { isLight } = useTheme()
  const themeMode = isLight ? lightTheme : darkTheme

  useEffect(() => {
    document.body.style.backgroundColor = themeMode.background
  }, [themeMode])

  const windowWidth = useWindowWidth()
  const isMobile = useMedia('(max-width: 600px)')?.matches

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <WrapperHeader $isLight={isLight}>
        <Link $isLight={isLight} $isopen={isOpen} $windowWidth={windowWidth}>
          <Wrapper $isopen={isOpen}>
            {isMobile ? <Typography.Input text={'Modsen Todo list'} /> : <Typography.Logo text={'Modsen Todo list'} />}
          </Wrapper>
          <Wrapper $isopen={isOpen}>
            {config && !isMobile ? (
              config.map(({ path, text }) => (
                <WrapperSettings key={text}>
                  <Typography.Header path={path} text={text} />
                </WrapperSettings>
              ))
            ) : (
              <IconBurger onClick={toggleMenu}>{isOpen ? <FaTimes /> : <FaBars />}</IconBurger>
            )}
            {config &&
              isMobile &&
              config.map(({ path, text }) => (
                <WrapperBurger $isopen={isOpen} key={text}>
                  <Typography.Input isopen={isOpen} path={path} text={text} />
                </WrapperBurger>
              ))}
          </Wrapper>
        </Link>
      </WrapperHeader>
      <Outlet />
    </>
  )
}
