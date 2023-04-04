import BaseButton from "../interaction/Base-button";
import CategoryList from "../category/category-list";
import CategoryDetails from "../category/categoryDetails";
import CategoryActions from "../category/categoryActions";
import { useDispatch, useSelector } from "react-redux";
import { toggleModalAddNewCategory } from "../../features/Modals/modalAddNewCategory";
import AddNewCategory from "../modals/addNewCategory";
import { useEffect } from "react";
import { setCategoryData } from "../../features/Category/categoryData";
import { getAllCategories } from "../../lib/categories/getAllCategories";

const MainControlPanel = () => {
	const { modalAddNewCategory, user } = useSelector((state) => state);

	const dispatch = useDispatch();

	useEffect(() => {
		let category_List;
		(async () => {
			category_List = await getAllCategories("6418e62930a356ee6570ffb0");
			dispatch(setCategoryData(category_List));
		})();
	}, []);

	const handleClickAddNewCategory = () => {
		dispatch(toggleModalAddNewCategory());
	};

	return (
		<section className="relative bg-msk-600 w-2/3 mx-auto p-2 rounded-md">
			<div className="absolute top-7 left-[-100px]">
				<BaseButton
					text={"Add category"}
					xs
					onClick={() => {
						handleClickAddNewCategory();
					}}
				/>
				{modalAddNewCategory && (
					<AddNewCategory
						user_id={user._id}
						organization_id={user.organization_id}
					/>
				)}

				<CategoryList />
			</div>

			<div className="absolute top-7 right-[-120px]">
				<CategoryActions />
			</div>

			<CategoryDetails />
		</section>
	);
};

export default MainControlPanel;
