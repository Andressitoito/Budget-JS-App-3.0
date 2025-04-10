import { Modal } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleModalDeleteAllTransactions } from "../../features/Modals/modalDeleteAllTransactionsSlice";
import { getTransactionListbyId } from "../../features/Transactions/getTransactionList";
import { useNotification } from "../../hooks/notificationHook";
import BaseButton from "../interaction/Base-button";

const DeleteAllTransactions = () => {
	const dispatch = useDispatch();
	const dispatchNotification = useNotification();

	const { modalDeleteAllTransactions, categoryData } = useSelector(
		(state) => state
	);
	const { currentCategory } = categoryData;

	const onClick = async () => {
		dispatch(toggleModalDeleteAllTransactions());

		dispatchNotification("Pending", `All transactions are being deleted...`);

		////////////////////////////////
		// DELETING TRANSACTION LIST
		////////////////////////////////
		const category_id = currentCategory._id;

		const response = await fetch(
			"/api/database/transactions/delete_all_transactions",
			{
				method: "DELETE",
				body: JSON.stringify({ category_id }),
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		const data = await response.json();

		////////////////////////////////
		// REFRESH TRANSACTION LIST
		////////////////////////////////
		const response_transactionList = await fetch(
			"/api/database/transactions/get_transactions_list",
			{
				method: "POST",
				body: JSON.stringify({ category_id }),
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		const data_transactionList = await response_transactionList.json();

		dispatch(getTransactionListbyId(data_transactionList.transactions));

		if (response.ok) {
			dispatchNotification("Success", `${data.message}`);
		} else {
			dispatchNotification("Error", `${data.error}`);
		}
	};

	const onClose = () => {
		dispatch(toggleModalDeleteAllTransactions());
	};

	return (
		<Modal
			show={modalDeleteAllTransactions}
			size="md"
			popup={true}
			onClose={onClose}
			className="backdrop-blur-sm pt-[15%] md:pt-0 h-[100%]"
		>
			<div className="relative rounded-lg p-4  bg-msk-800">
				<h3
					className="mb-5 text-center bg-blue-400 rounded-md
      text-3xl md:text-xl font-normal text-blue-800"
				>
					Are you sure you want to <br />
					<span className="text-red-800 uppercase font-bold">
						delete all transactions?
					</span>
				</h3>
				<div className="flex justify-between gap-4">
					<BaseButton
						text={"No, Cancel"}
						onClick={() => {
							onClose();
						}}
					/>
					<BaseButton
						text={"Yes, I am sure"}
						danger
						onClick={() => {
							onClick();
						}}
					>
						Yes, Im sure
					</BaseButton>
				</div>
			</div>
		</Modal>
	);
};

export default DeleteAllTransactions;
