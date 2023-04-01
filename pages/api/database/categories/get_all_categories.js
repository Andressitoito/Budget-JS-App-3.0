import { get_all_categories } from "../../../../lib/categories/get_all_categories";
import { mongo_connect } from "../../../../lib/mongodb/mongo_connect";

async function handler(req, res) {
	if (req.method === "POST") {
		////////////////////////////////
		// DECLARE GLOBAL VARIABLES
		////////////////////////////////
		const { organization_id } = req.body;
		console.log("ENTRO A ROUTE CATEGORIES ");

		let categoriesArray;

		////////////////////////////////
		// CONNECT TO THE DATABASE
		////////////////////////////////
		await mongo_connect();

		////////////////////////////////
		// GET ARRAY OF CATEGORIES
		////////////////////////////////
		try {
			categoriesArray = await get_all_categories(organization_id);
		} catch (error) {
			return res.status(500).json({
				status: 500,
				message: "Something went wrong",
				error: error.toString(),
			});
		}

		////////////////////////////////
		// SEND RESPONSE
		////////////////////////////////
		res.status(200).json({
			status: 200,
			message: "Get array of categories successfully",
			categoriesArray,
		});
	}
}

export default handler;