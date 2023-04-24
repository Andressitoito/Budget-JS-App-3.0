const Transaction = require("../../pages/api/models/transactionModel");

export const get_all_transactions = async (organization_id) => {
	try {
		let transactions = await Transaction.find({ organization_id: organization_id });

  
		return transactions.price;
	} catch (error) {
		throw new Error(error);
	}
};
