import { Dispatch, SetStateAction } from 'react'

import { IComponents } from '@component/createTodo/interfaces'

export interface IListOfItems {
  components?: IComponents[]
  setComponents?: Dispatch<SetStateAction<IComponents[]>>
  setInputValue?: Dispatch<SetStateAction<string>>
  onEdit?: () => void
  setTodoId?: Dispatch<SetStateAction<number | undefined>>
}
