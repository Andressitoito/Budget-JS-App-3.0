import { configureStore } from "@reduxjs/toolkit";
import modalDeleteAllTransactionsSlice from "../../../features/Modals/modalDeleteAllTransactionsSlice";
import modalEditBaseAmountSlice from "../../../features/Modals/modalEditeBaseAmount";
import modalEditcategoryNameSlice from "../../../features/Modals/modalEditcategoryNameSlice";
import modalNewTransaction from "../../../features/Modals/modalNewTransaction";
import modalAddNewCategory from "../../../features/Modals/modalAddNewCategory";
import modalEditTransaction from "../../../features/Modals/modalEditTransacton";
import modalDeleteTransaction from "../../../features/Modals/modalDeleteTransaction";
import modalDeleteCategory from "../../../features/Modals/modalDeleteCategory";
import organizationData from "../../../features/auth/organizationData";
import categoryList from "../../../features/Category/categoryList";
import currentCategory from "../../../features/Category/currentCategory";
import categoryData from "../../../features/Category/categoryData";
import getTransactionList from "../../../features/Transactions/getTransactionList";
import notifications from "../../../features/Notifications/notifications";
import localUser from "../../../features/auth/localUser";
import user from "../../../features/auth/user";

const store = configureStore({
	reducer: {
		modalDeleteAllTransactions: modalDeleteAllTransactionsSlice,
		modalEditCategoryName: modalEditcategoryNameSlice,
		modalEditBaseAmount: modalEditBaseAmountSlice,
		modalNewTransaction: modalNewTransaction,
		modalAddNewCategory: modalAddNewCategory,
		modalEditTransaction: modalEditTransaction,
		modalDeleteTransaction: modalDeleteTransaction,
		modalDeleteCategory: modalDeleteCategory,
		organizationData: organizationData,
		categoryData: categoryData,
		categoryList: categoryList,
		currentCategory: currentCategory,
		getTransactionList: getTransactionList,
		notifications: notifications,
		localUser: localUser,
		user: user,
	},
});

export { store };
