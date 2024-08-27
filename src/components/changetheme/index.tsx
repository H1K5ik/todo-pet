import { useTheme } from '@component/themecontext'
import { colors } from '@theme'
import React, { FC } from 'react'

import { allOptions } from './config'
import { Option, Wrapper, WrapperSelect } from './styles'
import { Typography } from '../typography'

export const ChangeTheme: FC = () => {
  const { isLight, toggleTheme } = useTheme()
  return (
    <Wrapper>
      <Typography.Settings text={'Switch Theme'} color={isLight ? colors.SWITCH_THEME_COLOR : colors.BLACK} />
      <WrapperSelect value={isLight ? colors.LIGHT : colors.DARK} onChange={toggleTheme}>
        {allOptions
          ? allOptions.map(({ value, text }) => (
              <Option key={value} value={value} isLight={isLight}>
                {text}
              </Option>
            ))
          : ''}
      </WrapperSelect>
    </Wrapper>
  )
}
