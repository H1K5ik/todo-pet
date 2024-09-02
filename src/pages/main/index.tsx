import { ListOfItems } from '@component/listOfItems'
import { Todo } from '@component/todo'
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
