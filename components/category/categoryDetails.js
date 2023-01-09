import BaseButton from "../interaction/Base-button";
import DeleteAllTransactions from "../modals/deleteAllTransactions";
import TransactionList from "../transactions/transactionList";
import CategoryBalance from "./categoryBalance";
import CategoryBaseAmount from "./categoryBaseAmount";
import CategoryCurrentBudget from "./categoryCurrentBudget";

const CategoryDetails = () => {
	return (
		<div
			className="bg-msk-500 flex flex-col gap-7 justify-center 
  bg-gradient-to-b rounded-md pt-5 pb-2"
		>
			<div>
				<CategoryCurrentBudget />
				<CategoryBaseAmount />
				<CategoryBalance />
			</div>
			<div>
				<BaseButton text={"New Item"} success />
			</div>
			{/* <TransactionList /> */}

   <DeleteAllTransactions/>
		</div>
	);
};

export default CategoryDetails;
