import { createSlice } from '@reduxjs/toolkit';

const languageSlice = createSlice({
  name: 'language',
  initialState: '',
  reducers: {
    filterLanguage: (_state: string = '', action: { payload: string }) => action.payload
  }
})

export const { filterLanguage } = languageSlice.actions
export default languageSlice
