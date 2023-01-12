import TransactionItem from "./transactionItem";

 
 
 
const TransactionList = () => {
 return (
  <div className="bg-msk-800 rounded-md flex flex-col gap-1 py-2 p-1 mx-auto w-72">
   <TransactionItem/>
   <TransactionItem/>
   <TransactionItem/>
   <TransactionItem/>
   <TransactionItem/>
  </div>
 )
}
 
export default TransactionList;