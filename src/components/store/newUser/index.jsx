import { createSlice } from "@reduxjs/toolkit"; let i = 0;
const newUser = createSlice({

  name: "newUser",
  initialState: {
    email: "",
  },
  reducers: {
    newUserInfo(state, action) {

      state.email = action.payload.email;
    }
  }
})
export const { newUserInfo } = newUser.actions;
export default newUser.reducer;
