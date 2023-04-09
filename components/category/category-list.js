import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryData } from "../../features/Category/categoryData";
import { getAllCategories } from "../../lib/categories/getAllCategories";
import CategoryItem from "./categoryItem";

const CategoryList = () => {
	const { categoryData, organizationData } = useSelector((state) => state);
	const dispatch = useDispatch();

	const { currentOrganization_id } = organizationData;
	useEffect(() => {
		let category_List;
		(async () => {
			category_List = await getAllCategories(currentOrganization_id);
			dispatch(setCategoryData(category_List));
		})();
	}, [currentOrganization_id]);

	return (
		<section className="mt-2 flex flex-col gap-2 w-40">
			{categoryData?.categoryData?.map((category) => (
				<CategoryItem
					key={category._id}
					_id={category._id}
					category_name={category.category_name}
				/>
			))}
		</section>
	);
};

export default CategoryList;


give a title and a description for a git commit, this was a very intense work, use words like 'user updated, bugs were fixed': 

at the moment there is a lot going on, a big ongoing work on many levels:

- category list not refreshing with the actual organization id, fixed
- protecting routes /home to avoid bad loadConfig
- create new redux states to use reuse the organization selection UI from the Signin
- ongoing work with save user in local Storage
