import { ListOfItems } from '@component/listofitems'
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
