import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	currentOrganization_id: null,
};

const organizationDataSlice = createSlice({
	name: "organizationData",
	initialState: initialState,
	reducers: {
		updateOrganizationData: (state, action) => {
			console.log(action.payload)
			return state = {
				currentOrganization_id: action.payload,
			};
		},
	},
});

export const { updateOrganizationData } = organizationDataSlice.actions;

export default organizationDataSlice.reducer;
