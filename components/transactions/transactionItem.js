import { useDispatch, useSelector } from "react-redux";
import { toggleModalDeleteTransaction } from "../../features/modals/modalDeleteTransaction";
import { toggleModalEditTransaction } from "../../features/modals/modalEditTransacton";
import BaseButton from "../interaction/Base-button";
import DeleteTransaction from "../modals/deleteTransaction";
import EditTransaction from "../modals/editTransaction";

const TransactionItem = () => {
	const { modalEditTransaction } = useSelector((state) => state);

	const dispatch = useDispatch();

	const handleClickModalEditTransaction = () => {
		dispatch(toggleModalEditTransaction());
	};

	const handleClickModalDeleteTransaction = () => {
		dispatch(toggleModalDeleteTransaction());
	};

	return (
		<div className="relative bg-msk-200 rounded-md">
			<div className="bg-msk-300 relative text-2xl md:text-xl rounded-md m-1">
				<p className="bg-msk-600 txt-msk-100 right-0 rounded-sm top-[-5px]">
					username
				</p>
				<p className="w-full ">24/01/2022 14:56 hs</p>
				<p className="w-full">TransactionItem Name</p>

				<div className="flex justify-between"></div>
				<div className="flex justify-between">
					<BaseButton
						text={"Edit"}
						p_xs
						onClick={() => {
							handleClickModalEditTransaction();
						}}
					/>

					<EditTransaction />

					<p className="text-3xl md:text-2xl font-semibold">150000</p>
					<BaseButton
						text={"Delete"}
						p_xs
						danger
						onClick={() => {
							handleClickModalDeleteTransaction();
						}}
					/>

					<DeleteTransaction/>
				</div>
			</div>
		</div>
	);
};

export default TransactionItem;
