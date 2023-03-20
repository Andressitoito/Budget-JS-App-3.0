import { Result } from "postcss";

const User = require("../../pages/api/models/usersModel");
const Organization = require("../../pages/api/models/organizationModel");

export const update_user_guest_organization = async (_id, organization_id) => {
	try {
		const organizationData = await Organization.findById({
			_id: organization_id,
		});
		const userData = await User.findOne({ _id: _id });

		let user_guest_organization = userData.guest_organizations.some(
			(org) => org._id.toString() === organization_id
		);

		if (user_guest_organization === false) {

			const { organization } = organizationData;
			let saved_user = await User.findByIdAndUpdate(
				{ _id: _id },
				{
					$push: {
						guest_organizations: {
							_id: organization_id,
							organization: organization,
						},
					},
				}
			);

			return { saved_user, organization };
		} else {
			throw new Error("This user already is in this organization");
		}
	} catch (error) {
		throw new Error(error);
	}
};
