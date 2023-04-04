import { update_category_base_amount } from "../../../../lib/categories/update_category_base_amount";
import { mongo_connect } from "../../../../lib/mongodb/mongo_connect";

async function handler(req, res) {
	////////////////////////////////
	// DECLARE GLOBAL VARIABLES
	////////////////////////////////
	const { category_id, new_base_amount } = req.body;
	let updated_category;

	////////////////////////////////
	// CONNECT TO THE DATABASE
	////////////////////////////////
	await mongo_connect();

	////////////////////////////////
	// UPDATE CATEGORY BASE AMOUNT
	////////////////////////////////
	try {
		updated_category = await update_category_base_amount(
			category_id,
			new_base_amount
		);
	} catch (error) {
		return res.status(422).json({
			status: 422,
			message: "Something went wrong updating category base amount",
			error: error.toString(),
		});
	}

	////////////////////////////////
	// SEND RESPONSE
	////////////////////////////////
	res.status(200).json({
		status: 200,
		message: "Base amount updated successfully",
		updated_category,
	});
}

export default handler;
