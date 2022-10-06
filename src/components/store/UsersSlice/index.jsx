import { createSlice } from "@reduxjs/toolkit"; let i = 0;
const userSlice = createSlice({

  name: "UserInfo",
  initialState: {
    users: [],
  },
  reducers: {
    addNewUser(state, action) {
      state.users.push({
        email: action.payload.email,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        phone: action.payload.phonemail,
        password: action.payload.password,
        isAuth: false,
      })
    },
    isNotAuth(state, action) {
      state.users.forEach(function (item) {
        item.isAuth = false;
        console.log(item.isAuth, "isAuth");
      })
    },

    isAuth(state, action) {

      let index = state.users.findIndex(item => item.email === action.payload.email)



      console.log(state.users[0], "isAuthind000");
      console.log(state.users[index], "isAuthind");
      console.log(index, 'index')
      state.users[index].isAuth = true;
      //console.log(state.users, "isAuth");

    }

  }
});
export const { addNewUser, isAuth, isNotAuth } = userSlice.actions;
export default userSlice.reducer;
