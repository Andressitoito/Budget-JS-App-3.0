import { useDispatch, useSelector } from "react-redux";
import { toggleModalNewTransaction } from "../../features/modals/modalNewTransaction";
import HelperButtons from "../helpers/helperButtons";
import BaseButton from "../interaction/Base-button";
import NewTransaction from "../modals/newTransaction";
import TransactionList from "../transactions/transactionList";
import CategoryBalance from "./categoryBalance";
import CategoryBaseAmount from "./categoryBaseAmount";
import CategoryCurrentBudget from "./categoryCurrentBudget";
import CategoryName from "./categoryName";

const CategoryDetails = () => {
	const { modalNewTransaction } = useSelector((state) => state);

	const dispatch = useDispatch();

	const handleClickNewTransaction = () => {
		dispatch(toggleModalNewTransaction());
	};

	return (
		<div
			className="bg-msk-500 flex flex-col gap-3 justify-center 
  bg-gradient-to-b rounded-md pt-2 pb-2 px-2"
		>
			<CategoryName />
			<div>
				<CategoryCurrentBudget />
				<CategoryBaseAmount />
				<CategoryBalance />
			</div>
			<div>
				<BaseButton
					text={"New Transaction"}
					success
					p_xl
					onClick={() => {
						handleClickNewTransaction();
					}}
				/>
			</div>
			{modalNewTransaction && <NewTransaction />}



<HelperButtons/>


			<TransactionList />
		</div>
	);
};

export default CategoryDetails;


/* 
All UI panels done

Make all UI panels for transactions, with their own modals, and redux states.

*/