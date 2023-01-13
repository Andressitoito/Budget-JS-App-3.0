import { useSelector } from "react-redux";

const CategoryName = () => {
	const { currentCategory } = useSelector((state) => state)

	console.log(currentCategory)

	return (
		<div className="bg-msk-800 max-w-[90] m-auto rounded-md p-1">
			<p className="bg-msk-300 txt-msk-90 text-3xl md:text-3xl px-3 mx-auto rounded-md uppercase italic font-bold">
				{currentCategory && currentCategory.categoryName || 'no hay nadaa'}
			</p>
		</div>
	);
};

export default CategoryName;
