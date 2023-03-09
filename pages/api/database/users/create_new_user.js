import { create_new_user } from "../../../../lib/users/create_new_user";
import { find_organization_by_id } from "../../../../lib/organizations/find_organization_by_id";
import { mongo_connect } from "../../../../lib/mongodb/mongo_connect";
import { save_new_user } from "../../../../lib/users/save_new_user";

const User = require("../../models/usersModel");
const Organization = require("../../models/organizationModel");

async function handler(req, res) {
	if (req.method === "POST") {
		////////////////////////////////
		// DECLARE GLOBAL VARIABLES
		////////////////////////////////
		const { organization_id, user } = req.body;

		console.log(organization_id);
		console.log(user);

		let saved_user;
		let organization
		let new_user_toSave
		////////////////////////////////
		// CONNECT TO THE DATABASE
		////////////////////////////////
		await mongo_connect();

		////////////////////////////////
		// FIND USER BY ID
		////////////////////////////////
		const isUser = await User.findOne({ email: user.email })

		if (isUser !== null) {
			return res.status(401).json({
				status: 401,
				message: 'This user already exists',
			})
		}
		////////////////////////////////
		// FIND ORGANIZATION BY ID
		////////////////////////////////
		organization = await find_organization_by_id(organization_id)

		////////////////////////////////
		// DEFINE USER PATH TRUE / FALSE
		////////////////////////////////
		if (user.organization_owner) {
			////////////////////////////////
			// PATH USER TRUE
			////////////////////////////////
			console.log('This is an OWNER')
			console.log(user.organization_owner)

		} else {
			////////////////////////////////
			// PATH USER FALSE
			////////////////////////////////

			console.log('This is NOT an OWNER')


			////////////////////////////////
			// CREATE AND SAVE NEW USER
			////////////////////////////////
			saved_user = await create_new_user(user, organization_id, organization, res);

		}

		a new database folder was created, to separate better and have a better reading of all api routes calls. Also the migration to a new structure in users and organization is in progress. Fin some bugs with the unitary function who needs to be fixed and some were fixed
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
