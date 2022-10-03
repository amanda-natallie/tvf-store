import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IGetProductsResponse, IProduct, IProductsState } from 'store/types'

const initialState: IProductsState = {
  products: [],
  currentProduct: undefined,
}

export const productsSlice = createSlice({
  initialState,
  name: 'productsSlice',
  reducers: {
    setProducts: (state, action: PayloadAction<IGetProductsResponse>) => {
      state.products = action.payload.products
    },
    setCurrentProduct: (state, action: PayloadAction<IProduct>) => {
      state.currentProduct = action.payload
    },
  },
})

export default productsSlice.reducer

export const { setProducts, setCurrentProduct } = productsSlice.actions
