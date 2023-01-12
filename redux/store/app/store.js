import { configureStore } from "@reduxjs/toolkit";
import modalDeleteAllTransactionsSlice from "../../../features/modals/modalDeleteAllTransactionsSlice";
import modalEditBaseAmountSlice from "../../../features/modals/modalEditeBaseAmount";
import modalEditcategoryNameSlice from "../../../features/modals/modalEditcategoryNameSlice";
import modalNewTransaction from "../../../features/modals/modalNewTransaction";
import modalAddNewCategory from "../../../features/modals/modalAddNewCategory";
import modalEditTransaction from "../../../features/modals/modalEditTransacton";
import modalDeleteTransaction from "../../../features/modals/modalDeleteTransaction";

const store = configureStore({
	reducer: {
		modalDeleteAllTransactions: modalDeleteAllTransactionsSlice,
		modalEditCategoryName: modalEditcategoryNameSlice,
		modalEditBaseAmount: modalEditBaseAmountSlice,
		modalNewTransaction: modalNewTransaction,
		modalAddNewCategory: modalAddNewCategory,
		modalEditTransaction: modalEditTransaction,
		modalDeleteTransaction: modalDeleteTransaction
	},
});

export { store };
