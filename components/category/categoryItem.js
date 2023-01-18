import { useDispatch, useSelector } from "react-redux";
import { setCurrentCategory } from "../../features/Category/currentCategory";
import { getTransactionListbyId } from "../../features/Transactions/getTransactionList";

const CategoryItem = (props) => {
	const { categoryName, _id } = props;

	const { categoryList } = useSelector((state) => state)
	const dispatch = useDispatch()

	const handleClickSetCurrentCategory = () => {
		const selectedCategory = categoryList.find(category => category._id === _id)

		dispatch(setCurrentCategory(selectedCategory))
		dispatch(getTransactionListbyId())
	}

	return (
		<button className="bg-msk-700 py-0.5 rounded-md ring-1 ring-violet-700"
			onClick={handleClickSetCurrentCategory}
		>

			<div
				className="px-2 py-1.5 my-1 relative
   bg-blue-500 text-xl md:text-lg
   ring-1 ring-gray-900/3 rounded-md 
   leading-none flex justify-center uppercase txt-msk-200 font-bold"
			>
				{categoryName}
			</div>
		</button>
	);
};

export default CategoryItem;
