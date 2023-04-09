const CategoryBaseAmount = ({ base_amount }) => {
	return (
		<div className="bg-msk-800 w-24 m-auto rounded-md p-1 mt-[-4px]">
			<p className="bg-msk-300 m-auto rounded-md md:text-lg text-2xl p-0">
				{base_amount ? base_amount : 0}
			</p>
		</div>
	);
};

export default CategoryBaseAmount;
