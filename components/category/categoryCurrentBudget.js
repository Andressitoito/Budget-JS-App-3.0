import { useSelector } from "react-redux";
import { setNumberColor } from "../../lib/utils/set_number_color";

const CategoryCurrentBudget = () => {
	const { getTransactionList } = useSelector((state) => state);

	const currentSpend = getTransactionList?.reduce((acc, transaction) => {
		return transaction.price + acc;
	}, 0);

	return (
		<div className="bg-msk-800 w-24 m-auto rounded-md p-1 mt-[-4px]">
			<p
				className={`${setNumberColor(
					currentSpend, '+'
				)} bg-msk-300 m-auto rounded-md  md:text-lg text-2xl p-0`}
			>
				{(currentSpend && currentSpend) || 0}
			</p>
		</div>
	);
};

export default CategoryCurrentBudget;

{
	/* <div className="bg-msk-800 w-24 m-auto rounded-md p-1 mt-[-4px]">
<p className={` bg-msk-300 m-auto rounded-md  md:text-lg text-2xl p-0`}>
	{balance}
</p>
</div> */
}
