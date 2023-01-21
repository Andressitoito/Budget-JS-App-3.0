import { Modal } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleModalDeleteAllTransactions } from "../../features/modals/modalDeleteAllTransactionsSlice";
import BaseButton from "../interaction/Base-button";

const DeleteAllTransactions = (props) => {
	const { allTransactions } = props;

	const dispatch = useDispatch();

	const { modalDeleteAllTransactions } = useSelector((state) => state);

	const onClick = () => {
		dispatch(toggleModalDeleteAllTransactions());
	};

	const onClose = () => {
		dispatch(toggleModalDeleteAllTransactions());
	};

	return (
				<Modal
					show={modalDeleteAllTransactions}
					size="md"
					popup={true}
					onClose={onClose}
					className="backdrop-blur-sm pt-[15%] md:pt-0 h-[100%]"
				>
					<div className="relative rounded-lg p-4  bg-msk-800">
						<h3 className="mb-5 text-center 
      text-3xl md:text-xl font-normal text-gray-500 dark:text-gray-400">
							Are you sure you want to <br/>
        <span className="text-red-500 uppercase font-bold">delete all transactions?</span>
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
	);
};

export default DeleteAllTransactions;
