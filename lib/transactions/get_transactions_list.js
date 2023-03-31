const Transaction = require("../../pages/api/models/transactionModel");

export const get_transactions_list = async (category_id) => {
	try {
		console.log("category_id FROM GET TRANSACTION LIST", category_id)
		const transactions = await Transaction.find({ category_id: category_id })

		return transactions;
	} catch (error) {
		throw new Error(error);
	}
};
