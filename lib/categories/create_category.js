const Category = require("../../pages/api/models/categoryModel");

export const create_category = async (category) => {
	const { category_name, organization_id } = category;

	let saved_category;

	try {
		let new_category = await new Category({
			category_name,
			organization_id,
		});

		return saved_category = await new_category.save();
	} catch (error) {
		return res.status(422).json({
			status: 422,
			message: "There was a problem creating a new category",
			error: error.toString(),
		});
	}
};
