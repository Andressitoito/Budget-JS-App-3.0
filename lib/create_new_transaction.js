const Transaction = require("../pages/api/models/transactionModel");

export const create_new_transaction = async (transaction) => {
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
		return res.status(422).json({
			status: 422,
			message: "There was a problem creating and saving a new transaction",
			error: error.toString(),
		});
	}
};
