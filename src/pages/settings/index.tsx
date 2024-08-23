import { ChangeTheme } from '@component/changetheme'
import { GithubInfo } from '@component/githubinput'
import React from 'react'

export const SettingsPage = () => {
  return (
    <>
      <ChangeTheme />
      <GithubInfo />
    </>
  )
}
