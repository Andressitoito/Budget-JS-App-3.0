import { Modal } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleModalDeleteTransaction } from "../../features/modals/modalDeleteTransaction";
import BaseButton from "../interaction/Base-button";



const DeleteTransaction = () => {

  const { modalDeleteTransaction } = useSelector((state) => state)

  const dispatch = useDispatch()

  const onClick = () => {
    dispatch(toggleModalDeleteTransaction())
  }

  const onClose = () => {
    dispatch(toggleModalDeleteTransaction())

  }
  return (
    <Modal
      show={modalDeleteTransaction}
      size="md"
      popup={true}
      onClose={onClose}
      className="bg-opacity-5 backdrop-blur-[2px] pt-[15%] md:pt-0 h-[100%]"
    >
      <div className="relative rounded-lg p-4  bg-msk-800">
        <h3 className="mb-5 text-center 
   text-3xl md:text-xl font-normal text-gray-500 dark:text-gray-400">
          Are you sure you want to <br />
          <span className="text-red-500">delete this transaction?</span>
        </h3>
        <div className="flex justify-between gap-4">
          <BaseButton
            text={"No, Cancel"}
            onClick={() => {
              onClose();
            }}
          />
          <BaseButton
            text={"Yes, I am sure"}
            danger
            onClick={() => {
              onClick();
            }}
          >
            Yes, Im sure
          </BaseButton>
        </div>
      </div>
    </Modal>
  )
}

export default DeleteTransaction;