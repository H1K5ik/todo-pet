/* stylelint-disable value-keyword-case */
import { darkTheme, lightTheme } from '@theme'
import { useWindowWidth } from '@utils/useWindow'
import React, { FC, useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useMedia } from 'react-media-hook'
import { Outlet } from 'react-router-dom'

import { config } from './config'
import { IconBurger, Link, Wrapper, WrapperBurger, WrapperHeader, WrapperLink, WrapperSettings } from './styles'
import { useTheme } from '../themeContext/index'
import { Typography } from '../typography'

export const Header: FC = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false)

  const { isLight } = useTheme()
  const themeMode = isLight ? lightTheme : darkTheme

  useEffect(() => {
    document.body.style.backgroundColor = themeMode.background
  }, [themeMode])

  const windowWidth = useWindowWidth()
  const isMobile = useMedia('(max-width: 600px)')?.matches

  const toggleMenu = () => {
    setIsBurgerOpen(!isBurgerOpen)
  }

  return (
    <>
      <WrapperHeader $isLight={isLight} data-testid='header'>
        <Link $isBurgerOpen={isBurgerOpen} $isLight={isLight} $isMobile={isMobile ?? false} $windowWidth={windowWidth}>
          <Wrapper $isBurgerOpen={isBurgerOpen} $isMobile={isMobile ?? false}>
            {isMobile ? <Typography.Input text={'Modsen Todo list'} /> : <Typography.Logo text={'Modsen Todo list'} />}
          </Wrapper>
          <WrapperLink $isBurgerOpen={isBurgerOpen} $isMobile={isMobile ?? false}>
            {config && !isMobile ? (
              config.map(({ path, text }) => (
                <WrapperSettings $isMobile={isMobile ?? false} key={text}>
                  <Typography.Header path={path} text={text} />
                </WrapperSettings>
              ))
            ) : (
              <IconBurger onClick={toggleMenu}>{isBurgerOpen ? <FaTimes /> : <FaBars />}</IconBurger>
            )}
            {config &&
              isMobile &&
              config.map(({ path, text }) => (
                <WrapperBurger $isBurgerOpen={isBurgerOpen} key={text}>
                  <Typography.Header isBurgerOpen={isBurgerOpen} path={path} text={text} />
                </WrapperBurger>
              ))}
          </WrapperLink>
        </Link>
      </WrapperHeader>
      <Outlet />
    </>
  )
}
