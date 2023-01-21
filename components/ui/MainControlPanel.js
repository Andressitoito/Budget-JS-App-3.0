import BaseButton from "../interaction/Base-button";
import CategoryList from "../category/category-list";
import CategoryDetails from "../category/categoryDetails";
import CategoryActions from "../category/categoryActions";
import { useDispatch, useSelector } from "react-redux";
import { toggleModalAddNewCategory } from "../../features/modals/modalAddNewCategory";
import AddNewCategory from "../modals/addNewCategory";

const MainControlPanel = () => {
	const { modalAddNewCategory } = useSelector((state) => state);

	const dispatch = useDispatch();

	const DUMMY_DATA_FROM_REDUXSTATE = [
		{
			_id: "637fddc7b5985ce228c25984",
			_id_organization: "637fddc7b5985ce228c25984",
			categoryName: "Food",
			baseAmount: 21231,
			transactions: [{}],
		},
	];

	/* 
	FROM DATABASE REQUEST

	find: _id_organization (from redux)

	get all categories

{
	_id: "234refdsdew25t",
	categoryName: "example"
}
*/

	const DUMMY_DATA_CATEGORY_LIST = [
		{
			_id: "637fddc7b5985ce21231228c25984",
			_id_category: "637fddc7b5985ceaswqd228c25984",
			_id_organization: "637fddc7b5985ce228ec259842",
			categoryName: "Food",
			baseAmount: 21231,
			transactions: [{}],
		},
		{
			_id: "637fddc7b5985ce22312328c25984",
			_id_category: "637fddc7b5985casde2eqw28c25984",
			_id_organization: "637fddc7b5985ce22e8c2598423",
			categoryName: "Dates",
			baseAmount: 111231,
			transactions: [{}],
		},
		{
			_id: "637fddc7b5985ce228c231225984",
			_id_category: "637fddc7b5985ceweasd228c25984",
			_id_organization: "637fddc7b5985cee228c25984123",
			categoryName: "Extra",
			baseAmount: 12331,
			transactions: [{}],
		},
	];

	const categoryNameList = DUMMY_DATA_CATEGORY_LIST.map(category => (
		{
			_id: category._id_category,
			categoryName: category.categoryName
		}))

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
				{modalAddNewCategory && <AddNewCategory />}

				{/* <AddNewCategory /> */}
				<CategoryList categoryNameList={categoryNameList} />
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
