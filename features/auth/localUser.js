import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	localUserState: false,
	organization_list_data: {},
	remember_user: false,
};

const localUserSlice = createSlice({
	name: "localUser",
	initialState: initialState,
	reducers: {
		updateLocalData: (state, action) => {
			state.organization_list_data = action.payload;
			return state;
		},
		updateState: (state, action) => {
			state.localUserState = action.payload;
			return state;
		},
		toggleUser: (state, action) => {
			let saved_user_local = JSON.parse(localStorage.getItem("saved_user_local"));

			if (saved_user_local === null || saved_user_local === "null") {
				localStorage.setItem("saved_user_local", JSON.stringify(action.payload));

				saved_user_local = JSON.parse(localStorage.getItem("saved_user_local"));

				state.remember_user = !state.remember_user;
			} else {
				localStorage.removeItem("saved_user_local");
				state.remember_user = !state.remember_user;
			}

			return state;
		},
	},
});

export const { updateLocalData, updateState, toggleUser } =
	localUserSlice.actions;

export default localUserSlice.reducer;

// document.cookie = `userLoggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/user`;
// document.cookie = `userLoggedIn=userLoggedTrue; expires=${expires.toUTCString()} path=/user`;
