import { configureStore } from "@reduxjs/toolkit";
import modalDeleteAllTransactionsSlice from "../../../features/modalDeleteAllTransactionsSlice/modalDeleteAllTransactionsSlice";

const store = configureStore({
	reducer: {
		modalDeleteAllTransactions: modalDeleteAllTransactionsSlice
	},
});

export { store };
