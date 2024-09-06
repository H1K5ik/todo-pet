import React from 'react'

import { ChangeTheme } from '@component/changeTheme'
import { GithubInfo } from '@component/githubInput'

import { Wrapper } from './styles'

export const SettingsPage = () => {
  return (
    <Wrapper>
      <ChangeTheme />
      <GithubInfo />
    </Wrapper>
  )
}
