import { useDispatch, useSelector } from "react-redux";
import { toggleModalDeleteTransaction } from "../../features/modals/modalDeleteTransaction";
import { toggleModalEditTransaction } from "../../features/modals/modalEditTransacton";
import BaseButton from "../interaction/Base-button";
import DeleteTransaction from "../modals/deleteTransaction";
import EditTransaction from "../modals/editTransaction";

const TransactionItem = (props) => {
	const { _id, item, price, date } = props;

	const dispatch = useDispatch();

	const handleClickModalEditTransaction = (_id) => {
		dispatch(toggleModalEditTransaction(_id));
	};

	const handleClickModalDeleteTransaction = (_id) => {
		dispatch(toggleModalDeleteTransaction(_id));
	};

	const dateString = date;
	const newDate = new Date(dateString);
	const options = {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
	};
	const formattedDate = newDate.toLocaleTimeString("es-AR", options);




	return (
		<div className="relative bg-msk-200 rounded-md">
			<div className="bg-msk-300 relative text-2xl md:text-xl rounded-md m-1">
				<p className="bg-msk-600 txt-msk-100 right-0 rounded-sm top-[-5px]">
					username
				</p>
				<p className="w-full">{formattedDate}</p>
				<p className="w-full">{item}</p>

				<div className="flex justify-between"></div>
				<div className="flex justify-between">
					<BaseButton
						text={"Edit"}
						p_xs
						onClick={() => {
							handleClickModalEditTransaction(_id);
						}}
					/>

					<EditTransaction />

					<p className="text-3xl md:text-2xl font-semibold">{price}</p>
					<BaseButton
						text={"Delete"}
						p_xs
						danger
						onClick={() => {
							handleClickModalDeleteTransaction(_id);
						}}
					/>

					<DeleteTransaction />
				</div>
			</div>
		</div>
	);
};

export default TransactionItem;
