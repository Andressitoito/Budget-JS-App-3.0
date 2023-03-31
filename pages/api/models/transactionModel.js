const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
	category_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Category",
		required: [true, "A transaction must have a category ref ID"],
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
});

module.exports =
	mongoose.models.Transaction ||
	mongoose.model("Transaction", transactionSchema);
