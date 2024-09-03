import { useTheme } from '@component/themeContext'
import { colors } from '@theme'
import React, { FC } from 'react'
import { useMedia } from 'react-media-hook'

import { allOptions } from './config'
import { Option, Wrapper, WrapperSelect } from './styles'
import { Typography } from '../typography'

export const ChangeTheme: FC = () => {
  const { isLight, toggleTheme } = useTheme()
  const isMobile = useMedia('(max-width: 615px)')?.matches

  return (
    <Wrapper $isMobile={isMobile ?? false}>
      <Typography.Settings color={isLight ? colors.SWITCH_THEME_COLOR : colors.BLACK} text={'Switch Theme'} />
      <WrapperSelect $isLight={isLight} onChange={toggleTheme} value={isLight ? colors.LIGHT : colors.DARK}>
        {allOptions.map(({ text, value }) => (
          <Option $isLight={isLight} key={value} value={value}>
            {text}
          </Option>
        ))}
      </WrapperSelect>
    </Wrapper>
  )
}
