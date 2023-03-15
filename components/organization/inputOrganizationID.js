import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNotification } from "../../hooks/notificationHook";
import HelperText from "../helpers/helperText";
import BaseButton from "../interaction/Base-button";

const InputOrganizationID = () => {
	const { user } = useSelector((state) => state);
	const dispatchNotification = useNotification();
	const {
		register,
		getValues,
		formState: { errors, isValid },
	} = useForm({ mode: "onBlur" });

	const [buttonState, setButtonState] = useState(true);

	useEffect(() => {
		isValid === true ? setButtonState(false) : setButtonState(true);
	}, [isValid]);

	const handleClick_joinOrganization = async (e) => {
		e.preventDefault();

		const organization ={
			user,
			organization_id: getValues('join_organization')
		}

		dispatchNotification("Pending", "Creating user and joining organization");

		const response = await fetch("/api/data/create_new_user", {
			method: "POST",
			body: JSON.stringify({organization}),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json()

		console.log(data)

		if (response.ok) {
			dispatchNotification("Success", `${data.message}`);
		} else {
			dispatchNotification("Error", `${data.message}`);
		}

	};

	return (
		<div className="flex flex-wrap gap-3">
			<input
				type="text"
				name="join_organization"
				{...register("join_organization", {
					required: "Please insert a valid organization ID",
				})}
				className="form-control block w-full px-4  font-normal bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
				placeholder="Insert Organization ID"
			/>
			{errors.join_organization && (
				<HelperText>{errors.join_organization.message}</HelperText>
			)}
			<BaseButton
				text={"Create user and Join Organization"}
				disabled={buttonState}
				w_full
				p_xl
				onClick={(e) => handleClick_joinOrganization(e)}
			/>
		</div>
	);
};

export default InputOrganizationID;
