const BaseButton = (props) => {
	const { onClick } = props;

	const bgColor =
		(props.danger && "bg-red-800") ||
		(props.success && "bg-green-600") ||
		"bg-blue-500";

	const bgColorHover =
		(props.danger && "hover:bg-red-600") ||
		(props.success && "hover:bg-green-700") ||
		"hover:bg-blue-700";

	const padding =
		(props.p_xs && "py-1 px-1.5") || (props.p_xl && "py-4 px-4") || "";

	const width =
		(props.w_full && "w-full") ||
		(props.w_half && "w-1/2") ||
		(props.w_quarter && "w-1/4");

	const textBreak = props.w_full ? "" : "max-w-[160px]";

	return (
		<button
			disabled={props.disabled === true ? true : false}
			className={`${bgColor} ${bgColorHover} ${padding} ${width} uppercase	text-xl md:text-base	font-bold	txt-msk-100  py-1.5 px-2 rounded transition delay-100 duration-400 ease-in-out disabled:opacity-50 disabled:pointer-events-none`}
			onClick={onClick}
		>
			<p className={`${textBreak}`}>{props.text}</p>
		</button>
	);
};

export default BaseButton;
