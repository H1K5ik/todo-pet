import { useTheme } from '@component/themeContext'
import { colors } from '@theme'
import React, { FC } from 'react'

import { allOptions } from './config'
import { Option, Wrapper, WrapperSelect } from './styles'
import { Typography } from '../typography'

export const ChangeTheme: FC = () => {
  const { isLight, toggleTheme } = useTheme()

  return (
    <Wrapper>
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
