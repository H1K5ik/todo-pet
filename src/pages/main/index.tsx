import { Header } from '@component/header'
import { Main } from '@component/main'
import { Todo } from '@component/todo'
import React from 'react'

export const MainPage = () => {
  return (
    <>
      <Header />
      <Todo>
        <Main />
      </Todo>
    </>
  )
}
