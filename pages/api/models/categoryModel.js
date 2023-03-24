const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
	category_name: {
		type: String,
		required: [true, "A category must have a name"],
		trim: true,
	},
	organization_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Organization",
	},
	base_amount: {
		type: Number,
		required: [true, "A category must have a base amount"],
		default: 0,
	},
	remaining_amount: {
		type: Number,
		required: [true, "A category must have a remaining amount"],
		default: 0,
	},
	transactions: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Transaction",
		},
	],
});

module.exports =
	mongoose.models.Category || mongoose.model("Category", categorySchema);
