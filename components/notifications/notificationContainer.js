import { useSelector } from "react-redux";
import Notification from "./notifications";

const NotificationContainer = () => {
	const { notifications } = useSelector((state) => state);

	const { show } = notifications;
	return (
		<>
			{show && (
				<Notification />
			)}
		</>
	);
};

export default NotificationContainer;
