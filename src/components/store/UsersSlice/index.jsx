import { createSlice } from "@reduxjs/toolkit"; let i = 0;
const userSlice = createSlice({

  name: "UserInfo",
  initialState: {
    users: [],
  },
  reducers: {
    addNewUser(state, action) {
      state.UserInfo = action.payload;
      console.log('addUser');

      console.log(action.payload.email, 'addUser');
      state.users.push({
        email: action.payload.email,
        firstName: [],
        lastName: [],
        phone: action.payload.lastName,
        password: [],


      })
    }
  }
});
export const { addNewUser } = userSlice.actions;
export default userSlice.reducer;
