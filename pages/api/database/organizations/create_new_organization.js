import { mongo_connect } from "../../../../lib/mongodb/mongo_connect";
import { find_duplicate_organization } from "../../../../lib/organizations/find_duplicate_organization";
import { check_user } from "../../../../lib/users/check_user";
import { find } from "../../models/usersModel";

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
		// CHECK USER OWNERSHIP
		////////////////////////////////
		if (user.organization_owner !== false) {
			////////////////////////////////
			// JOIN ORGANIZATION
			////////////////////////////////

			// check if not to join the same organization

		} else {
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
						////////////////////////////////
						// CREATE ORGANIZATION
						////////////////////////////////
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
		}

		////////////////////////////////
		// CHECK USER TRUE / FALSE
		////////////////////////////////

		if (user.userExists) {
		////////////////////////////////
		// USER TRUE
		// SET ORGANIZATION_OWNER TRUE
		////////////////////////////////
		
		const actual_user = await find({email: user.email})

		

		}

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
