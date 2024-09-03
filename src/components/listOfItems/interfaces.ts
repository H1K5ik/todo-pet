import { IComponents } from '@component/todo/interfaces'

export interface IListOfItems {
  components?: IComponents[]
  setComponents?: React.Dispatch<React.SetStateAction<IComponents[]>>
  setInputValue?: React.Dispatch<React.SetStateAction<string>>
  onEdit?: () => void
  setTodoId?: React.Dispatch<React.SetStateAction<number | undefined>>
}
