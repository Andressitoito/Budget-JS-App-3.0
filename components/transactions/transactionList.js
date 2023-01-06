import TransactionItem from "./transactionItem";

 
 
 
const TransactionList = () => {
 return (
  <div className="bg-msk-800 rounded-md flex flex-col gap-1 py-2 p-1 pt-0 w-72 mx-auto">
   <p>I am TransactionList</p>
   <TransactionItem/>
   <TransactionItem/>
   <TransactionItem/>
   <TransactionItem/>
   <TransactionItem/>
  </div>
 )
}
 
export default TransactionList;