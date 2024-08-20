import { Header } from '@component/header'
import { ListOfItems } from '@component/listofitems'
import { Todo } from '@component/todo'
import React from 'react'

export const MainPage = () => {
  return (
    <>
      <Header />
      <Todo>
        <ListOfItems />
      </Todo>
    </>
  )
}
