import { create_new_user } from "../../../../lib/users/create_new_user";
import { find_organization_by_id } from "../../../../lib/organizations/find_organization_by_id";
import { mongo_connect } from "../../../../lib/mongodb/mongo_connect";
import { save_new_user } from "../../../../lib/users/save_new_user";
import { find_user_by_email } from "../../../../lib/users/find_user_by_email";

const User = require("../../models/usersModel");
const Organization = require("../../models/organizationModel");

async function handler(req, res) {
	if (req.method === "POST") {
		////////////////////////////////
		// DECLARE GLOBAL VARIABLES
		////////////////////////////////
		const { organization_id, user } = req.body;

		let saved_user;
		let organization
		let new_user_toSave

		////////////////////////////////
		// CONNECT TO THE DATABASE
		////////////////////////////////
		await mongo_connect();

		////////////////////////////////
		// FIND USER BY EMAIL
		////////////////////////////////
		try {
			await find_user_by_email(user.email, res);
		} catch (error) {
			return res.status(401).json({
				status: 401,
				error: error.toString(),
			});
		}

		////////////////////////////////
		// FIND ORGANIZATION BY ID
		////////////////////////////////
		try {
			organization = await find_organization_by_id(organization_id)
			console.log('This is organization', organization)
		} catch (error) {
			return res.status(422).json({
				status: 422,
				error: error.toString(),
			});
		}

		////////////////////////////////
		// DEFINE USER PATH TRUE / FALSE
		////////////////////////////////
		if (user.organization_owner) {
			////////////////////////////////
			// PATH USER TRUE
			////////////////////
			console.log('This is an OWNER')

		} else {
			////////////////////////////////
			// PATH USER FALSE
			////////////////////
			console.log('This is NOT an OWNER')


			////////////////////////////////
			// CREATE AND SAVE NEW USER
			////////////////////////////////
			saved_user = await create_new_user(user, organization_id, organization, res);

		}

		////////////////////////////////
		// SEND RESPONSE
		// USER
		////////////////////////////////
		res.status(201).json({
			status: 201,
			message: `New user ${user.name} has been successfully created and saved`,
			user: saved_user,
		});
	}
}

export default handler;


			////////////////////////////////
			// STOP ORGANIZATION CREATION
			// BY OWNERSHIP

// return res.status(401).json({
// 	status: 401,
// 	message: 'An user cant create more than 1 (one) organization',
// 	org_data: {
// 		user: user.name,
// 		oganization: user.organization_owner
// 	}
// })