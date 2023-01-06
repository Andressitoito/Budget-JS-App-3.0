import BaseButton from "../interaction/Base-button";
import TransactionList from "../transactions/transactionList";
import CategoryCurrentBudget from "./categoryCurrentBudget";




const CategoryDetails = () => {
 return (
  <div className="flex flex-col gap-6 justify-center 
  bg-gradient-to-b rounded-md bg-msk-500">
   <p>I am CategoryDetails</p>
   <CategoryCurrentBudget />
   <div>
   <BaseButton text={"New Item"} success/>
   </div>
   <TransactionList />
  </div>
 )
}

export default CategoryDetails;