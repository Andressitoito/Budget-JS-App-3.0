import BaseButton from "../interaction/Base-button";

 
 
 
const TransactionItemActions = () => {
 return (
  <div className="flex flex-col gap-3">
   <BaseButton text={'Edit'} xs p_xs/>
   <BaseButton text={'Delete'} danger xs p_xs/>
  </div>
 )
}
 
export default TransactionItemActions;