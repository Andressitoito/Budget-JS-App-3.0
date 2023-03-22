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
	_id: {
		type: mongoose.Schema.Types.ObjectId,
	},
	organization_id: {
		type: String,
		default: 'none'
	},
	organization_owner: {
		type: String,
		required: [true, "Ownership must be defined"],
		default: "none",
	},
	guest_organizations: [
		{
			_id: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "Organization",
			},
			organization: {
				type: String,
				required: [false, "An organization name must be provided"],
			},
			required: false
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
		get: function (createdAt) {
			const options = {
				day: "numeric",
				month: "numeric",
				year: "numeric",
				timeZone: "America/Buenos_Aires",
				hour12: false,
			};
			return createdAt.toLocaleDateString("es-AR", options);
		},
	},
	lastLogin: {
		type: Date,
		default: Date.now(),
	},
});

userSchema.pre("save", function (next) {
	this.lastLogin = new Date();
	next();
});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
