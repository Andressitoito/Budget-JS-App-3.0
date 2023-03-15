import { createSlice } from "@reduxjs/toolkit";

const initialState = null

const userSlice = createSlice({
 name: 'user',
 initialState: initialState,
 reducers: {
  signIn: (state, action) => {
   console.log('FROM ACTION', action.payload)
   return action.payload
  },
  logOut: (state, action) => {

  },
  user_status: (state, action) => {

  }

 }

})

export const { signIn } = userSlice.actions

export default userSlice.reducer

