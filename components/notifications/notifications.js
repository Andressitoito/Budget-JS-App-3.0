import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showNotification } from "../../features/Notifications/notifications";
import { notification_style } from "../../lib/notification_style";

const Notification = () => {
	const { notifications } = useSelector((state) => state);
	const dispatch = useDispatch();
	const { message, status } = notifications;

	let notificationStyle = notification_style(status);

	useEffect(() => {
		if (status === "Success" || status === "Error") {
			const timer = setTimeout(() => {
				dispatch(
					showNotification({
						show: false,
						message: "",
						status: "",
					})
				);
			}, 3000);
			return () => clearTimeout(timer);
		}
	}, [status]);

	return (
		<div
			className={`fixed top-5 z-50  md:w-[50%] w-[75%] md:ml-[25%] ml-[12.5%] rounded-md border-4 ${notificationStyle}`}
		>
			<p className="text-xl text-center">{status}</p>
			<h2 className="text-2xl text-center">{message}</h2>
		</div>
	);
};

export default Notification;
