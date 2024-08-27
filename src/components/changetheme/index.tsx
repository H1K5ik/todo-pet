import { useTheme } from '@component/themecontext'
import { colors } from '@theme'
import React, { FC } from 'react'

import { Wrapper, WrapperSelect } from './styles'
import { Typography } from '../typography'

export const ChangeTheme: FC = () => {
  const { isLight, toggleTheme } = useTheme()

  return (
    <Wrapper>
      <Typography.Settings text={'Switch Theme'} color={isLight ? colors.SWITCH_THEME_COLOR : colors.BLACK} />
      <WrapperSelect value={isLight ? colors.LIGHT : colors.DARK} onChange={toggleTheme}>
        <option value={colors.LIGHT}>
          <Typography.Settings text={'Light theme'} color={isLight ? colors.BLACK : colors.WHITE} />
        </option>
        <option value={colors.DARK}>
          <Typography.Settings text={'Dark theme'} color={isLight ? colors.BLACK : colors.WHITE} />
        </option>
      </WrapperSelect>
    </Wrapper>
  )
}
