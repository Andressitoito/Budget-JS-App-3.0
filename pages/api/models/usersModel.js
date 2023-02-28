const mongoose = require("mongoose");
const validate = require("mongoose-validator");
mongoose.set("debug", true);

const urlValidator = [
	validate({
		validator: "isURL",
		message: "Please enter a valid URL",
	}),
];

const emailValidator = [
	validate({
		validator: "isEmail",
		message: "Please enter a valid email address",
	}),
];

const userSchema = new mongoose.Schema({
	organization_id: {
		type: String,
		required: [true, "An organization ID is required"],
		trim: true,
	},
	name: {
		type: String,
		required: [true, "An user must have a name"],
		trim: true,
	},
	given_name: {
		type: String,
		required: [true, "An user must have a first name"],
		trim: true,
	},
	family_name: {
		type: String,
		required: [true, "An user must have a last name"],
		trim: true,
	},
	picture: {
		type: String,
		required: true,
		validate: urlValidator,
	},
	email: {
		type: String,
		required: true,
		validate: emailValidator,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
