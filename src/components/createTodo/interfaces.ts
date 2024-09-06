import { ReactElement } from 'react'

import { IListOfItems } from '@component/listOfItems/interfaces'

export interface ITodo {
  children?: ReactElement<IListOfItems> | ReactElement<IListOfItems>[]
}
export interface IComponents {
  id: number
  text: string
  selected: boolean
}
