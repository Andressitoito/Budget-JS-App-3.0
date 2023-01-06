import CategoryItem from "./categoryItem";

const CategoryList = () => {
 const DUMMY_DATA = [
  {
   _id: "637fddc7b5985ce228c25984",
   _id_organization: "637fddc7b5985ce228c25984",
   categoryName: "Food",
   baseAmount: 21231,
   transactions: [{}],
  },
  {
   _id: "637fddc7b5985ce228c25984",
   _id_organization: "637fddc7b5985ce228c25984",
   categoryName: "Dates",
   baseAmount: 111231,
   transactions: [{}],
  },
  {
   _id: "637fddc7b5985ce228c25984",
   _id_organization: "637fddc7b5985ce228c25984",
   categoryName: "Extra",
   baseAmount: 12331,
   transactions: [{}],
  },
 ];
 return (
  <section className="
  ">
   <CategoryItem/>
   <CategoryItem/>
   <CategoryItem/>
   <CategoryItem/>
  </section>
 );
};

export default CategoryList;
