import { useDispatch, useSelector } from "react-redux";
import { toggleModalDeleteTransaction } from "../../features/Modals/modalDeleteTransaction";
import { toggleModalEditTransaction } from "../../features/Modals/modalEditTransacton";
import { to_readable_time } from "../../lib/mongodb/to_readable_time";
import { setNumberColor } from "../../lib/utils/set_number_color";
import BaseButton from "../interaction/Base-button";
import DeleteTransaction from "../modals/deleteTransaction";
import EditTransaction from "../modals/editTransaction";

const TransactionItem = (props) => {
	const { _id, item, price, date, username } = props;

	const { modalDeleteTransaction, modalEditTransaction } = useSelector((state) => state)
	const dispatch = useDispatch();

	const { showModalDeleteTransaction } = modalDeleteTransaction
	const { showModalEditTransaction } = modalEditTransaction

	const handleClickModalEditTransaction = () => {
		dispatch(toggleModalEditTransaction({_id, item, price}));
	};

	const handleClickModalDeleteTransaction = (_id) => {
		dispatch(toggleModalDeleteTransaction({_id, item}));
	};

	const readableTime = to_readable_time(date);

	return (
		<div className="relative bg-msk-200 rounded-md">
			<div className="bg-msk-300 relative text-2xl md:text-xl rounded-md m-1">
				<p className="bg-msk-600 txt-msk-100 right-0 rounded-sm top-[-5px] font-semibold">
					{username}
				</p>
				<p className="w-full text-xl md:text-md">{readableTime}</p>
				<p className="w-full bg-blue-200">{item}</p>

				<div className="flex justify-between ">
					<BaseButton
						text={"Edit"}
						p_xs
						onClick={() => {
							handleClickModalEditTransaction(_id);
						}}
					/>

					<p className={`${setNumberColor(price, '+')} text-3xl md:text-2xl font-semibold`}>{price}</p>

					<BaseButton
						text={"dlt"}
						p_xs
						danger
						onClick={() => {
							handleClickModalDeleteTransaction(_id);
						}}
					/>

					{showModalEditTransaction && <EditTransaction />}
					{showModalDeleteTransaction && <DeleteTransaction />}
				</div>
			</div>
		</div>
	);
};

export default TransactionItem;
