import { useSelector } from "react-redux";

const CategoryCurrentBudget = () => {
	const { getTransactionList } = useSelector((state) => state);

	const currentSpend = getTransactionList?.reduce((acc, transaction) => {
		return transaction.price + acc;
	}, 0);

	return (
		<div className="bg-msk-800 m-auto max-w-[80%] flex rounded-md p-1">
			<p className="bg-msk-300 w-auto txt-msk-90 px-2 text-5xl mx-auto rounded-md overflow-x-auto overflow-y-hidden">
				{currentSpend}
			</p>
		</div>
	);
};

export default CategoryCurrentBudget;
