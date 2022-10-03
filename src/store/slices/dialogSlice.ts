import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IDialogState, IDialogInfo } from 'store/types'

const initialState: IDialogState = {
  info: {
    title: '',
    subtitle: '',
  },
  isOpen: false,
}

export const dialogSlice = createSlice({
  initialState,
  name: 'dialogSlice',
  reducers: {
    setDialogInfo: (state, action: PayloadAction<IDialogInfo>) => {
      state.info = action.payload
    },
    setDialogOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload
    },
    resetDialogInfo: state => {
      state.info = initialState.info
    },
  },
})

export default dialogSlice.reducer

export const { setDialogInfo, setDialogOpen, resetDialogInfo } = dialogSlice.actions
