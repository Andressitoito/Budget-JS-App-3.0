const Transaction = require("../../pages/api/models/transactionModel");

export const get_transactions_by_id = async (category_id) => {
	try {
		const transactions = await Transaction.find({ category_id: category_id })

		console.log('transactions: ', transactions)
		return transactions;
	} catch (error) {
		throw new Error(error);
	}
};
