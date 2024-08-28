import find from '@assets/find.svg'
import { Icons } from '@component/Icons'
import { Input } from '@component/input'
import { useTheme } from '@component/themecontext'
import { colors } from '@theme'
import axios from 'axios'
import React, { FC, useState } from 'react'

import { Wrapper, WrapperGithub, WrapperInput } from './styles'
import { Typography } from '../typography'

export const GithubInfo: FC = () => {
  const { isLight } = useTheme()
  const [username, setUsername] = useState('')
  const [userImage, setUserImage] = useState(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const handleSearch = async () => {
    try {
      const { data } = await axios.get(`${process.env.API}${username}` ?? '')
      setUserImage(data.avatar_url)
    } catch (e) {
      alert(e)
      setUserImage(null)
    }
  }

  return (
    <Wrapper>
      <WrapperGithub>
        <Typography.Settings text={'GitHub info'} color={isLight ? colors.BLACK : colors.SWITCH_THEME_COLOR} />
        <WrapperInput>
          <Input value={username} handleInputChange={handleInputChange} onKeyDown={handleSearch} width={'282px'} />
          <Icons src={find} alt='edit-svg' onClick={handleSearch} />
        </WrapperInput>
      </WrapperGithub>

      {userImage && <img src={userImage} alt='User avatar' />}
    </Wrapper>
  )
}
