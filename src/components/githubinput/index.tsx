import { useTheme } from '@component/themecontext'
import { colors } from '@theme'
import React, { FC } from 'react'

import { Input, Wrapper } from './styles'
import find from '../../assets/find.svg'
import { Typography } from '../typography'

export const GithubInfo: FC = () => {
  const { isLight } = useTheme()
  return (
    <Wrapper>
      <Typography.Settings text={'GitHub info'} color={isLight ? 'black' : colors.SWITCH_THEME_COLOR} />
      <Input isLight={isLight} />
      <img src={find} alt='edit-svg' width='15%' />
    </Wrapper>
  )
}
