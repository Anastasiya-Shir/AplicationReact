import { createSlice } from "@reduxjs/toolkit";
const isUserAuthorized = createSlice({

  name: "authorized",
  initialState: {
    email: " ",
  },
  reducers: {
    isUserAuthoriz(state, action) {
      state.email = action.payload.email;

    }
  }
})
export const { isUserAuthoriz } = isUserAuthorized.actions;
export default isUserAuthorized.reducer;
