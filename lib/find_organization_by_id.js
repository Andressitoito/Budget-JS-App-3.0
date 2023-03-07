const Organization = require("../pages/api/models/organizationModel");

export const find_organization_by_id = async (organization_id) => {
	try {
		const organizations = await Organization.find();

		console.log(organizations);

		const isOrganization = organizations.some(
			(org) => org.organization_id === organization_id
		);

		console.log(isOrganization);
	} catch (error) {
		return res.status(422).json({
			status: 422,
			message: "The provided Organization ID is incorrect or invalid",
			error: error.toString()
		});
	}
};
