const mongoose = require("mongoose");

const organizationSchema = new mongoose.Schema({
	organization: {
		type: String,
		required: [true, "An organization must have a name"],
		unique: true,
		trim: true,
	},
});

module.exports =
	mongoose.models.Organization ||
	mongoose.model("Organization", organizationSchema);
