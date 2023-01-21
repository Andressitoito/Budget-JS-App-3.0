import { Label, Modal, TextInput } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleModalNewTransaction } from "../../features/modals/modalNewTransaction";
import BaseButton from "../interaction/Base-button";

const NewTransaction = () => {
  const { modalNewTransaction } = useSelector((state) => state);

  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(toggleModalNewTransaction());
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
          <label htmlFor="itemName" className="block mb-2 font-medium md:text-lg text-2xl txt-msk-300">Item Name</label>

          <input
            type='text'
            id="itemName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl md:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
            placeholder="burgers, milk, bolts..." required />
        </div>


        <div className="mb-2 block">
          <label htmlFor="price" className="block mb-2 font-medium md:text-lg text-2xl  txt-msk-300">Price</label>

          <input
            type='number'
            id="price"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl md:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
            placeholder="$$$..." required />
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
