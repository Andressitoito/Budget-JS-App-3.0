import { useDispatch } from "react-redux";
import { showNotification } from "../features/Notifications/notifications";

export const useNotification = () => {
	const dispatch = useDispatch();
	return (status, message) => {
		dispatch(
			showNotification({
				show: true,
				status: `${status}`,
				message: `${message}`,
			})
		);
	};
};
