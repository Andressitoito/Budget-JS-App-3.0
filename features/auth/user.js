import { createSlice } from "@reduxjs/toolkit";

const initialState = null

const userSlice = createSlice({
 name: 'user',
 initialState: initialState,
 reducers: {
  signUp: (state, action) => {
   console.log('FROM ACTION', action.payload)
   return action.payload
  },
  signIn:(state, action) => {
   return state = action.payload
  },
  logOut: (state, action) => {

  },
  user_status: (state, action) => {

  }
  
 }

})

export const { signIn, signUp } = userSlice.actions

export default userSlice.reducer

