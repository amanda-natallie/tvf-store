import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IGetProductsResponse, IProductsState } from 'store/types'

const initialState: IProductsState = {
  products: [],
  loading: false,
  error: '',
}

export const productsSlice = createSlice({
  initialState,
  name: 'productsSlice',
  reducers: {
    setFetchingProducts: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setProducts: (state, action: PayloadAction<IGetProductsResponse>) => {
      state.products = action.payload.products
    },
  },
})

export default productsSlice.reducer

export const { setFetchingProducts, setProducts } = productsSlice.actions
