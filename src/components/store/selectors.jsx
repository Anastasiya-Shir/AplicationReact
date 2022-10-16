import { createSelector } from "reselect";




export const isModalOpenSelector = state => state.isOpen.isOpen;

export const isModalOpenSelect = createSelector(isModalOpenSelector, (isOpen) => {

  return isOpen;
});

export const getUsersSelectors = state => state.addUsers.users;
export const newUserInfo = state => state.newUserInfo.email;

export const usersSelect = createSelector(getUsersSelectors, newUserInfo, (users, email) => {
  console.log(users, "users")
  console.log(email, "email")
  console.log(users.find(item => item.email === email), "i m heree")

  if ((users.find(item => item.email === email) === undefined) && email != "" || users === []) {
    console.log("im false")
    return false;
  } else {
    console.log("im true")
    return true;
  }
}
)

