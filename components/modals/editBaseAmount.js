import { Modal, TextInput } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import modalEditBaseAmount, {
	toggleModalEditBaseAmount,
} from "../../features/modals/modalEditeBaseAmount";
import BaseButton from "../interaction/Base-button";

const EditBaseAmount = () => {
	const { modalEditBaseAmount } = useSelector((state) => state);

	const dispatch = useDispatch();

	const onClick = () => {
		dispatch(toggleModalEditBaseAmount());
	};

	const onClose = () => {
		dispatch(toggleModalEditBaseAmount());
	};
	return (
		<>
			<Modal show={modalEditBaseAmount} size="md" popup={true} onClose={onClose} className="backdrop-blur-sm pt-[15%] md:pt-0 h-[100%]">
				<Modal.Body className="bg-msk-800 py-7 p-5 gap-3 rounded-md">
					<div className="space-y-2 py-5 ">
						<h3 className="text-3xl md:text-xl font-medium txt-msk-300 dark:text-white">
							Edit base amount
						</h3>

						<input
							type='number'
							className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl md:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
							placeholder="1000, 2000, 3000..."
							required />
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
