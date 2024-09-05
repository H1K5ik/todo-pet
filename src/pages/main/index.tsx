import { Todo } from '@component/createTodo'
import { ListOfItems } from '@component/listOfItems'
import React from 'react'

export const MainPage = () => {
  return (
    <>
      <Todo>
        <ListOfItems />
      </Todo>
    </>
  )
}
