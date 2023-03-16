import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { showNotification } from "../../features/Notifications/notifications";
import { useNotification } from "../../hooks/notificationHook";
import HelperText from "../helpers/helperText";
import BaseButton from "../interaction/Base-button";

const CreateNewOrganizationForm = ({ user_info }) => {
	const dispatchNotification = useNotification();
	const dispatch = useDispatch();
	const {
		register,
		getValues,
		formState: { errors, isValid },
	} = useForm({ mode: "onBlur" });

	const { user } = useSelector((state) => state);
	const [buttonState, setButtonState] = useState(true);

	useEffect(() => {
		isValid === true ? setButtonState(false) : setButtonState(true);
	}, [isValid]);

	const handleClick_createNewOrganization = async (e) => {
		e.preventDefault();

		dispatchNotification("Pending", "Creating User and Organization...");

		const { organization_owner, user: userExists } = user_info
		const { name, given_name, family_name, picture, email } = user;

		console.log(organization_owner)
		console.log(userExists)

		const user_org = {
			name,
			given_name,
			family_name,
			picture,
			email,
			organization_owner,
			userExists
		};

		const organization = {
			organization: getValues("organization_name"),
			user: user_org,
		};

		const DUMMY_USER = {
			name: 'Andrew',
			given_name: 'Leesme',
			family_name: 'Lesde',
			picture: 'https://media.istockphoto.com/id/1388548812/es/foto/despacho-de-abogados.jpg?s=612x612&w=0&k=20&c=NWJow52UUk-yoheW6tw-XRi8aarUcEjs8RH_j9_TjTs=',
			email: 'ale@dummy.com',
			organization_owner: false,
			userExists: false
		};

		const DUMMY_ORGANIZATION = {
			organization: getValues("organization_name"),
			user: DUMMY_USER,
		};

		const response = await fetch("/api/database/organizations/create_new_organization", {
			method: "POST",
			body: JSON.stringify(organization),
			headers: {
				"Content-Type": "application/json",
			},
		});

		const data = await response.json();

		if (response.ok) {
			dispatchNotification("Success", `${data.message}`);
		} else {
			dispatchNotification("Error", `${data.message}`);
		}

		console.log(data);
	};

	///////////////////////////////////
	// CALL FIND USER
	///////////////////////////////////
	const handleClickDatabaseCall = async (e) => {
		e.preventDefault();

		console.log(getValues("organization_name"));
		// const { name, given_name, family_name, picture, email } = user;

		// console.log(name, given_name, family_name, picture, email);

		const response = await fetch("/api/data/transactions");

		console.log(response.ok);
	};

	return (
		<div className="flex flex-wrap gap-3">
			<input
				type="text"
				name="organization_name"
				{...register("organization_name", {
					required: "Please insert an Organization Name",
				})}
				className="form-control block w-full px-4  font-normal bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
				placeholder="Organization Name"
			/>
			{errors.organization_name && (
				<HelperText>{errors.organization_name.message}</HelperText>
			)}
			<input
				type="text"
				name="authorization_token"
				{...register("authorization_token", {
					required: "Please insert a valid Authorization Token",
				})}
				className="form-control block w-full px-4  font-normal bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
				placeholder="Authorization Token"
			/>
			{errors.authorization_token && (
				<HelperText>{errors.authorization_token.message}</HelperText>
			)}
			<BaseButton
				text={"Create User and Organization"}
				disabled={buttonState}
				w_full
				p_xl
				onClick={(e) => handleClick_createNewOrganization(e)}
			/>

			{/* <BaseButton onClick={(e) => handleClickDatabaseCall(e)} text={"SHOW DATA"} /> */}
		</div>
	);
};

export default CreateNewOrganizationForm;
