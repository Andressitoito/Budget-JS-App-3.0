import CategoryItem from "./categoryItem";

const CategoryList = (props) => {
	const { categoryNameList } = props;

	return (
		<section className="mt-2 flex flex-col gap-2">
			{categoryNameList.map((category) => (
				<CategoryItem key={category._id} _id={category._id} categoryName={category.categoryName} />
			))}
		</section>
	);
};

export default CategoryList;
