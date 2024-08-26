import find from '@assets/find.svg'
import { Icons } from '@component/Icons'
import { useTheme } from '@component/themecontext'
import { colors } from '@theme'
import axios from 'axios'
import React, { FC, useState } from 'react'

import { Input, Wrapper } from './styles'
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
      const { data } = await axios.get(process.env.API ?? '')
      setUserImage(data.avatar_url)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      // TODO add error in modal window
      setUserImage(null)
    }
  }
  return (
    <Wrapper>
      <Typography.Settings text={'GitHub info'} color={isLight ? colors.BLACK : colors.SWITCH_THEME_COLOR} />
      <Input isLight={isLight} value={username} onChange={handleInputChange} />

      <Icons src={find} alt='edit-svg' width='15%' onClick={handleSearch} />
      {userImage && <img src={userImage} alt='User avatar' />}
    </Wrapper>
  )
}
