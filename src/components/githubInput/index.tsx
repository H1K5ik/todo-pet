import React, { ChangeEvent, FC, useState } from 'react'
import { useMedia } from 'react-media-hook'

import { getGuthubAccount } from '@api'
import find from '@assets/find.svg'
import { Icons } from '@component/icon'
import { Input } from '@component/input'
import { useTheme } from '@component/themeContext'
import { Toast } from '@component/toastWindow'
import { colors } from '@theme'

import { Typography } from '../typography'

import { CustomError } from './interfaces'
import { ImageGithub, Wrapper, WrapperGithub, WrapperGithubLogin, WrapperInput } from './styles'

export const GithubInfo: FC = () => {
  const [username, setUsername] = useState('')
  const [userImage, setUserImage] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalError, setModalError] = useState<string | unknown>(null)

  const { isLight } = useTheme()
  const isMobile = useMedia('(max-width: 615px)')?.matches

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const handleSearch = async () => {
    try {
      const avatar = await getGuthubAccount(username)
      setUserImage(avatar)
    } catch (e: unknown) {
      const error = e as CustomError

      openModal()
      setUserImage(null)
      switch (error.code) {
        case 'ERR_BAD_REQUEST': {
          setModalError(`User with ${username ? ' name "' + username + '"' : 'empty username'} not fount`)
          break
        }
        default: {
          setModalError(e)
        }
      }
    }
  }
  return (
    <Wrapper $isMobile={isMobile ?? false}>
      <Toast isMobile={isMobile ?? false} isOpen={isModalOpen} onClose={closeModal}>
        {`${modalError}`}
      </Toast>
      <WrapperGithub>
        <Typography.Settings color={isLight ? colors.BLACK : colors.SWITCH_THEME_COLOR} text={'GitHub info'} />
        <WrapperInput>
          <Input handleInputChange={handleInputChange} onKeyDown={handleSearch} value={username} width={'282px'} />
          <Icons alt='search-svg' onClick={handleSearch} src={find} />
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
