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
