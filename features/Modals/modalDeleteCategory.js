import { createSlice } from "@reduxjs/toolkit";

const initialState = false

const modalDeleteCategorySlice = createSlice({
 name: 'modalDeleteCategory',
 initialState: initialState,
 reducers:{
  toggleModalDeleteCategory: (state) =>{
   return !state
  }
 }
})

export const {toggleModalDeleteCategory} = modalDeleteCategorySlice.actions

export default modalDeleteCategorySlice.reducer