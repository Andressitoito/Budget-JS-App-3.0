import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	localUserState: false,
	organization_list_data: {},
};

const localUserSlice = createSlice({
	name: "localUser",
	initialState: initialState,
	reducers: {
		updateLocalData: (state, action) => {
			state.organization_list_data = action.payload;

			return state;
		},
		updateState: (state) => {
			state.localUserState = !state.localUserState;
			return state;
		},
	},
});

export const { updateLocalUserState, updateLocalData, updateState } =
	localUserSlice.actions;

export default localUserSlice.reducer;

// document.cookie = `userLoggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/user`;
// document.cookie = `userLoggedIn=userLoggedTrue; expires=${expires.toUTCString()} path=/user`;
