import { mongo_connect } from "../../../../lib/mongodb/mongo_connect";
import { find_duplicates_and_create_organization } from "../../../../lib/organizations/find_duplicates_and _create_organization";
import { update_organization_member } from "../../../../lib/organizations/update_organization_member";
import { create_new_user } from "../../../../lib/users/create_new_user";
import { update_user_ownership } from "../../../../lib/users/update_user_ownership";

const User = require("../../models/usersModel");

async function handler(req, res) {
	if (req.method === "POST") {
		////////////////////////////////
		// DECLARE GLOBAL VARIABLES
		////////////////////////////////
		let { organization, user: user_info, authorization_token } = req.body;

		////////////////////////////////
		// CHECK AUTHORIZATION TOKEN
		////////////////////////////////
		try {
			let authorized_token = "Кулокулитокартошкин";

			if (authorization_token !== authorized_token) {
				throw new Error(
					"Oops! It seems like the token you've entered is invalid. Please double-check the token and try again. If you continue to have issues, please contact our support team for assistance. Thank you!"
				);
			}
		} catch (error) {
			return res.status(401).json({
				status: 401,
				message: "Authorization token denied",
				error: error.toString(),
			});
		}

		organization = organization.trim();
		let saved_organization;
		let saved_user;
		let new_organization_id;
		let new_organization;
		let user;

		////////////////////////////////
		// CONNECT TO THE DATABASE
		////////////////////////////////
		await mongo_connect();

		////////////////////////////////
		// CHECK CONDITIONALLY ROUTING
		////////////////////////////////
		const actual_data = await User.findOne({ email: user_info.email });

		if (actual_data === null) {
			user = user_info;
			user.organization_owner = "none";
		} else {
			user = actual_data;
		}

		if (user_info.userExists === true) {
			if (user.organization_owner !== "none") {
				////////////////////////////////
				// USER TRUE
				////////////////////////////////
				// ORGANIZATION_OWNER TRUE
				////////////////////////////////
				// REJECT USER
				// REDIRECT TO JOIN ORGANIZATION
				////////////////////////////////
				return res.status(403).json({
					status: 403,
					redirect_join_organization: true,
					error: `Sorry ${user.name}, but each user can only create one organization. If you'd like to make changes to your existing organization, please log in and make the necessary updates.`,
				});
			} else {
				////////////////////////////////
				// USER TRUE
				////////////////////////////////
				// ORGANIZATION_OWNER FALSE
				// CREATE ORGANIZATION
				////////////////////////////////

				////////////////////////////////
				// FIND DUPLICATES ORGANIZATIONS
				// & CREATE	NEW ORGANIZATION
				////////////////////////////////
				try {
					new_organization = await find_duplicates_and_create_organization(
						organization
					);

					const { saved_organization: saved_org, new_organization_id: new_org_id } =
						new_organization;

					saved_organization = saved_org;
					new_organization_id = new_org_id;

					console.log(new_organization);
				} catch (error) {
					return res.status(403).json({
						status: 403,
						message: "Something went wrong with duplicates",
						error: error.toString(),
					});
				}
				////////////////////////////////
				// UPDATE USER OWNERSHIP
				////////////////////////////////
				try {
					saved_user = await update_user_ownership(
						user._id,
						organization,
						new_organization_id
					);
				} catch (error) {
					return res.status(500).json({
						status: 500,
						message: "Error updating ownership",
						error: error.toString(),
					});
				}
				////////////////////////////////
				// UPDATE ORGANIZATION MEMBER
				////////////////////////////////
				try {
					saved_organization = await update_organization_member(
						saved_user.id,
						saved_user.name,
						new_organization_id
					);
				} catch (error) {
					return res.status(500).json({
						status: 500,
						message: "Error updating organization member",
						error: error.toString(),
					});
				}
				////////////////////////////////
				// SEND RESPONSE
				// USER AND ORGANIZATION
				////////////////////////////////
				return res.status(201).json({
					status: 201,
					message: `Organization ${organization} and User ${user.name} has been successfully created and saved`,
					user: saved_user,
					organization: saved_organization,
				});
			}
		} else {
			////////////////////////////////
			// USER FALSE
			////////////////////////////////
			// ORGANIZATION_OWNER NONE
			// CREATE ORGANIZATION
			////////////////////////////////

			////////////////////////////////
			// FIND DUPLICATES ORGANIZATIONS
			// & CREATE	NEW ORGANIZATION
			////////////////////////////////
			try {
				new_organization = await find_duplicates_and_create_organization(
					organization
				);

				const { saved_organization: saved_org, new_organization_id: new_org_id } =
					new_organization;

				saved_organization = saved_org;
				new_organization_id = new_org_id;

				console.log(new_organization_id);
			} catch (error) {
				return res.status(403).json({
					status: 403,
					message: "Possible duplicates or type errors",
					error: error.toString(),
				});
			}

			////////////////////////////////
			// CREATE	NEW USER
			////////////////////////////////
			try {
				saved_user = await create_new_user(user, new_organization_id, organization);
			} catch (error) {
				return res.status(422).json({
					status: 422,
					message: "There was a problem creating a new user",
					error: error.toString(),
				});
			}
			////////////////////////////////
			// UPDATE USER OWNERSHIP
			////////////////////////////////
			try {
				saved_user = await update_user_ownership(
					saved_user._id,
					organization,
					new_organization_id
				);
			} catch (error) {
				return res.status(500).json({
					status: 500,
					message: "Error updating ownership",
					error: error.toString(),
				});
			}
			////////////////////////////////
			// UPDATE ORGANIZATION MEMBER
			////////////////////////////////
			try {
				const isNewOrganization = true;

				saved_organization = await update_organization_member(
					saved_user.id,
					saved_user.name,
					new_organization_id,
					isNewOrganization
				);
			} catch (error) {
				return res.status(422).json({
					status: 422,
					message:
						"Error updating organization member, check the provided organizatoin_id",
					error: error.toString(),
				});
			}
			////////////////////////////////
			// SEND RESPONSE
			// USER AND ORGANIZATION
			////////////////////////////////
			return res.status(201).json({
				status: 201,
				message: `Organization ${organization} and User ${user.name} has been successfully created and saved`,
				user: saved_user,
				organization: saved_organization,
			});
		}
	}
}

export default handler;
