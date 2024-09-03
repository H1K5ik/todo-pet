import { getGuthubAccount } from '@api'
import find from '@assets/find.svg'
import { Icons } from '@component/icon'
import { Input } from '@component/input'
import { useTheme } from '@component/themeContext'
import { colors } from '@theme'
import React, { FC, useState } from 'react'
import { useMedia } from 'react-media-hook'

import { ImageGithub, Wrapper, WrapperGithub, WrapperGithubLogin, WrapperInput } from './styles'
import { Typography } from '../typography'

export const GithubInfo: FC = () => {
  const [username, setUsername] = useState('')
  const [userImage, setUserImage] = useState(null)

  const { isLight } = useTheme()
  const isMobile = useMedia('(max-width: 615px)')?.matches

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
    <Wrapper $isMobile={isMobile ?? false}>
      <WrapperGithub>
        <Typography.Settings color={isLight ? colors.BLACK : colors.SWITCH_THEME_COLOR} text={'GitHub info'} />
        <WrapperInput>
          <Input handleInputChange={handleInputChange} onKeyDown={handleSearch} value={username} width={'282px'} />
          <Icons alt='edit-svg' onClick={handleSearch} src={find} />
        </WrapperInput>
      </WrapperGithub>

      {userImage && (
        <WrapperGithubLogin>
          <Typography.Input color={isLight ? colors.BLACK : colors.SWITCH_THEME_COLOR} text={`Login: ${username}`} />
          <ImageGithub $isMobile={isMobile ?? false} $src={userImage} />
        </WrapperGithubLogin>
      )}
    </Wrapper>
  )
}
