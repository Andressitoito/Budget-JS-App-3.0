import { update_category_name } from "../../../../lib/categories/update_category_name";
import { mongo_connect } from "../../../../lib/mongodb/mongo_connect";

async function handler(req, res) {
	////////////////////////////////
	// DECLARE GLOBAL VARIABLES
	////////////////////////////////
	const { category_id, newCategoryName } = req.body;

	let updated_category;

	////////////////////////////////
	// CONNECT TO THE DATABASE
	////////////////////////////////
	await mongo_connect();

	// //////////////////////////////
	// UPDATE CATEGORY NAME
	// //////////////////////////////
	try {
		updated_category = await update_category_name(category_id, newCategoryName );
	} catch (error) {
		return res.status(422).json({
			status: 422,
			message: "Something went wrong updating category name",
			error: error.toString(),
		});
	}

	////////////////////////////////
	// SEND RESPONSE
	// CATEGORY
	////////////////////////////////
	res.status(200).json({
		status: 200,
		message: `Category: ${updated_category.category_name} was successfully updated`,
		updated_category: updated_category,
	});
}

export default handler;
