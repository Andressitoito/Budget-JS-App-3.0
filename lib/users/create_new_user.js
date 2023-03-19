const User = require("../../pages/api/models/usersModel");
const mongoose = require('mongoose')

export const create_new_user = async (user, organization_id, organization) => {
	try {
		let new_user = {
			...user,
			organization_owner: organization,
		};
		const { name, given_name, family_name, picture, email, organization_owner } =
			new_user;

			let new_user_to_save = await new User({
				_id: new mongoose.Types.ObjectId(),
				organization_id,
				organization_owner,
				name,
				given_name,
				family_name,
				picture,
				email,
			});
			console.log("new_user_to_save ", new_user_to_save)	
			
		let saved_user = await new_user_to_save.save();
		console.log("SAVED_USER: ", saved_user);

		return saved_user;
	} catch (error) {
		throw new Error(`There was a problem in the process of creating a new user: ${error.toString()}`);
	}
};