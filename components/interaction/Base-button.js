const BaseButton = (props) => {
	const bgColor =
		(props.danger && "bg-red-500") ||
		(props.success && "bg-green-600") ||
		"bg-blue-500";

	const bgColorHover =
		(props.danger && "hover:bg-red-600") ||
		(props.success && "hover:bg-green-700") ||
		"hover:bg-blue-700";

  const text = props.xs && 'text-xs' || props.sm && 'text-sm' || props.lg && 'text-lg' || props.xl && 'text-xl' || 'text-base'

		const padding = props.p_xs && 'py-1 px-1.5' || ''

	return (
		<button
			className={`${bgColor} ${bgColorHover} ${text} ${padding} text-white font-bold py-2 px-4 rounded transition delay-100 duration-500 ease-in-out`}
		>
			{props.text}
		</button>
	);
};

export default BaseButton;
