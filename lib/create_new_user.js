const User = require("../pages/api/models/usersModel");

export const create_new_user = async (user, organization_id) => {
	try {
		let new_user = {
			...user,
		};
		console.log("ORGANIZATION_ID ", organization_id);
		console.log("NEW USER ", new_user);

		const { name, given_name, family_name, picture, email } = new_user;

		let new_user_toSave = await new User({
			name,
			given_name,
			family_name,
			picture,
			email,
			organization_id,
		});

		console.log("NEW USER TO SAVE ", new_user_toSave);

		return (saved_user = await new_user_toSave.save());
	} catch (error) {
		return res.status(500).json({
			status: 500,
			message: `There was a problem in the process of creating and saving a new user`,
			error: error.toString(),
		});
	}
};
