import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	showModalEditTransaction: false,
	transaction_id: null,
	transaction_item: null,
	transaction_price: null,
};

const modalEditTransactionSlice = createSlice({
	name: "modalEditTransaction",
	initialState: initialState,
	reducers: {
		toggleModalEditTransaction: (state, action) => {
			const { _id, item, price } = action.payload;
			state.showModalEditTransaction = !state.showModalEditTransaction;
			state.transaction_id = _id;
			state.transaction_item = item;
			state.transaction_price = price;
		},
	},
});

export const { toggleModalEditTransaction } = modalEditTransactionSlice.actions;

export default modalEditTransactionSlice.reducer;
