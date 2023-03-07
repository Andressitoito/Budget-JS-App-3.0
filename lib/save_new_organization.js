const Organization = require("../pages/api/models/organizationModel");

export const save_new_organization = async () => {
	let new_organization;
	let saved_organization;
	let organization;
	let new_organization_id;
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
};
