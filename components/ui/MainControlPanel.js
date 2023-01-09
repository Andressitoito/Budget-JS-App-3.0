import BaseButton from "../interaction/Base-button";
import CategoryList from "../category/category-list";
import CategoryDetails from "../category/categoryDetails";
import CategoryActions from "../category/categoryActions";

const MainControlPanel = () => {
	const DUMMY_DATA_FROM_REDUXSTATE = [
		{
			_id: "637fddc7b5985ce228c25984",
			_id_organization: "637fddc7b5985ce228c25984",
			categoryName: "Food",
			baseAmount: 21231,
			transactions: [{}],
		},
	];

	const DUMMY_DATA_FROM_CATEGORY = [
		{
			_id: "637fddc7b5985ce228c25984",
			_id_organization: "637fddc7b5985ce228c25984",
			categoryName: "Food",
			baseAmount: 21231,
			transactions: [{}],
		},
		{
			_id: "637fddc7b5985ce228c25984",
			_id_organization: "637fddc7b5985ce228c25984",
			categoryName: "Dates",
			baseAmount: 111231,
			transactions: [{}],
		},
		{
			_id: "637fddc7b5985ce228c25984",
			_id_organization: "637fddc7b5985ce228c25984",
			categoryName: "Extra",
			baseAmount: 12331,
			transactions: [{}],
		},
	];

	return (
		<section className="relative bg-msk-600 w-80  mx-auto p-2 rounded-md">
			<div className="absolute top-5 left-[-100px]">
				<BaseButton text={"Add category"} xs />
				<CategoryList />
			</div>

			<div className="absolute top-5 right-[-120px]">
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
