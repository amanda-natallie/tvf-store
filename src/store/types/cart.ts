import { IProductVariant } from './products'

export type ICartProduct = {
  id: number
  idVariant: number
  title: string
  price: number
  variant: string
  quantity: number
}

export interface ICartState {
  products?: ICartProduct[]
}
