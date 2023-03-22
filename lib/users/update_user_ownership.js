const User = require("../../pages/api/models/usersModel");

export const update_user_ownership = async (
	user_id,
	organization,
	new_organization_id
) => {
	try {
		const actual_user = await User.findOne({ _id: user_id });

		console.log(actual_user);
		console.log("new_organization_id ", new_organization_id);

		const updateUserData = {
			organization_id: new_organization_id,
			organization_owner: organization,
			lastLogin: Date.now(),
		};

		const updated_user = await User.findByIdAndUpdate(
			{ _id: actual_user._id },
			updateUserData,
			{ new: true }
		);

		let saved_user = updated_user;
		console.log("THIS IS SAVED_USER: ", saved_user);

		return saved_user;
	} catch (error) {
		throw new Error(
			`Something went wrong updating user ownership. ${error.toString()}`
		);
	}
};
