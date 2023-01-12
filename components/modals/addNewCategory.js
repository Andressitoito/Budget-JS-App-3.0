import { Modal } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleModalAddNewCategory } from "../../features/modals/modalAddNewCategory";
import BaseButton from "../interaction/Base-button";

const AddNewCategory = () => {

 const { modalAddNewCategory } = useSelector((state) => state)

 const dispatch = useDispatch()

 const onClick = () => {
  dispatch(toggleModalAddNewCategory())
 }

 const onClose = () => {
  dispatch(toggleModalAddNewCategory())
 }

 return (
  <Modal show={modalAddNewCategory} size="md" popup={true} onClose={onClose} className="backdrop-blur-sm pt-[15%] md:pt-0">
   <Modal.Body className="bg-msk-800 py-7 p-5 gap-3 rounded-md ">
    <div className="space-y-2 py-5 ">
     <h3 className="text-3xl md:text-xl font-medium txt-msk-300 dark:text-white">
      Add new category
     </h3>

     <input type='text' className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl md:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 " placeholder="Finance, Groceries, Dates, etc..." required />
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
      success
      onClick={() => {
       onClick();
      }}
     />
    </div>
   </Modal.Body>
  </Modal>
 )
}

export default AddNewCategory;