import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

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
		toggleUser: (state) => {

			let saved_user_local = JSON.parse(localStorage.getItem("saved_user_local"));

			if (saved_user_local === null || saved_user_local === "null") {
				console.log("FROM REDUX not user saved");
				localStorage.setItem('saved_user_local', JSON.stringify(state))
			} else {
				console.log("FROM REDUX user saved");
				console.log(saved_user_local)
				localStorage.removeItem('saved_user_local')
			}


		},
	},
});

export const { signIn, signUp, logOut, toggleUser } = userSlice.actions;

export default userSlice.reducer;
