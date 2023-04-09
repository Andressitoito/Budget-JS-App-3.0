import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../../features/auth/user";
import BaseButton from "../../interaction/Base-button";

const HelperContainer = () => {
 const dispatch = useDispatch();
 const { user, getTransactionList } = useSelector((state) => state);

 const setUserData = () => {
  dispatch(
   signIn({
    _id: "6418e62930a356ee6570ffb2",
    organization_id: "6418e62930a356ee6570ffb0",
    organization_owner: "Andresitos",
    name: "Andres Ledesma",
    given_name: "Andres",
    family_name: "Ledesma",
    picture:
     "https://lh3.googleusercontent.com/a/AGNmyxbCB3DNEHCnJrxn5M3lmAYdO9SAEUZ478aR8Asy=s96-c",
    email: "andresledesma87@gmail.com",
    createdAt: "2023-03-20T20:03:28.299Z",
    lastLogin: "2023-03-20T23:03:05.626Z",
    guest_organizations: [
     {
      _id: "641a4fc6df07427f20613f80",
      organization: "Miritas",
     },
    ],
    __v: 0,
   })
  );
  console.log("userUpdated");
  console.log(user);
 };

 const showTransactions = async () => {
  const category_id = "641fa6d728335316c20f3ce6";

  const response = await fetch(
   "/api/database/transactions/get_transactions_list",
   {
    method: "POST",
    body: JSON.stringify({ category_id }),
    headers: {
     "Content-Type": "application/json",
    },
   }
  );
  const data = await response.json();

  console.log(data);
 };

 const createTransaction = async () => {

  const transaction = {
   category_id: '641fa6d728335316c20f3ce6',
   organization_id: '6418e62930a356ee6570ffb0',
   username: "Andrew",
   item: 'Bucket',
   price: 34,
  }

  const response = await fetch('/api/database/transactions/create_transaction', {
   method: "POST",
   body: JSON.stringify({ transaction }),
   headers: {
    'Content-Type': 'application/json'
   }
  })
  const data = await response.json()

  console.log(data)
 }

 const showReduxTransactions = async () => {
  console.log(getTransactionList)
 }

 const showCategories = async () => {
  
  const organizationData = {
			organization_id: '6418e62930a356ee6570ffb0',
		};

		fetch(`/api/database/categories/get_all_categories`, {
			method: "POST",
			body: JSON.stringify(organizationData),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then(res => res.json())
			.then(data => {

				console.log(data)
			})


 }

 return (
  <div className="absolute bg-blue-300 p-1 rounded-lg w-60 text-center z-20">
   <p className="text-xl">I am HelperContainer</p>
   <div className="flex-col gap-1 text-center">
    <BaseButton
     text={"Set user data"}
     xs
     onClick={() => {
      setUserData();
     }}
    />
    <BaseButton
     text={"Show transactions"}
     xs
     onClick={() => {
      showTransactions();
     }}
    />
    <BaseButton
     text={"Create transaction"}
     xs
     onClick={() => {
      createTransaction();
     }}
    />
    <BaseButton
     text={"Show redux transactions"}
     xs
     onClick={() => {
      showReduxTransactions();
     }}
    />
    <BaseButton
     text={"Show Categories"}
     xs
     onClick={() => {
      showCategories();
     }}
    />
   </div>
  </div>
 );
};

export default HelperContainer;
