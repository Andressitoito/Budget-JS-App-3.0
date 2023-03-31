const Transaction = require("../../pages/api/models/transactionModel");
const mongoose = require('mongoose')

export const create_transaction = async (transaction) => {
	const {
		category_id,
		organization_id,
		username,
		item,
		price,
	} = transaction;

	const category_id_object = mongoose.Types.ObjectId(category_id)

	try {
		const transaction_toSave = await new Transaction({
			category_id,
			organization_id,
			username,
			item,
			price,
		});

		const saved_transaction = await transaction_toSave.save();

		return saved_transaction;
	} catch (error) {
		throw new Error(error);
	}
};
