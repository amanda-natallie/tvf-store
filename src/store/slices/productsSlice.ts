import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IGetProductsResponse, IProductsState } from 'store/types'

const initialState: IProductsState = {
  products: [],
}

export const productsSlice = createSlice({
  initialState,
  name: 'productsSlice',
  reducers: {
    setProducts: (state, action: PayloadAction<IGetProductsResponse>) => {
      state.products = action.payload.products
    },
  },
})

export default productsSlice.reducer

export const { setProducts } = productsSlice.actions
