import { createSlice } from "@reduxjs/toolkit";

const initialState = null

const getTransactionListSlice = createSlice({
 name: 'getTransactionList',
 initialState: initialState,
 reducers: {
  getTransactionListbyId: (state, action) => {

   // const _id = action.payload._id

   // GET TRANSACTION 
   // BY ID OF CATEGORY
   // 'by default same _id would have same 
   //  CATEGORY NAME'

   /* 
   const response = await fetch( request for transaction list by id)

   const data = response.json()
  
   */

   const transactionList = [
    {
     _id: "637fddc7b5985ce228c25984",
     _id_category: "637fddc7b5985ce228c25984",
     _id_organization: "637fddc7b5985ce228c13225984",
     username: 'Andrew',
     category: "culo",
     item: "compras multinacionales ",
     price: 400,
     date: "2022-11-24T03:00:00.000Z"
    },
    {
     _id: "6380bad817f10e2eb4598c9b",
     _id_category: "637fddc7b5985ce228c25984",
     _id_organization: "637fddc7b5985ce228c13225984",
     username: 'Looker',
     category: "culo",
     item: "higienic paper",
     price: 300,
     date: "2022-11-24T03:00:00.000Z"
    },
    {
     _id: "6380bad817f4310e2eb4598c9b",
     _id_category: "637fddc7b5985ce228c25984",
     _id_organization: "637fddc7b5985ce228c13225984",
     username: 'Andrew',
     category: "culo",
     item: "potatoes",
     price: 200,
     date: "2022-11-24T03:00:00.000Z"
    }
   ]


   return transactionList

  }
 }
})

export const { getTransactionListbyId } = getTransactionListSlice.actions

export default getTransactionListSlice.reducer