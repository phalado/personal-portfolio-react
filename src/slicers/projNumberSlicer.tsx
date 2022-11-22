import { createSlice } from '@reduxjs/toolkit';

const projNumberSlice = createSlice({
  name: 'projNumber',
  initialState: 0,
  reducers: {
    changeIndex: (_state: number = 0, action: { payload: number }) => action.payload
  }
})

export const { changeIndex } = projNumberSlice.actions
export default projNumberSlice
