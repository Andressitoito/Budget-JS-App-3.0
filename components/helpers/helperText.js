const HelperText = (props) => {

	const { marginTop } = props

	const margin = marginTop ? `mt-10px` : `mt-[-10px]`

	return (
		<p className={`${margin} px-1 py-0 text-red-400`}>
			{props.children}</p>);
};

export default HelperText;
