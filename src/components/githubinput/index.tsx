import { useTheme } from '@component/themecontext'
import { colors } from '@theme'
import React, { FC, useState } from 'react'

import { Input, Wrapper } from './styles'
import find from '../../assets/find.svg'
import { Typography } from '../typography'
import axios from 'axios'

export const GithubInfo: FC = () => {
  const { isLight } = useTheme()
  const [username, setUsername] = useState('')
  const [userImage, setUserImage] = useState(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const handleSearch = async () => {
    try {
      const res = await axios.get(`https://api.github.com/users/${username}`)
      setUserImage(res.data.avatar_url)
    } catch (error) {
      console.error('User not found', error)
      setUserImage(null)
    }
  }
  return (
    <Wrapper>
      <Typography.Settings text={'GitHub info'} color={isLight ? 'black' : colors.SWITCH_THEME_COLOR} />
      <Input isLight={isLight} value={username} onChange={handleInputChange} />

      <img src={find} alt='edit-svg' width='15%' onClick={handleSearch} />
      {userImage && <img src={userImage} alt='User avatar' />}
    </Wrapper>
  )
}
