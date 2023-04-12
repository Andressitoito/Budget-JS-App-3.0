import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const CategoryName = () => {
	const { categoryData } = useSelector((state) => state);

	const { currentCategory } = categoryData;

	const [name, setName] = useState("");

	useEffect(() => {
		if (currentCategory?.category_name === undefined) {
			setName("Select a category");
		} else {
			setName(currentCategory?.category_name);
		}
	}, [currentCategory]);

	const emptyCategory =`bg-msk-300 text-gray-500 text-ellipsis overflow-hidden max-w-[300px] text-2xl md:text-2xl px-3 mx-auto rounded-md italic font-bold`;
	const Category = `bg-msk-300 txt-msk-90 text-ellipsis overflow-hidden max-w-[300px] text-3xl md:text-3xl px-3 mx-auto rounded-md italic font-bold`;

	return (
		<div className="select-none bg-msk-800 w-64 max-w[90] m-auto rounded-md p-1">
			<p
				className={
					currentCategory?.category_name === undefined ? emptyCategory : Category
				}
			>
				{name}
			</p>
		</div>
	);
};

export default CategoryName;
