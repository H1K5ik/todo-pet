import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Wrapper } from './styles'

export const ErrorPage = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }

  return (
    <Wrapper>
      <h1>Упс! Что-то пошло не так.</h1>
      <p>Возникла ошибка, и мы работаем над ее исправлением.</p>
      <button onClick={handleClick}>Вернуться на главную страницу</button>
    </Wrapper>
  )
}
