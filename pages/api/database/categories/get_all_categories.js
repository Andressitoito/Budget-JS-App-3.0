import { get_all_categories } from "../../../../lib/categories/get_all_categories";

async function handler(req, res) {
	if (req.method === "POST") {
		////////////////////////////////
		// DECLARE GLOBAL VARIABLES
		////////////////////////////////
		const { organization_id } = req.body;
		console.log("ENTRO A ROUTE CATEGORIES ", req.body);

		let categoriesArray;

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