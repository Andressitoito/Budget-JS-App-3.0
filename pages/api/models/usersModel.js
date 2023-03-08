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
		type: mongoose.Schema.Types.ObjectId,
		ref: "Organization",
		required: [true, "An organization ID is required"],
	},
	organization_owner: {
		type: String,
		required: [true, "Ownership must be defined"],
		default: false,
	},
	guest_organizations: [
		{
			type: mongoose.Schema.Typer.ObjectId,
			ref: "Organization",
		},
	],
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
