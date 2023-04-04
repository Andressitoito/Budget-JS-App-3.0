import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	showModalDeleteTransaction: false,
	transaction_id: null,
	transaction_item: null,
};

const modalDeleteTransactionSlice = createSlice({
	name: "modalDeleteTransaction",
	initialState: initialState,
	reducers: {
		toggleModalDeleteTransaction: (state, action) => {
			const {_id, item} = action.payload
			state.showModalDeleteTransaction = !state.showModalDeleteTransaction;
			state.transaction_id = _id;
			state.transaction_item = item
		},
	},
});

export const { toggleModalDeleteTransaction } =
	modalDeleteTransactionSlice.actions;

export default modalDeleteTransactionSlice.reducer;
