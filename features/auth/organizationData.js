import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 organization: "the jacksons",
 _id: "6380bad817f10e2eb4598c9b",
 _id_organization: "6380bad817f10e2eb4598c9b",
 users : [
  {
   username: "jackson",
   _id: "6380bad817f10e2eb4598c9b",
  },
  {
   username: "jackson",
   _id: "6380bad817f10e2eb4598c9b",
  }
 ]
}

const organizationDataSlice = createSlice({
 name: 'organizationData',
 initialState: initialState,
 reducers: {
  updateOrganizationData: (state) => {

  }
 }

})

export const {updateOrganizationData} = organizationDataSlice.actions

export default organizationDataSlice.reducer