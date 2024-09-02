import { ChangeTheme } from '@component/changetheme'
import { GithubInfo } from '@component/githubinput'
import React from 'react'

import { Wrapper } from './styles'

export const SettingsPage = () => {
  return (
    <Wrapper>
      <ChangeTheme />
      <GithubInfo />
    </Wrapper>
  )
}
