import OrganizationSelectionItem from "./organizationSelectionItem";

const OrganizationSelectionList = ({
	organizations_data,
	rememberSelection,
}) => {
	const { owner, guest } = organizations_data;

	const localStorageSaveOrganizationData = (organization_id) => {
		let BudgetAppJs_3_Org_Selection = {
			currentOrganization_id: null,
		};

		if (rememberSelection) {
			let organizationData = JSON.parse(
				localStorage.getItem("BudgetAppJs_3_Org_Selection")
			);

			if (organizationData === null) {
				localStorage.setItem(
					"BudgetAppJs_3_Org_Selection",
					JSON.stringify(BudgetAppJs_3_Org_Selection)
				);

				organizationData = JSON.parse(
					localStorage.getItem("BudgetAppJs_3_Org_Selection")
				);
			}

			organizationData = {
				currentOrganization_id: organization_id,
			};

			localStorage.setItem(
				"BudgetAppJs_3_Org_Selection",
				JSON.stringify(organizationData)
			);
		}
	};

	if (owner === "") {
		return (
			<>
				<div className="bg-msk-800 rounded-md flex flex-col gap-2 py-2 p-1 mx-auto w-80">
					{guest.map((organization) => (
						<OrganizationSelectionItem
							localStorageSaveOrganizationData={localStorageSaveOrganizationData}
							key={organization._id}
							organization_name={organization.organization}
							organization_id={organization._id}
						/>
					))}
				</div>
			</>
		);
	} else {
		return (
			<>
				<div className="bg-msk-800 rounded-md flex flex-col gap-2 py-2 p-1 mx-auto w-80">
					<OrganizationSelectionItem
						localStorageSaveOrganizationData={localStorageSaveOrganizationData}
						owner
						organization_name={owner.organization_name}
						organization_id={owner.organization_id}
					/>
					{guest.map((organization) => (
						<OrganizationSelectionItem
							localStorageSaveOrganizationData={localStorageSaveOrganizationData}
							key={organization._id}
							organization_name={organization.organization}
							organization_id={organization._id}
						/>
					))}
				</div>
			</>
		);
	}
};

export default OrganizationSelectionList;
