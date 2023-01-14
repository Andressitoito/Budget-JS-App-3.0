import { useSelector } from "react-redux";
import TransactionItem from "./transactionItem";

const TransactionList = () => {
	const { getTransactionList } = useSelector((state) => state);

	return (
		<>
			{getTransactionList && (
				<div className="bg-msk-800 rounded-md flex flex-col gap-1 py-2 p-1 mx-auto w-72">
					{getTransactionList.map(({ _id, item, price, date }) => (
						<TransactionItem key={_id} item={item} price={price} date={date} />
					))}
				</div>
			)}
		</>
	);
};

export default TransactionList;
