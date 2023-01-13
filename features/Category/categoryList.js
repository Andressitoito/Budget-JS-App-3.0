import { createSlice } from "@reduxjs/toolkit";

const initialState = null

const categoryListSlice = createSlice({
 name: 'categoryList',
 initialState: initialState,
 reducers: {
  updateCategoryListState: (state, action) => {
   return action.payload
  }
 }
})

export const { updateCategoryListState } = categoryListSlice.actions

export default categoryListSlice.reducer