import { Modal } from "flowbite-react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
	setCategoryData,
	setCurrentCategory,
} from "../../features/Category/categoryData";
import { toggleModalEditCategoryName } from "../../features/Modals/modalEditcategoryNameSlice";
import { useNotification } from "../../hooks/notificationHook";
import { getAllCategories } from "../../lib/categories/getAllCategories";
import HelperText from "../helpers/helperText";
import BaseButton from "../interaction/Base-button";

const EditCategoryName = () => {
	const { modalEditCategoryName, categoryData, organizationData } = useSelector((state) => state);
	const {
		register,
		getValues,
		formState: { errors, isValid },
	} = useForm({
		mode: "onChange",
	});
	const dispatch = useDispatch();
	const dispatchNotification = useNotification()
	const { currentCategory } = categoryData;

	const onClick = async (e) => {
		e.preventDefault();
		dispatch(toggleModalEditCategoryName());
		dispatchNotification("Pending", "Updating category name...");

		const categoryData = {
			category_id: currentCategory._id,
			newCategoryName: getValues("category_name"),
		};

		console.log(categoryData);

		const response = await fetch(
			"/api/database/categories/update_category_name",
			{
				method: "POST",
				body: JSON.stringify(categoryData),
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

		let category_List = await getAllCategories(organizationData.currentOrganization_id);
		dispatch(setCategoryData(category_List));
	};

	const onClose = () => {
		dispatch(toggleModalEditCategoryName());
	};
	return (
		<>
			<Modal
				show={modalEditCategoryName}
				size="md"
				popup={true}
				onClose={onClose}
				className="backdrop-blur-sm pt-[15%] md:pt-0 h-[100%]"
			>
				<Modal.Body className="bg-msk-800 py-7 p-5 gap-3 rounded-md">
					<div className="space-y-2 py-5 ">
						<h3 className="text-3xl  md:text-xl font-medium txt-msk-300 dark:text-white">
							Edit category name
						</h3>

						<input
							type="text"
							name="category_name"
							{...register("category_name", {
								required: "Please insert a valid category name",
							})}
							className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl md:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
							placeholder="Finance, Groceries, Dates, etc..."
							required
						/>
						{errors.category_name && (
							<HelperText marginTop>{errors.category_name.message}</HelperText>
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
							text={"Edit name"}
							disabled={isValid ? false : true}
							success
							onClick={(e) => {
								onClick(e);
							}}
						/>
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default EditCategoryName;
