import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleModalDeleteAllTransactions } from "../../features/modalDeleteAllTransactionsSlice/modalDeleteAllTransactionsSlice";
import BaseButton from "../interaction/Base-button";


const DeleteAllTransactions = (props) => {

 const { allTransactions } = props

 const dispatch = useDispatch()

 const { modalDeleteAllTransactions } = useSelector((state) => state)

 console.log(modalDeleteAllTransactions)

 const consoleLog = () => {
  console.log('button clicked')
 }

 const onClick = () => {
  dispatch(toggleModalDeleteAllTransactions())
 }


 const onClose = () => {
  dispatch(toggleModalDeleteAllTransactions())
 }


 return (
  <>
   <>
    <Button onClick={onClick}>
     Toggle modal
    </Button>
    <Modal
     show={modalDeleteAllTransactions}
     size="md"
     popup={true}
     onClose={onClose}
     className='backdrop-blur-sm'
    >
     <div className="relative rounded-lg p-4 bg-msk-800">

      <h3 className="mb-5 text-center text-lg font-normal text-gray-500 dark:text-gray-400">
       Are you sure you want to delete {allTransactions ? 'all transactions' : 'this transaction'}?
      </h3>
      <div className="flex justify-between gap-4">
       <BaseButton
        text={'No, Cancel'}
        onClick={() => {
         consoleLog()
        }}
       />
       <Button
        color="failure"
        onClick={onClick}
       >
        Yes, Im sure
       </Button>
      </div>
     </div>
    </Modal>
   </>

  </>
 )
}

export default DeleteAllTransactions;

/* 

In the process of editing the toggle modal.
The preparation and intallation of Redux (React-Redux/ToolKit) is completed.
Flowbite has been installed, it is required to work with Tailwind modals.

*/