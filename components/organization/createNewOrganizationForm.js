import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import HelperText from "../helpers/helperText";
import BaseButton from "../interaction/Base-button";

const CreateNewOrganizationForm = () => {
	const {
		register,
		formState: { errors, isSubmitting, isValid },
	} = useForm({ mode: "onBlur" });

	const [buttonState, setButtonState] = useState(true);

	useEffect(() => {
		isValid === true ? setButtonState(false) : setButtonState(true);
	}, [isValid]);

	const handleClick_createNewOrganization = (e) => {
		e.preventDefault();
  console.log('create new organization button done!')

  
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
				text={"Create New organization"}
				disabled={buttonState}
				w_full
				p_xl
				onClick={(e) => handleClick_createNewOrganization(e)}
			/>
		</div>
	);
};

export default CreateNewOrganizationForm;
