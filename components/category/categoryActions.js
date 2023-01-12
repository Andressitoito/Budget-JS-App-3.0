import BaseButton from "../interaction/Base-button";
import { useDispatch, useSelector } from "react-redux";
import { toggleModalDeleteAllTransactions } from "../../features/modals/modalDeleteAllTransactionsSlice";
import DeleteAllTransactions from "../modals/deleteAllTransactions";
import { toggleModalEditCategoryName } from "../../features/modals/modalEditcategoryNameSlice";
import EditCategoryName from "../modals/editCategoryName";
import { toggleModalEditBaseAmount } from "../../features/modals/modalEditeBaseAmount";
import EditBaseAmount from "../modals/editBaseAmount";

const CategoryActions = () => {
 const {
  modalDeleteAllTransactions,
  modalEditCategoryName,
  modalEditBaseAmount,
 } = useSelector((state) => state);

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

 return (
  <div className="flex justify-center flex-col gap-5">
   <div>
    <BaseButton
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
     text={"Delete all transactions"}
     onClick={() => {
      handleClickModalDelete();
     }}
     xs
     danger
    />
    {modalDeleteAllTransactions && <DeleteAllTransactions />}
   </div>
  </div>
 );
};

export default CategoryActions;
