import { Modal } from "flowbite-react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toggleModalEditTransaction } from "../../features/Modals/modalEditTransacton";
import { getTransactionListbyId } from "../../features/Transactions/getTransactionList";
import { useNotification } from "../../hooks/notificationHook";
import HelperText from "../helpers/helperText";
import BaseButton from "../interaction/Base-button";

const EditTransaction = () => {
	const {
		register,
		getValues,
		formState: { isValid, errors },
	} = useForm({
		mode: "onChange",
	});
	const { modalEditTransaction, categoryData } = useSelector((state) => state);
	const { currentCategory } = categoryData
	const { transaction_id, transaction_item, transaction_price } =
		modalEditTransaction;

	const dispatch = useDispatch();
	const dispatchNotification = useNotification();

	const onClick = async () => {
		dispatch(
			toggleModalEditTransaction({
				_id: null,
				transaction_item: null,
				transaction_price: null,
			})
		);

		////////////////////////////////
		// EDIT TRANSACTION
		////////////////////////////////
		dispatchNotification("Pending", `${transaction_item} is being edited...`);

		const transaction_data = {
			transaction_id,
			transaction_item: getValues('transaction_item'),
			transaction_price: getValues('transaction_price'),
		};

		const response = await fetch(
			"/api/database/transactions/update_transaction",
			{
				method: "PUT",
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
		dispatch(
			toggleModalEditTransaction({
				_id: null,
				transaction_item: null,
				transaction_price: null,
			})
		);
	};

	return (
		<Modal
			show={modalEditTransaction}
			size="md"
			popup={true}
			onClose={onClose}
			className="bg-opacity-5 backdrop-blur-[2px] pt-[15%] md:pt-0 h-[100%]"
		>
			<Modal.Body className="bg-msk-800 py-7 p-5 gap-3 rounded-md">
				<div className="space-y-1 py-5 ">
					<h3 className="text-3xl md:text-xl font-medium txt-msk-300">
						Edit Transaction
					</h3>
				</div>

				<div className="mb-2 block">
					<label
						htmlFor="itemName"
						className="block mb-2 font-medium md:text-lg text-3xl txt-msk-300"
					>
						Item Name
					</label>

					<input
						type="text"
						maxLength={30}
						{...register("transaction_item", {
							required: "Please insert a valid item name",
						})}
						className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl md:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
						placeholder={transaction_item}
						required
					/>
					{errors.transaction_item && (
						<HelperText marginTop>{errors.transaction_item.message}</HelperText>
					)}
				</div>

				<div className="mb-2 block">
					<label
						htmlFor="price"
						className="block mb-2 font-medium md:text-lg text-3xl  txt-msk-300"
					>
						Price
					</label>

					<input
						type="number"
						name="transaction_price"
						{...register("transaction_price", {
							validate: {
								lessThanGreaterThan: (value) => {
									if (value < -10000001 || value > 10000001) {
										return "Please enter a price between -1000000 and 1000000 (inclusive). Prices outside of this range are not allowed.";
									}
								},
								notEmpty: (value) => {
									if (value === "") {
										return "This field cannot be empty";
									}
								},
							},
						})}
						className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl md:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
						placeholder={transaction_price}
						required
					/>
					{errors.transaction_price && (
						<HelperText marginTop>{errors.transaction_price.message}</HelperText>
					)}
				</div>

				<div className="flex mt-4 justify-between gap-4">
					<BaseButton
						text={"No, Cancel"}
						onClick={() => {
							onClose();
						}}
					/>
					<BaseButton
						text={"Edit transaction"}
						disabled={isValid ? false : true}
						success
						onClick={() => {
							onClick();
						}}
					/>
				</div>
			</Modal.Body>
		</Modal>
	);
};

export default EditTransaction;
