import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const getTransactionListSlice = createSlice({
	name: "getTransactionList",
	initialState: initialState,
	reducers: {
		getTransactionListbyId: (state, action) => {
			const { transactions, category_id } = action.payload;

			console.log("/////REDUX///////////////////");
			console.log(action.payload);
			console.log(transactions);
			console.log(category_id);
			// return (state = action.payload);
			return (state = transactions);
		},
	},
});

export const { getTransactionListbyId } = getTransactionListSlice.actions;

export default getTransactionListSlice.reducer;
