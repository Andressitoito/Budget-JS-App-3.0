import { Modal } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleModalDeleteTransaction } from "../../features/Modals/modalDeleteTransaction";
import { getTransactionListbyId } from "../../features/Transactions/getTransactionList";
import { useNotification } from "../../hooks/notificationHook";
import BaseButton from "../interaction/Base-button";

const DeleteTransaction = () => {
	const { modalDeleteTransaction, categoryData } = useSelector((state) => state);
	const { transaction_id, transaction_item } = modalDeleteTransaction;
	const { currentCategory } = categoryData;
	const dispatch = useDispatch();
	const dispatchNotification = useNotification();

	const onClick = async () => {
		dispatch(
			toggleModalDeleteTransaction({
				_id: null,
				transaction_item: null,
			})
		);

		////////////////////////////////
		// DELETE TRANSACTION
		////////////////////////////////
		dispatchNotification("Pending", `${transaction_item} is being deleted...`);

		const transaction_data = {
			transaction_id,
			transaction_item,
		};

		const response = await fetch(
			"/api/database/transactions/delete_transaction",
			{
				method: "POST",
				body: JSON.stringify(transaction_data),
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		const data = await response.json();

		////////////////////////////////
		// REFRESH TRANSACTION LIST
		////////////////////////////////
		const category_id = currentCategory._id;
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
		dispatch(toggleModalDeleteTransaction({ _id: null, transaction_item: null }));
	};
	return (
		<Modal
			show={modalDeleteTransaction}
			size="md"
			popup={true}
			onClose={onClose}
			className="bg-opacity-5 backdrop-blur-[2px] pt-[15%] md:pt-0 h-[100%]"
		>
			<div className="relative rounded-lg p-4 bg-msk-800">
				<h3 className="mb-5 text-center text-3xl md:text-xl font-normal bg-blue-400 rounded-md text-blue-800">
					Are you sure you want to <br />
					<span className="text-red-800">delete {`${transaction_item}`}?</span>
				</h3>
				<div className="flex justify-between gap-4">
					<BaseButton
						text={"No, Cancel"}
						onClick={() => {
							onClose();
						}}
					/>
					<BaseButton
						text={`Yes, delete ${transaction_item}`}
						danger
						onClick={() => {
							onClick();
						}}
					>
					</BaseButton>
				</div>
			</div>
		</Modal>
	);
};

export default DeleteTransaction;
