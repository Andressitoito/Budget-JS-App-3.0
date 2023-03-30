const Category = require("../../pages/api/models/categoryModel");

export const check_category = async (category_id) => {
 try {
  const category = await Category.find({ _id: category_id });
  console.log("category FROM CATEGORY CHECK: ", category);
  if (category !== undefined) {
   console.log("category FROM CATEGORY CHECK: ", category);
   return category;
  } else {
   throw new Error();
  }
 } catch (error) {
  throw new Error(error);
 }
};
