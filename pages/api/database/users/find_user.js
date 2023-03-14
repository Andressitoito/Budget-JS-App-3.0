import { mongo_connect } from "../../../../lib/mongodb/mongo_connect";
import { check_user } from "../../../../lib/users/check_user";

const User = require("../../models/usersModel");

async function handler(req, res) {
	if (req.method === "POST") {
		////////////////////////////////
		// DECLARE GLOBAL VARIABLES
		////////////////////////////////
		const { email } = req.body;

		////////////////////////////////
		// CONNECT TO THE DATABASE
		////////////////////////////////
		await mongo_connect();

		////////////////////////////////
		// FIND USER
		////////////////////////////////
		try {
			const user_info = await check_user(email)

			////////////////////////////////
			// SEND RESPONSE
			////////////////////////////////
			return res.status(200).json({
				status: 200,
				user_info
			});
		} catch (error) {
			return res.status(422).json({
				status: 422,
				message: `There was an error searching for ${email}`,
				error: error.toString(),
			});
		}
	}
}

export default handler;
