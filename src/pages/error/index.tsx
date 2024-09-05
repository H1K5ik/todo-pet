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
      <h1>Oops! Something went wrong.</h1>
      <p>An error has occurred and we are working to fix it.</p>
      <button onClick={handleClick}>Return to the main page</button>
    </Wrapper>
  )
}
