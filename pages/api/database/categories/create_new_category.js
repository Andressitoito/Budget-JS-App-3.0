import { create_new_category } from "../../../../lib/create_new_category";
import { mongo_connect } from "../../../../lib/mongo_connect";

async function handler(req, res) {
	if (req.method === "POST") {
		////////////////////////////////
		// DECLARE GLOBAL VARIABLES
		////////////////////////////////
		const { category } = req.body;
		console.log(category);

		let saved_category;

		////////////////////////////////
		// CONNECT TO THE DATABASE
		////////////////////////////////
		await mongo_connect();

		////////////////////////////////
		// CREATE NEW CATEGORY
		////////////////////////////////
		saved_category = await create_new_category(category);

		////////////////////////////////
		// SEND RESPONSE
		// CATEGORY
		////////////////////////////////
  res.status(201).json({
   status: 201,
   message: `Category: ${category.category_name} was successfully created and saved`,
   category: saved_category
  })
	}
}

export default handler;
