import { IListOfItems } from '@component/listOfItems/interfaces'
import { ReactElement } from 'react'

export interface ITodo {
  children?: ReactElement<IListOfItems> | ReactElement<IListOfItems>[]
}
export interface IComponents {
  id: number
  text: string
  selected: boolean
}
