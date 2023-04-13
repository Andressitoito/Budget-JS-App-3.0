import { createSlice } from "@reduxjs/toolkit";

const initialState = null

const userSlice = createSlice({
	name: "user",
	initialState: initialState,
	reducers: {
		signUp: (state, action) => {
			return (state = action.payload);
		},
		signIn: (state, action) => {
			return (state = action.payload);
		},
		logOut: (state) => {
			return (state = null);
		},
	
	},
});

export const { signIn, signUp, logOut } = userSlice.actions;

export default userSlice.reducer;
