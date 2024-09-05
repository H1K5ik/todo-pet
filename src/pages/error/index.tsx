import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ErrorPage = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Упс! Что-то пошло не так.</h1>
      <br />
      <p>Возникла ошибка, и мы работаем над ее исправлением.</p>
      <br />
      <button onClick={handleClick}>Вернуться на главную страницу</button>
    </div>
  )
}
