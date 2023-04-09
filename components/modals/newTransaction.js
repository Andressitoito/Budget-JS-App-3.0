import { Modal } from "flowbite-react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toggleModalNewTransaction } from "../../features/Modals/modalNewTransaction";
import { getTransactionListbyId } from "../../features/Transactions/getTransactionList";
import { useNotification } from "../../hooks/notificationHook";
import HelperText from "../helpers/helperText";
import BaseButton from "../interaction/Base-button";

const NewTransaction = () => {
	const {
		register,
		getValues,
		formState: { errors, isValid },
	} = useForm({ mode: "onChange" });
	const { modalNewTransaction, categoryData } = useSelector((state) => state);

	const { currentCategory } = categoryData;

	const dispatch = useDispatch();
	const dispatchNotification = useNotification();

	const onClick = async () => {
		dispatch(toggleModalNewTransaction());

		////////////////////////////////
		// CREATE NEW TRANSACTION
		////////////////////////////////
		dispatchNotification("Pending", "Creating new transaction...");

		const transaction = {
			category_id: currentCategory._id,
			organization_id: "6418e62930a356ee6570ffb0",
			username: "Andrew",
			item: getValues("item_name").trim(),
			price: getValues("item_price").trim(),
		};


		const response = await fetch(
			"/api/database/transactions/create_transaction",
			{
				method: "POST",
				body: JSON.stringify({ transaction }),
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
		dispatch(toggleModalNewTransaction());
	};

	return (
		<Modal
			show={modalNewTransaction}
			size="md"
			popup={true}
			onClose={onClose}
			className="backdrop-blur-sm pt-[15%] md:pt-0 h-[100%]"
		>
			<Modal.Body className="bg-msk-800 py-7 p-5 gap-3 rounded-md">
				<div className="space-y-1 py-5 ">
					<h3 className="text-3xl md:text-xl font-medium txt-msk-300 dark:text-white">
						Create New Transaction
					</h3>
				</div>

				<div className="mb-2 block">
					<label
						htmlFor="itemName"
						className="block mb-2 font-medium md:text-lg text-2xl txt-msk-300"
					>
						Item Name
					</label>

					<input
						type="text"
						maxLength={30}
						name="item_name"
						{...register("item_name", {
							required: "Please insert a valid item name",
						})}
						className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl md:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
						placeholder="burgers, milk, bolts..."
						required
					/>
					{errors.item_name && (
						<HelperText marginTop>{errors.item_name.message}</HelperText>
					)}
				</div>

				<div className="mb-2 block">
					<label
						htmlFor="price"
						className="block mb-2 font-medium md:text-lg text-2xl  txt-msk-300"
					>
						Price
					</label>

					<input
						type="number"
						name="item_price"
						{...register("item_price", {
							validate: {
								lessThanGreaterThan: (value) => {
									if (value < -1000001 || value > 1000001) {
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
						className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl md:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
						placeholder="$$$..."
						required
					/>
					{errors.item_price && (
						<HelperText marginTop>{errors.item_price.message}</HelperText>
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
						text={"Create new transaction"}
						success
						disabled={isValid ? false : true}
						onClick={() => {
							onClick();
						}}
					/>
				</div>
			</Modal.Body>
		</Modal>
	);
};

export default NewTransaction;
