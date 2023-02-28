const mongoose = require("mongoose");

const organizationSchema = new mongoose.Schema({
	organization: {
		type: String,
		required: [true, "An organization must have a name"],
		unique: true,
		trim: true,
	},
 createdAt: {
  type: Date,
  default: Date.now(),
 },
});

module.exports =
	mongoose.models.Organization ||
	mongoose.model("Organization", organizationSchema);
