import BaseButton from "../interaction/Base-button";

 
 
 
const CategoryActions = () => {
 return (
  <div className="flex justify-center flex-col gap-11">
   <div>
    <BaseButton text={"Edit category Name"} xs />
   </div>
   <div>
    <BaseButton text={"Edit Base Amount"} xs />
   </div>
   <div>
    <BaseButton text={"Delete all transactions"} xs  danger/>
   </div>
  </div>
 )
}
 
export default CategoryActions;