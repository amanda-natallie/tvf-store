import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICartState } from 'store/types'

const initialState: ICartState = {
  products: undefined,
}

export const cartSlice = createSlice({
  initialState,
  name: 'cartSlice',
  reducers: {
    setCartProducts: (state, action: PayloadAction<ICartState>) => {
      state.products = action.payload.products
    },
  },
})

export default cartSlice.reducer

export const { setCartProducts } = cartSlice.actions
