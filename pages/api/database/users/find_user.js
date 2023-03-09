import { mongo_connect } from "../../../../lib/mongodb/mongo_connect";

const User = require("../../models/usersModel");

async function handler(req, res) {
	if (req.method === "POST") {
		////////////////////////////////
		// DECLARE GLOBAL VARIABLES
		////////////////////////////////
		// const { email } = req.body;

		let user;

		let email = 'max@max.com'

		////////////////////////////////
		// CONNECT TO THE DATABASE
		////////////////////////////////
		await mongo_connect();

		////////////////////////////////
		// FIND USER
		////////////////////////////////
		try {
			user = await User.findOne({ email: email });

			console.log(user);

			if (user) {

				let user_props = {
					organization_owner: user.organization_owner,
				}

				res.status(200).json({
					status: 200,
					message: `Find user successfully`,
					user: user
				})
			} else {
				res.status(422).json({
					status: 422,
					message: `User email`,
					user: user
				})
			}



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
