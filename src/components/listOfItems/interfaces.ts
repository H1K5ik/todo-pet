import { IComponents } from '@component/todo/interfaces'
import { Dispatch, SetStateAction } from 'react'

export interface IListOfItems {
  components?: IComponents[]
  setComponents?: Dispatch<SetStateAction<IComponents[]>>
  setInputValue?: Dispatch<SetStateAction<string>>
  onEdit?: () => void
  setTodoId?: Dispatch<SetStateAction<number | undefined>>
}
