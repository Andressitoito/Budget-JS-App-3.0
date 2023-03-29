const Transaction = require("../../pages/api/models/transactionModel");

export const create_transaction = async (transaction) => {
	const {
		category_id,
		organization_id,
		username,
		category_name,
		item,
		price,
		date,
	} = transaction;

	try {
		const transaction_toSave = await new Transaction({
			category_id,
			organization_id,
			username,
			category_name,
			item,
			price,
			date,
		});

		const saved_transaction = await transaction_toSave.save();

		return saved_transaction;
	} catch (error) {
		throw new Error(error);
	}
};

give a title and a description for a git commit, use words like, please expand a little bit the information to fill a good commit "bugs fixed, work in progress":

"Still working on the transaction creation route front y back."