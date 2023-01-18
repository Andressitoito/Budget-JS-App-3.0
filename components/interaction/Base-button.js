const BaseButton = (props) => {
	const { onClick } = props;

	const bgColor =
		(props.danger && "bg-red-500") ||
		(props.success && "bg-green-600") ||
		"bg-blue-500";

	const bgColorHover =
		(props.danger && "hover:bg-red-600") ||
		(props.success && "hover:bg-green-700") ||
		"hover:bg-blue-700";

	// const text =
	// 	(props.xs && "text-xs") ||
	// 	(props.sm && "text-sm") ||
	// 	(props.lg && "text-lg") ||
	// 	(props.xl && "text-xl") ||
	// 	"text-base";

	const padding = (props.p_xs && "py-1 px-1.5") || (props.p_xl && "py-3 px-4") || "";

	return (
		<button
			className={`${bgColor} ${bgColorHover} ${padding} uppercase
			text-xl md:text-base
			font-bold
			txt-msk-100  py-1.5 px-2 rounded transition delay-100 duration-500 ease-in-out`}
			onClick={onClick}
		>
			
			<p className="break-normal
			 max-w-[160px]">

			{props.text}
			</p>
		</button>
	);
};

export default BaseButton;
