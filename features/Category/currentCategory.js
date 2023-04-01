import { createSlice } from "@reduxjs/toolkit";

const initialState = null

const currentCategorySlice = createSlice({
 name: 'currentCategory',
 initialState: initialState,
 reducers: {
  setCurrentCategory: (state, action) => {
   return  state = action.payload
  }
 }
})

export const { setCurrentCategory } = currentCategorySlice.actions

export default currentCategorySlice.reducer