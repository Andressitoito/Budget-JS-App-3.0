import { useState } from "react";
import CreateNewOrganization from "./createNewOrganizationForm";
import InputOrganizationID from "./inputOrganizationID";

const AccountInfo = () => {
	const [showOrganizationForm, setShowOrganizationForm] = useState(false);

	const handleClickCheckbox = () => {
		setShowOrganizationForm(!showOrganizationForm);
	};

	return (
		<>
			<div className="flex justify-center items-center mb-6">
				<input
					type="checkbox"
					className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
					id="organizationID"
					onClick={handleClickCheckbox}
				/>
				<label
					className="form-check-label text-lg inline-block txt-msk-200"
					htmlFor="organizationID"
				>
					Already have an organization ID?
				</label>
			</div>
			{showOrganizationForm ? <InputOrganizationID /> : <CreateNewOrganization />}
		</>
	);
};

export default AccountInfo;
