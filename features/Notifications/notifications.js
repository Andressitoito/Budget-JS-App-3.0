import { createSlice } from "@reduxjs/toolkit";


const initialState = {
	show: false,
	message: '',
	status: '',
};

const notificationsSlice = createSlice({
	name: "notifications",
	initialState: initialState,
	reducers: {
		showNotification: (state, action) => {
			state.show = action.payload.show
			state.message = action.payload.message;
			state.status = action.payload.status;
		},
	},
});

export const { showNotification } = notificationsSlice.actions;

export default notificationsSlice.reducer;

// are these two ways to write this the same?

// setNotification(state, action) {
// 	state.message = action.payload.message;
// 	state.status = action.payload.status;
// },

// setNotification(state, action) {
// 	const notification = {
// 		message: action.payload.message,
// 		status: action.payload.status
// 	}

// 	return notification
// },

