import { useDispatch, useSelector } from "react-redux";
import { updateCategoryListState } from "../../features/Category/categoryList";
import { getTransactionListbyId } from "../../features/Transactions/getTransactionList";
import BaseButton from "../interaction/Base-button";


const DUMMY_DATA_CATEGORY_LIST = [
 {
  _id: "637fddc7b5985ce21231228c25984",
  _id_organization: "637fddc7b5985ce228ec259842",
  categoryName: "Food",
  baseAmount: 21231,
  transactions: [{}],
 },
 {
  _id: "637fddc7b5985ce22312328c25984",
  _id_organization: "637fddc7b5985ce22e8c2598423",
  categoryName: "Dates",
  baseAmount: 111231,
  transactions: [{}],
 },
 {
  _id: "637fddc7b5985ce228c231225984",
  _id_organization: "637fddc7b5985cee228c25984123",
  categoryName: "Extra",
  baseAmount: 12331,
  transactions: [{}],
 },
];



const HelperButtons = () => {

 const { categoryList, getTransactionList } = useSelector((state) => state)

 const dispatch = useDispatch()

 const onClick = () => {
  dispatch(updateCategoryListState(DUMMY_DATA_CATEGORY_LIST))
 }

 const showCurrentCategoryState = () => {
  console.log(categoryList)
 }

 const getTransactionListButton = () => {
  dispatch(getTransactionListbyId())
 }

 const showTransactionList = () => {
  console.log(getTransactionList)
 }

 return (
  <div>
   <BaseButton text={'Set current category name'} onClick={() => {
    onClick()
   }} />
   <BaseButton text={'Show current category state'} onClick={() => {
    showCurrentCategoryState()
   }} />
   <BaseButton text={'Get Trans List curr budget'} onClick={() => {
    getTransactionListButton()
   }} />
   <BaseButton text={'show Trans List curr budget'} onClick={() => {
    showTransactionList()
   }} />
  </div>
 )
}

export default HelperButtons;