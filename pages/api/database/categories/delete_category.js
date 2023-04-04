import { delete_category } from "../../../../lib/categories/delete_category";
import { mongo_connect } from "../../../../lib/mongodb/mongo_connect";

async function handler(req, res) {
	if (req.method === "DELETE") {
		////////////////////////////////
		// DECLARE GLOBAL VARIABLES
		////////////////////////////////
		const { category_data } = req.body;
		const { category_id, category_name } = category_data;

		let deleted_category;
		////////////////////////////////
		// CONNECT TO THE DATABASE
		////////////////////////////////
		await mongo_connect();

		////////////////////////////////
		// DELETE CATEGORY
		////////////////////////////////
		try {
			deleted_category = await delete_category(category_id);
		} catch (error) {
			return res.status(422).json({
				status: 422,
				message: "Something went wrong deleting category",
				error: error.toString(),
			});
		}

		////////////////////////////////
		// SEND RESPONSE
		////////////////////////////////
		res.status(200).json({
			status: 200,
			message: `Category ${category_name}, with ${deleted_category} transactions, were successfully deleted`,
		});
	}
}

export default handler;
