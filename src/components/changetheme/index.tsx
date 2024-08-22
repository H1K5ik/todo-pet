import { useTheme } from '@component/themecontext'
import { colors } from '@theme'
import React, { FC } from 'react'

import { Wrapper, WrapperSelect } from './styles'
import { Typography } from '../typography'

export const ChangeTheme: FC = () => {
  const { isLight, toggleTheme } = useTheme()
  return (
    <Wrapper>
      <Typography.Settings text={'Switch Theme'} color={isLight ? colors.SWITCH_THEME_COLOR : 'black'} />
      <WrapperSelect value={isLight ? 'light' : 'dark'} onChange={toggleTheme}>
        <option value='light'>
          <Typography.Settings text={'Light theme'} color={isLight ? 'black' : 'white'} />
        </option>
        <option value='dark'>
          <Typography.Settings text={'Dark theme'} color={isLight ? 'black' : 'white'} />
        </option>
      </WrapperSelect>
    </Wrapper>
  )
}
