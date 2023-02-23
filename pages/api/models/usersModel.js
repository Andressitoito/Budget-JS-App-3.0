const mongoose = require("mongoose");
const validate = require("mongoose-validator");

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
	name: {
		type: String,
		required: [true, "A user must have a name"],
		trim: true,
	},
	given_name: {
		type: String,
		required: [true, "A user must hace a first name"],
		trim: true,
	},
	family_name: {
		type: String,
		required: [true, "A user must hace a last name"],
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
});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);

