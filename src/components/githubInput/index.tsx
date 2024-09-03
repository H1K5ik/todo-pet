import { getGuthubAccount } from '@api'
import find from '@assets/find.svg'
import { Icons } from '@component/icon'
import { Input } from '@component/input'
import { useTheme } from '@component/themeContext'
import { colors } from '@theme'
import React, { FC, useState } from 'react'

import { Wrapper, WrapperGithub, WrapperInput } from './styles'
import { Typography } from '../typography'

export const GithubInfo: FC = () => {
  const [username, setUsername] = useState('')
  const [userImage, setUserImage] = useState(null)

  const { isLight } = useTheme()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const handleSearch = async () => {
    try {
      const avatar = await getGuthubAccount(username)
      setUserImage(avatar)
    } catch (e) {
      alert(e)
      setUserImage(null)
    }
  }

  return (
    <Wrapper>
      <WrapperGithub>
        <Typography.Settings color={isLight ? colors.BLACK : colors.SWITCH_THEME_COLOR} text={'GitHub info'} />
        <WrapperInput>
          <Input handleInputChange={handleInputChange} onKeyDown={handleSearch} value={username} width={'282px'} />
          <Icons alt='edit-svg' onClick={handleSearch} src={find} />
        </WrapperInput>
      </WrapperGithub>

      {userImage && <img alt='User avatar' src={userImage} />}
    </Wrapper>
  )
}
