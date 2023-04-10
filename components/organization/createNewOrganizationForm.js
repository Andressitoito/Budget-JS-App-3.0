import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNotification } from "../../hooks/notificationHook";
import HelperText from "../helpers/helperText";
import BaseButton from "../interaction/Base-button";

const CreateNewOrganizationForm = ({ user_info, setActiveTab }) => {
	const dispatchNotification = useNotification();
	const {
		register,
		getValues,
		formState: { errors, isValid },
	} = useForm({ mode: "onBlur" });

	const { user } = useSelector((state) => state);
	const [buttonState, setButtonState] = useState(true);
	const [enableButton, setEnableButton] = useState(true);

	useEffect(() => {
		isValid === true ? setButtonState(false) : setButtonState(true);

		if (Object.keys(user_info).length != 0 && buttonState === false) {
			setEnableButton(false);
		} else {
			setEnableButton(true);
		}
	}, [isValid, user_info, buttonState]);

	const handleClick_createNewOrganization = async (e) => {
		e.preventDefault();

		dispatchNotification("Pending", "Creating User and Organization...");

		const { organization_owner, user: userExists } = user_info;
		const { name, given_name, family_name, picture, email } = user;

		const user_org = {
			name,
			given_name,
			family_name,
			picture,
			email,
			organization_owner,
			userExists,
		};

		const organization = {
			organization: getValues("organization_name").trim(),
			authorization_token: getValues("authorization_token").trim(),
			user: user_org,
		};

		const response = await fetch(
			"/api/database/organizations/create_new_organization",
			{
				method: "POST",
				body: JSON.stringify(organization),
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		const data = await response.json();
		console.log(data)

		if (response.ok) {
			dispatchNotification("Success", `${data.message}`);
			setActiveTab('signin')
		} else {
			dispatchNotification("Error", `${data.error}`);
		}
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
				disabled={enableButton}
				w_full
				p_xl
				onClick={(e) => handleClick_createNewOrganization(e)}
			/>
		</div>
	);
};

export default CreateNewOrganizationForm;
