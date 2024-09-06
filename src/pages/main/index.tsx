import React from 'react'

import { Todo } from '@component/createTodo'
import { ListOfItems } from '@component/listOfItems'

export const MainPage = () => {
  return (
    <>
      <Todo>
        <ListOfItems />
      </Todo>
    </>
  )
}
