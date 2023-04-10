import { useDispatch, useSelector } from "react-redux";
import { getTransactionListbyId } from "../../features/Transactions/getTransactionList";
import { setCurrentCategory } from "../../features/Category/categoryData";

const CategoryItem = (props) => {
	const { category_name, _id } = props;

	const { categoryData } = useSelector((state) => state);
	const dispatch = useDispatch();

	const handleClickSetCurrentCategory = async () => {
		const selectedCategory = categoryData.categoryData.find(
			(category) => category._id === _id
		);

		const category_id = _id
		const response = await fetch("/api/database/transactions/get_transactions_list", {
			method: "POST",
			body: JSON.stringify({ category_id }),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();

		dispatch(setCurrentCategory(selectedCategory));
		dispatch(getTransactionListbyId(data.transactions));
	};

	const shortName = (longName) => {
		return longName.substring(0, 12)
	}

	return (
		<button
			className="bg-msk-700 py-0.5 rounded-md ring-1 ring-violet-700"
			onClick={handleClickSetCurrentCategory}
		>
			<div
				className="select-none px-2 md:py-1 py-2 my-1 relative
   bg-blue-500 text-xl md:text-lg
   ring-1 ring-gray-900/3 rounded-md 
   leading-none flex justify-center uppercase txt-msk-200 font-bold text-ellipsis overflow-hidden truncate
			
			transform
			transition delay-50 duration-500 ease-in-out hover:bg-blue-700 hover:scale-110 
			"
			>
				{shortName(category_name)}
			</div>
		</button>
	);
};

export default CategoryItem;
