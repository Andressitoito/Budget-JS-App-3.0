import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import BaseButton from "../components/interaction/Base-button";
import { signIn } from "../features/auth/user";
import { useNotification } from "../hooks/notificationHook";

const HelperButtons = () => {
	const { user } = useSelector((state) => state);
	const dispatch = useDispatch();
	const dispatchNotification = useNotification();

	const router = useRouter();

	///////////////////////////////////
	// CALL FIND USER
	///////////////////////////////////
	const handleClickDatabaseCall = async (e) => {
		e.preventDefault();

		const email = 'andresledesma87@gmail.com'

		const response = await fetch("/api/database/users/find_user", {
			method: 'POST',
			body: JSON.stringify({ email }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await response.json();

		console.log(data);
	};

	///////////////////////////////////
	// CREATE NEW ORGANIZATION
	///////////////////////////////////
	const handleClick_createNewOrganization = async () => {
		const DUMMY_USER = {
			name: "Max",
			given_name: "Wai",
			family_name: "Mann",
			picture: "https://i.stack.imgur.com/2ixs2.png",
			email: "maxilares@max.com",
		};

		const DUMMY_ORGANIZATION = {
			organization: "AmilA",
			user: DUMMY_USER,
		};

		const response = await fetch("/api/data/create_new_organization", {
			method: "POST",
			body: JSON.stringify(DUMMY_ORGANIZATION),
			headers: {
				"Content-Type": "application/json",
			},
		});

		const data = await response.json();
		console.log("DATA FROM CREATE ORGANIZATION");
		console.log(data);
	};

	///////////////////////////////////
	// CREATE NEW USER
	///////////////////////////////////
	const handleClick_createNewUser = async (e) => {
		e.preventDefault();

		const DUMMY_USER = {
			name: "An",
			given_name: "RaK",
			family_name: "Erim",
			picture: "https://i.stack.imgur.com/2ixs2.png",
			email: "Merikf@Ova.com",
			organization_owner: 'Jhon'
		};

		const DUMMY_ORGANIZATION = {
			organization_id: "63fcf35baa8a76f2c87ed547d",
			user: DUMMY_USER,
		};

		const response = await fetch("/api/database/users/create_new_user", {
			method: "POST",
			body: JSON.stringify(DUMMY_ORGANIZATION),
			headers: {
				"Content-Type": "application/json",
			},
		});

		const data = await response.json();
		console.log("DATA FROM CREATE USER");
		console.log(data);
	};

	///////////////////////////////////
	// CREATE NEW TRANSACTION
	///////////////////////////////////
	const handleClick_createNewTransaction = async (e) => {
		e.preventDefault();

		const transaction = {
			category_id: "637fddc7b5985ce228c25984",
			organization_id: "637fddc7b5985ce228c132259e4",
			username: "Andrew",
			category_name: "culo",
			item: "potatoes",
			price: 200,
			date: "2022-11-24T03:00:00.000Z",
		};

		console.log(transaction);

		const response = await fetch("/api/data/create_new_transaction", {
			method: "POST",
			body: JSON.stringify({ transaction }),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();
		console.log("DATA FROM CREATE NEW TRANSACTION");
		console.log(data);
	};

	///////////////////////////////////
	// CREATE NEW CATEGORY
	///////////////////////////////////

	const handleClick_createNewCategory = async (e) => {
		e.preventDefault();

		dispatchNotification(
			"Pending",
			"Creating category in process"
		);

		const category = {
			category_name: "Food",
			organization_id: "637fddc7b5985ce228c132259e4",
			base_amount: 2000,
		};

		const response = await fetch("/api/data/create_new_category", {
			method: "POST",
			body: JSON.stringify({ category }),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();

		if (response.ok) {
			dispatchNotification(
				"Success",
				`${data.message}`
			);
		} else {
			dispatchNotification(
				"Error",
				`${data.message}`
			);
		}

		console.log(data);
	};

	///////////////////////////////////
	// USE EFFCT FOR NOTIFICATION
	///////////////////////////////////

	const setUser = () => {
		console.log("set User");

		dispatch(
			signIn({
				name: "jhon",
				lastname: "doe",
			})
		);
	};

	const showUser = () => {
		console.log("show user");

		console.log(user);
	};

	return (
		<>
			<div className="m-4 flex flex-wrap gap-3">
				<BaseButton
					onClick={(e) => handleClickDatabaseCall(e)}
					text={"Fetch Database"}
				/>

				<BaseButton
					onClick={(e) => handleClick_createNewOrganization(e)}
					text={"Create Organization"}
				/>

				<BaseButton
					onClick={(e) => handleClick_createNewUser(e)}
					text={"Create new User"}
				/>

				<BaseButton
					onClick={(e) => handleClick_createNewTransaction(e)}
					text={"new transaction"}
				/>

				<BaseButton
					onClick={(e) => handleClick_createNewCategory(e)}
					text={"new category"}
				/>

				<BaseButton onClick={(e) => setUser(e)} text={"Set user"} />

				<BaseButton onClick={(e) => showUser(e)} text={"Show user"} />
			</div>
		</>
	);
};

export default HelperButtons;
