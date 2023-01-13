import { configureStore } from "@reduxjs/toolkit";
import modalDeleteAllTransactionsSlice from "../../../features/modals/modalDeleteAllTransactionsSlice";
import modalEditBaseAmountSlice from "../../../features/modals/modalEditeBaseAmount";
import modalEditcategoryNameSlice from "../../../features/modals/modalEditcategoryNameSlice";
import modalNewTransaction from "../../../features/modals/modalNewTransaction";
import modalAddNewCategory from "../../../features/modals/modalAddNewCategory";
import modalEditTransaction from "../../../features/modals/modalEditTransacton";
import modalDeleteTransaction from "../../../features/modals/modalDeleteTransaction";
import organizationData from "../../../features/auth/organizationData";
import categoryList from "../../../features/Category/categoryList";
import currentCategory from "../../../features/Category/currentCategory";
import getTransactionList from "../../../features/Transactions/getTransactionList";

const store = configureStore({
	reducer: {
		modalDeleteAllTransactions: modalDeleteAllTransactionsSlice,
		modalEditCategoryName: modalEditcategoryNameSlice,
		modalEditBaseAmount: modalEditBaseAmountSlice,
		modalNewTransaction: modalNewTransaction,
		modalAddNewCategory: modalAddNewCategory,
		modalEditTransaction: modalEditTransaction,
		modalDeleteTransaction: modalDeleteTransaction,
		organizationData: organizationData,
		categoryList: categoryList,
		currentCategory: currentCategory,
		getTransactionList: getTransactionList
	},
});

export { store };
