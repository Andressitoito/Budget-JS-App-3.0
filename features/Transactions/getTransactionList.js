import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const getTransactionListSlice = createSlice({
	name: "getTransactionList",
	initialState: initialState,
	reducers: {
		getTransactionListbyId: (state, action) => {
			return (state = action.payload);
		},
	},
});

export const { getTransactionListbyId } = getTransactionListSlice.actions;

export default getTransactionListSlice.reducer;
