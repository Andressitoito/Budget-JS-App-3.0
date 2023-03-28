import { mongo_connect } from "../../../../lib/mongo_connect";

const {
	create_new_transaction,
} = require("../../../../lib/create_new_transaction");

async function handler(req, res) {
	if (req.method === "POST") {
		////////////////////////////////
		// DECLARE GLOBAL VARIABLES
		////////////////////////////////
		const { transaction } = req.body;

		console.log(transaction)

		let saved_transaction;

		////////////////////////////////
		// CONNECT TO THE DATABASE
		////////////////////////////////
		await mongo_connect();

		////////////////////////////////
		// CREATE NEW TRANSACTION
		////////////////////////////////
		saved_transaction = await create_new_transaction(transaction);

		////////////////////////////////
		// SEND RESPONSE
		// TRANSACTION
		////////////////////////////////
		res.status(201).json({
			status: 201,
			message: "The transaction was successfully created",
			new_transaction: saved_transaction,
		});
	}
}

export default handler