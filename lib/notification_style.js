export const notification_style = (status) => {
	let notificationStyle;

	if (status === "Pending") {
		notificationStyle = `bg-blue-400 border-blue-300 text-blue-900`;
	}
	if (status === "Success") {
		notificationStyle = `bg-green-400 border-green-300 text-green-900`;
	}
	if (status === "Error") {
		notificationStyle = `bg-red-400 border-red-300 text-red-900`;
	}

	return notificationStyle;
};
