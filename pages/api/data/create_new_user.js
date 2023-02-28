import { mongo_connect } from "../../../lib/mongo_connect";

const User = require("../models/usersModel");
const Organization = require("../models/organizationModel");

async function handler(req, res) {
	if (req.method === "POST") {
		////////////////////////////////
		// DECLARE GLOBAL VARIABLES
		////////////////////////////////
		const { organization_id, user } = req.body;

		console.log(organization_id);
		console.log(user);

		// const organization_id = "63fcf35baa8a76f2c87ed547";
		// const user = "Diego";

		let saved_user;
		let valid_organization_id;

		////////////////////////////////
		// CONNECT TO THE DATABASE
		////////////////////////////////
		try {
			await mongo_connect();
		} catch (error) {
			return res.status(500).json({
				status: 500,
				message: "Error connecting to the database",
				error: error.toString(),
			});
		}

		////////////////////////////////
		// FIND ORGANIZATION BY ID
		////////////////////////////////
		try {
			await Organization.findById(organization_id);
		} catch (error) {
			return res.status(422).json({
				status: 422,
				message: `The provided Organization ID is invalid`,
				error: error.toString(),
			});
		}

		////////////////////////////////
		// CREATE AND SAVE NEW USER
		////////////////////////////////
		try {
			let new_user = {
				...user,
			};
			console.log("ORGANIZATION_ID ", organization_id);
			console.log("NEW USER ", new_user);

			const { name, given_name, family_name, picture, email } = new_user;

			let new_user_toSave = await new User({
				name,
				given_name,
				family_name,
				picture,
				email,
				organization_id,
			});

			console.log("NEW USER TO SAVE ", new_user_toSave);

			saved_user = await new_user_toSave.save();
		} catch (error) {
			return res.status(500).json({
				status: 500,
				message: `There was a problem in the process of creating and saving a new user`,
				error: error.toString(),
			});
		}

		////////////////////////////////
		// SEND RESPONSE
		// USER
		////////////////////////////////
		res.status(201).json({
   status: 201,
   message: `New user ${user.name} has been successfully created and saved`,
   user: saved_user
  });
	}
}

export default handler;
