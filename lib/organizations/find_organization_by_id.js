const Organization = require("../../pages/api/models/organizationModel");

export const find_organization_by_id = async (organization_id) => {
	const organizations = await Organization.find();
	console.log(organizations);

	const isOrganization = organizations.some(
		(org) => org.organization_id === organization_id
	);
	console.log('THIS IS ORGANIZATIONS', isOrganization);
	if (isOrganization === undefined) {
		return isOrganization.organization;
	} else {
		throw new Error("The provided Organization ID is incorrect or invalid");
	}
};
