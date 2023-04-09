import { useDispatch, useSelector } from "react-redux";
import { toggleModalDeleteAllTransactions } from "../../features/Modals/modalDeleteAllTransactionsSlice";
import { toggleModalEditCategoryName } from "../../features/Modals/modalEditcategoryNameSlice";
import { toggleModalEditBaseAmount } from "../../features/Modals/modalEditeBaseAmount";
import { toggleModalDeleteCategory } from "../../features/Modals/modalDeleteCategory";
import BaseButton from "../interaction/Base-button";
import DeleteAllTransactions from "../modals/deleteAllTransactions";
import EditCategoryName from "../modals/editCategoryName";
import EditBaseAmount from "../modals/editBaseAmount";
import DeleteCategory from "../modals/deleteCategory";

const CategoryActions = () => {
	const {
		modalDeleteAllTransactions,
		modalDeleteCategory,
		modalEditCategoryName,
		modalEditBaseAmount,
		categoryData,
	} = useSelector((state) => state);
	const { currentCategory } = categoryData;

	const dispatch = useDispatch();

	const handleClickModalEditCategoryName = () => {
		dispatch(toggleModalEditCategoryName());
	};

	const handleClickModalEditBaseAmount = () => {
		dispatch(toggleModalEditBaseAmount());
	};

	const handleClickModalDelete = () => {
		dispatch(toggleModalDeleteAllTransactions());
	};

	const handleClickModalDeleteCategory = () => {
		dispatch(toggleModalDeleteCategory());
	};

	return (
		<div className="flex justify-center flex-col gap-5">
			<div>
				<BaseButton
					disabled={currentCategory === null}
					text={"Edit category Name"}
					xs
					onClick={() => {
						handleClickModalEditCategoryName();
					}}
				/>
				{modalEditCategoryName && <EditCategoryName />}
			</div>
			<div>
				<BaseButton
					disabled={currentCategory === null}
					text={"Edit Base Amount"}
					xs
					onClick={() => {
						handleClickModalEditBaseAmount();
					}}
				/>
				{modalEditBaseAmount && <EditBaseAmount />}
			</div>
			<div>
				<BaseButton
					disabled={currentCategory === null}
					text={"Delete all transactions"}
					onClick={() => {
						handleClickModalDelete();
					}}
					xs
					danger
				/>
				{modalDeleteAllTransactions && <DeleteAllTransactions />}
			</div>
			<div>
				<BaseButton
					disabled={currentCategory === null}
					text={`${currentCategory ? `Delete category ${currentCategory.category_name}` : 'Delete category'}`}
					onClick={() => {
						handleClickModalDeleteCategory();
					}}
					xs
					danger
				/>
				{modalDeleteCategory && <DeleteCategory />}
			</div>
		</div>
	);
};

export default CategoryActions;
