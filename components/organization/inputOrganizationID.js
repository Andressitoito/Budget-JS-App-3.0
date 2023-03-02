import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import HelperText from "../helpers/helperText";
import BaseButton from "../interaction/Base-button";

const InputOrganizationID = () => {
	const {
		register,
		formState: { errors, isValid },
	} = useForm({ mode: "onBlur" });

	const [buttonState, setButtonState] = useState(true);

	useEffect(() => {
		isValid === true ? setButtonState(false) : setButtonState(true);
	}, [isValid]);

	const handleClick_joinOrganization = (e) => {
		e.preventDefault();
		console.log("join new organization button done!");
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
				text={"Join Organization"}
				disabled={buttonState}
				w_full
				p_xl
				onClick={(e) => handleClick_joinOrganization(e)}
			/>
		</div>
	);
};

export default InputOrganizationID;
