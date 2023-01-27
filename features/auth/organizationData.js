import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 organization: "the jacksons",
 _id: "6380bad817f10e2eb4598c9b",
 _id_organization: "6380bad817f10e2eb4598c9b",
 users : [
  {
   username: "michael jackson",
   _id: "6380bad817f1asd0e2eb4598c9b",
  },
  {
   username: "andrew jackson",
   _id: "6380bad817f10e2faseb4598c9b",
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