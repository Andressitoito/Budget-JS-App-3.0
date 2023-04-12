import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleModalNewTransaction } from "../../features/Modals/modalNewTransaction";
import BaseButton from "../interaction/Base-button";
import NewTransaction from "../modals/newTransaction";
import TransactionList from "../transactions/transactionList";
import CategoryBalance from "./categoryBalance";
import CategoryBaseAmount from "./categoryBaseAmount";
import CategoryCurrentBudget from "./categoryCurrentBudget";
import CategoryName from "./categoryName";

const CategoryDetails = () => {
	const { modalNewTransaction, categoryData } = useSelector((state) => state);

	const dispatch = useDispatch();

	
	const { currentCategory } = categoryData
	useEffect(()=> {
			}, [currentCategory])

	const handleClickNewTransaction = () => {
		dispatch(toggleModalNewTransaction());
	};

	return (
		<div
			className="bg-msk-500 flex flex-col gap-3 justify-center 
  bg-gradient-to-b rounded-md pt-2 pb-2 px-2"
		>
			<CategoryName category_name={currentCategory?.category_name} />
			<div className="flex flex-col">
				<CategoryBalance currentCategoryBaseAmount={currentCategory?.base_amount} />
				<CategoryCurrentBudget />
				<CategoryBaseAmount base_amount={currentCategory?.base_amount} />
			</div>
			<div>
				<BaseButton
					text={"New Transaction"}
					disabled={currentCategory === null}
					success
					p_xl
					onClick={() => {
						handleClickNewTransaction();
					}}
				/>
			</div>
			{modalNewTransaction && <NewTransaction />}

			<TransactionList />
		</div>
	);
};

export default CategoryDetails;
