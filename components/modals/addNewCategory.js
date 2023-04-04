import { Modal } from "flowbite-react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryData } from "../../features/Category/categoryData";
import { toggleModalAddNewCategory } from "../../features/Modals/modalAddNewCategory";
import { useNotification } from "../../hooks/notificationHook";
import { getAllCategories } from "../../lib/categories/getAllCategories";
import HelperText from "../helpers/helperText";
import BaseButton from "../interaction/Base-button";

const AddNewCategory = () => {
	const {
		register,
		getValues,
		formState: { errors, isValid },
	} = useForm({ mode: "onChange" });
	const { modalAddNewCategory, user } = useSelector((state) => state);

	const dispatch = useDispatch();
	const dispatchNotification = useNotification();

	const onClick = async () => {
		dispatch(toggleModalAddNewCategory());

		dispatchNotification("Pending", "Creating category...");
		const category = {
			category_name: getValues("category_name").trim(),
			organization_id: user.organization_id,
		};

		const response = await fetch("/api/database/categories/create_category", {
			method: "POST",
			body: JSON.stringify({ category }),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();

		const categoryList = await getAllCategories(user.organization_id);
		dispatch(setCategoryData(categoryList));
		if (response.ok) {
			dispatchNotification("Success", `${data.message}`);
		} else {
			dispatchNotification("Error", `${data.error}`);
		}
	};

	const onClose = () => {
		dispatch(toggleModalAddNewCategory());
	};

	return (
		<Modal
			show={modalAddNewCategory}
			size="md"
			popup={true}
			onClose={onClose}
			className="backdrop-blur-sm pt-[15%] md:pt-0 h-[100%]"
		>
			<Modal.Body className="bg-msk-800 py-7 p-5 gap-3 rounded-md ">
				<div className="space-y-2 py-5 ">
					<h3 className="text-3xl md:text-xl font-medium txt-msk-300 dark:text-white">
						Add new category
					</h3>

					<input
						type="text"
						name="category_name"
						maxLength={30}
						{...register("category_name", {
							required: "Please insert a valid category name",
						})}
						className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl md:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
						placeholder="Finance, Groceries, Dates, etc..."
						required
					/>
					{errors.category_name && (
						<HelperText>{errors.category_name.message}</HelperText>
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
						text={"Add new category"}
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

export default AddNewCategory;
