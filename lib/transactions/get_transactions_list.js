import ButtonGroup from "flowbite-react/lib/esm/components/Button/ButtonGroup";

const Transaction = require("../../pages/api/models/transactionModel");

export const get_transactions_list = async (category_id) => {
	try {
		const transactions = await Transaction.find({ category_id: category_id });
		return transactions;
	} catch (error) {
		throw new Error(error);
	}
};
