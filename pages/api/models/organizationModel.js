const mongoose = require("mongoose");
const { default: CategoryActions } = require("../../../components/category/categoryActions");

const organizationSchema = new mongoose.Schema({
	organization: {
		type: String,
		required: [true, "An organization must have a name"],
		unique: true,
		trim: true,
	},
	main_budget: {
		type: Number,
		required: [true, "An organization must have a main budget"],
		default: 0,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
	organization_owner: {
		type: String,
		required: [true, "An organization must have an owner"],
		default: "Unknown",
	},
	categories: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Category",
		},
	],
	users: [
		{
			_id: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
			},
			name: {
				type: String,
				required: [true, "An user must have a name"],
			},
		},
	],
});

module.exports =
	mongoose.models.Organization ||
	mongoose.model("Organization", organizationSchema);



	// const arrayOfCategories = await CategoryActions.find({ organization_id: organization_id }).populate("organization_id")