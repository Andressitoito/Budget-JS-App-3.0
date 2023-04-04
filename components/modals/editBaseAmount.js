import { Modal } from "flowbite-react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentCategory } from "../../features/Category/categoryData";
import { toggleModalEditBaseAmount } from "../../features/Modals/modalEditeBaseAmount";
import { useNotification } from "../../hooks/notificationHook";
import HelperText from "../helpers/helperText";
import BaseButton from "../interaction/Base-button";

const EditBaseAmount = () => {
	const { modalEditBaseAmount, categoryData } = useSelector((state) => state);

	const { currentCategory } = categoryData;
	const {
		register,
		getValues,
		formState: { errors, isValid },
	} = useForm({
		mode: "onChange",
	});

	const dispatch = useDispatch();
	const dispatchNotification = useNotification();

	const onClick = async () => {
		dispatch(toggleModalEditBaseAmount());
		dispatchNotification("Pending", "Updating base amount...");

		const category_info = {
			category_id: currentCategory._id,
			new_base_amount: getValues("base_amount"),
		};

		const response = await fetch(
			"/api/database/categories/update_category_base_amount",
			{
				method: "POST",
				body: JSON.stringify(category_info),
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		const data = await response.json();

		if (response.ok) {
			dispatchNotification("Success", `${data.message}`);
		} else {
			dispatchNotification("Error", `${data.error}`);
		}

		dispatch(setCurrentCategory(data.updated_category));
	};

	const onClose = () => {
		dispatch(toggleModalEditBaseAmount());
	};
	return (
		<>
			<Modal
				show={modalEditBaseAmount}
				size="md"
				popup={true}
				onClose={onClose}
				className="backdrop-blur-sm pt-[15%] md:pt-0 h-[100%]"
			>
				<Modal.Body className="bg-msk-800 py-7 p-5 gap-3 rounded-md">
					<div className="space-y-2 py-5 ">
						<h3 className="text-3xl md:text-xl font-medium txt-msk-300 dark:text-white">
							Edit base amount
						</h3>

						<input
							type="number"
							name="base_amount"
							{...register("base_amount", {
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
							className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl md:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
							placeholder="1000, 2000, 3000..."
							required
						/>
						{errors.base_amount && (
							<HelperText marginTop>{errors.base_amount.message}</HelperText>
						)}
					</div>

					<div className="flex justify-between gap-4">
						<BaseButton
							text={"No, Cancel"}
							onClick={() => {
								onClose();
							}}
						/>
						<BaseButton
							text={"Edit base amount"}
							success
							disabled={isValid ? false : true}
							onClick={() => {
								onClick();
							}}
						/>
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default EditBaseAmount;
