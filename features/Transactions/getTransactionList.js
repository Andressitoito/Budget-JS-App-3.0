import { createSlice } from "@reduxjs/toolkit";

const initialState = null

const getTransactionListSlice = createSlice({
 name: 'getTransactionList',
 initialState: initialState,
 reducers: {
  getTransactionListbyId: async (state, action) => {

   // const _id = action.payload._id

   /* 
   const response = await fetch( request for transaction list by id)

   const data = response.json()
  
   */

   const transactionList = [
    {
     _id: "637fddc7b5985ce228c25984",
     _id_organization: "637fddc7b5985ce228c25984",
     category: "culo",
     item: "q221342134",
     price: 1234123,
     date: "2022-11-24T03:00:00.000Z"
    },
    {
     _id: "6380bad817f10e2eb4598c9b",
     _id_organization: "637fddc7b5985ce228c25984",
     category: "culo",
     item: "updatesd idtema",
     price: 156345,
     date: "2022-11-24T03:00:00.000Z"
    },
    {
     _id: "6380bad817f10e2eb4598c9b",
     _id_organization: "637fddc7b5985ce228c25984",
     category: "culo",
     item: "updatesd idtema",
     price: 156345,
     date: "2022-11-24T03:00:00.000Z"
    }
   ]


   return transactionList

  }
 }
})

export const { getTransactionListbyId } = getTransactionListSlice.actions

export default getTransactionListSlice.reducer