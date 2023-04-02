import { useSelector } from "react-redux";
import { setNumberColor } from "../../lib/utils/set_number_color";

const CategoryBalance = ({ currentCategoryBaseAmount }) => {
	const { getTransactionList } = useSelector((state) => state);

	const currentSpend = getTransactionList?.reduce((acc, transaction) => {
		return transaction.price + acc;
	}, 0);

	const balance = parseInt(currentCategoryBaseAmount) - parseInt(currentSpend);

	return (
		<div className="bg-msk-800 m-auto max-w-[80%] flex rounded-md p-1">
			<p
				className={`${setNumberColor(
					balance
				)} bg-msk-300 w-auto txt-msk-90  py-2 px-4 text-5xl mx-auto rounded-md overflow-x-auto overflow-y-hidden`}
			>
				{(balance && balance) || 0}
			</p>
		</div>
	);
};

export default CategoryBalance;
