import { createSlice } from "@reduxjs/toolkit";

const initialState = false

const modalDeleteTransactionSlice = createSlice({
 name: 'modalDeleteTransaction',
 initialState: initialState,
 reducers:{
  toggleModalDeleteTransaction: (state) =>{
   return !state
  }
 }
})

export const {toggleModalDeleteTransaction} = modalDeleteTransactionSlice.actions

export default modalDeleteTransactionSlice.reducer