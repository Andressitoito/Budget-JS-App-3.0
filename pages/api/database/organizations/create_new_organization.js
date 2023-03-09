import { find_duplicate_organization } from "../../../../lib/find_duplicate_organization";
import { mongo_connect } from "../../../../lib/mongo_connect";
const User = require("../../models/usersModel");
const Organization = require("../../models/organizationModel");

async function handler(req, res) {
	if (req.method === "POST") {
		////////////////////////////////
		// DECLARE GLOBAL VARIABLES
		////////////////////////////////
		const { organization, user } = req.body;

		console.log("ORGANIZATION: ", organization);
		console.log("USER: ", user);

		let saved_organization;
		let saved_user;
		let new_organization_id;
		let new_organization;

		////////////////////////////////
		// CONNECT TO THE DATABASE
		////////////////////////////////
		await mongo_connect();

		////////////////////////////////
		// FIND DUPLICATES ORGANIZATIONS
		// AND CREATE	NEW ORGANIZATION
		////////////////////////////////
		try {
			const isOrganization = await find_duplicate_organization(organization);

			console.log("IS ORGANIZATION: ", isOrganization);

			if (isOrganization) {
				return res.status(422).json({
					status: 422,
					message: `The organization ${organization} already exists`,
				});
			} else {
				try {
					new_organization = await new Organization({
						organization: organization,
					});
					saved_organization = await new_organization.save();
					console.log(saved_organization);
					new_organization_id = saved_organization.id;
					console.log(new_organization_id);
				} catch (error) {
					return res.status(500).json({
						status: 500,
						message: `There was a problem saving a new organization ${organization}`,
						error: error.toString(),
					});
				}
			}
		} catch (error) {
			return res.status(500).json({
				status: 500,
				message: `There was a problem in the process of creating and saving a new organization ${organization}`,
				error: error.toString(),
			});
		}

		////////////////////////////////
		// CREATE AND SAVE NEW USER
		////////////////////////////////
		try {
			let new_user = {
				...user,
				organization_id: new_organization_id,
			};
			const { name, given_name, family_name, picture, email, organization_id } =
				new_user;
			console.log(new_user);

			let new_user_toSave = await new User({
				name,
				given_name,
				family_name,
				picture,
				email,
				organization_id,
			});

			saved_user = await new_user_toSave.save();
			console.log(saved_user);
		} catch (error) {
			return res.status(500).json({
				status: 500,
				message: "There was a problem in the process of creating a new user",
				error: error.toString(),
			});
		}

		////////////////////////////////
		// SEND RESPONSE
		// USER AND ORGANIZATION
		////////////////////////////////
		res.status(201).json({
			status: 201,
			message: `Organization ${organization} and User ${user.name} has been successfully created and saved`,
			user: saved_user,
			organization: saved_organization,
		});
	}
}

export default handler;
