const Transaction = require("../../pages/api/models/transactionModel");
const Category = require("../../pages/api/models/categoryModel");

export const get_sum_all_transactions = async (organization_id) => {
	try {
		let transactions = await Transaction.find({
			organization_id: organization_id,
		});
		let remaining_from_transactions = 0;
		let sum_spent = transactions.reduce((acc, transaction) => {
			if (transaction.price < 0) {
				remaining_from_transactions += transaction.price;
				return (acc += 0);
			}
			return (acc += transaction.price);
		}, 0);

		let sum_bases = await Category.find({ category: organization_id });

		sum_bases = sum_bases.reduce((acc, bases) => {
			return (acc += bases.base_amount);
		}, 0);

		console.log("SUM REMAINING_TRANSACTIONS ", remaining_from_transactions);
		console.log("SUM BASES ", sum_bases);

		console.log("SUM TRANSACTIONS ", sum_spent);

		let main_budget = -remaining_from_transactions + sum_bases
		console.log(main_budget)

		return sum_spent;
	} catch (error) {
		throw new Error(error);
	}
};
