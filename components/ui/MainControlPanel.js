import BaseButton from "../interaction/Base-button";
import CategoryList from "../category/category-list";
import CategoryDetails from "../category/categoryDetails";
import CategoryActions from "../category/categoryActions";
import { useDispatch, useSelector } from "react-redux";
import { toggleModalAddNewCategory } from "../../features/Modals/modalAddNewCategory";
import AddNewCategory from "../modals/addNewCategory";
import { useState, useEffect } from "react";
import { getAllCategories } from "../../utils/helpers/categories/getAllCategories";
import { setCategoryData } from "../../features/Category/categoryData";

const MainControlPanel = () => {
	const { modalAddNewCategory, user } = useSelector((state) => state);

	const dispatch = useDispatch();

	useEffect(() => {
		let category_List;
		(async () => {
			category_List = await getAllCategories("6418e62930a356ee6570ffb0");
			console.log(category_List);
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

/*

				<BaseButton text={"Add category"} xs />

this button allows the user to create a new category

				<CategoryList />

the data from this component is taken from the database.

				<CategoryActions />

from here we can make diffenrent actions on the current category, so we need to send to it the proper id for the current category to take the desired action

			<CategoryDetails/>

will show all data when one indiviual category button is clicked.

it will take the data from the redux state.

the redux state will be atualized in the first load with the data of the actual button selected.



*/
