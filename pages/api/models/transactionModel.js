const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
	category_id: {
		type: String,
		required: [true, "A transaction must have a category ID"],
		trim: true,
	},
	category_name: {
		type: String,
		required: [true, "A transaction must have a category name"],
		trim: true,
	},
	organization_id: {
		type: String,
		required: [true, "A transaction must have an organization ID"],
		trim: true,
	},
	username: {
		type: String,
		required: [true, "A transaction must have an username"],
		trim: true,
	},
	item: {
		type: String,
		required: [true, "A transaction must have a item name or description"],
		trim: true,
	},
	price: {
		type: Number,
		required: [true, "A transaction must have a price"],
		trim: true,
	},
	date: {
		type: Date,
		default: Date.now(),
	},
	category: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Category",
		required: [true, "A transaction must have a category"],
	},
});

module.exports =
	mongoose.models.Transaction ||
	mongoose.model("Transaction", transactionSchema);
