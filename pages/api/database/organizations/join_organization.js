import { mongo_connect } from "../../../../lib/mongodb/mongo_connect";
import { check_organization_ownership } from "../../../../lib/organizations/check_organization_ownership";
import { find_organization_by_id } from "../../../../lib/organizations/find_organization_by_id";
import { update_organization_member } from "../../../../lib/organizations/update_organization_member";
import { update_user_guest_organization } from "../../../../lib/users/update_user_guest_organizations";
const User = require("../../models/usersModel");

async function handler(req, res) {
	if (req.method === "POST") {
		////////////////////////////////
		// DECLARE GLOBAL VARIABLES
		////////////////////////////////
		const { user: user_info, organization_id } = req.body;

		let saved_user;
		let organization;
		let saved_organization;
		let user;
		////////////////////////////////
		// CONNECT TO THE DATABASE
		////////////////////////////////
		await mongo_connect();

		// 64169adff67f63df33f7a886

		////////////////////////////////
		// CHECK CONDITIONALLY ROUTING
		////////////////////////////////
		const actual_data = await User.findOne({ email: user_info.email });

		if (actual_data === null) {
			user = user_info;
			user.organization_owner = "none";
		} else {
			const { organization_owner: org_owner } = actual_data;

			user = {
				...user_info,
				organization_owner: org_owner,
			};
		}
		////////////////////////////////
		// CHECK ORGANIZATION ID
		////////////////////////////////
		try {
			await find_organization_by_id(organization_id);
		} catch (error) {
			return res.status(422).json({
    status:422,
    message: 'Wrong id validator',
    error: error.toString()
   });
		}

		if (user.userExists === true) {
			////////////////////////////////
			// USER TRUE
			////////////////////////////////
			// JOIN ORGANIZATION
			////////////////////////////////

			////////////////////////////////
			// CHECK ORGANIZATION OWNERSHIP
			////////////////////////////////
			try {
				await check_organization_ownership(
					organization_id,
					user.organization_owner
				);
			} catch (error) {
				return res.status(401).json({
					status: 401,
					message: "Forbidden attempt",
					error: error.toString(),
				});
			}
			////////////////////////////////
			// UPDATE USER GUEST_ORGANIZATION
			////////////////////////////////
			try {
				let updated_user = await update_user_guest_organization(
					actual_data._id,
					organization_id
				);
				saved_user = updated_user.saved_user;
				organization = updated_user.organization;
			} catch (error) {
				return res.status(422).json({
					status: 422,
					message: "Something went wrong updating user",
					error: error.toString(),
				});
			}

			// ////////////////////////////////
			// // UPDATE ORGANIZATION MEMBER
			// ////////////////////////////////
			// try {
			// 	saved_organization = await update_organization_member(
			// 		user._id,
			// 		user.name,
			// 		organization_id
			// 	);

			// 	console.log(saved_organization);
			// } catch (error) {
			// 	return res.status(422).json({
			// 		status: 422,
			// 		message:
			// 			"Error updating organization member, check the provided organizatoin_id",
			// 		error: error.toString(),
			// 	});
			// }

			// //////////////////////////////
			// SEND RESPONSE
			// USER AND ORGANIZATION
			// //////////////////////////////
			res.status(201).json({
				status: 201,
				message: `The user ${user.name} has successfully joined to the ${organization} organization`,
				user: saved_user,
				organization: saved_organization,
			});
		} else {
			////////////////////////////////
			// USER FALSE
			////////////////////////////////
			// CREATE NEW USER
			// JOIN ORGANIZATION
			////////////////////////////////
			////////////////////////////////
			// CREATE	NEW USER
			////////////////////////////////
			////////////////////////////////
			// UPDATE USER GUEST_ORGANIZATION
			////////////////////////////////
			////////////////////////////////
			// UPDATE ORGANIZATION MEMBER
			////////////////////////////////
			////////////////////////////////
			// SEND RESPONSE
			// USER AND ORGANIZATION
			////////////////////////////////
		}
	}
}

export default handler;


