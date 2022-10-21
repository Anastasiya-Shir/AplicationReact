import { createSelector } from "reselect";

export const isModalOpenSelector = state => state.isOpen.isOpen;

export const isUserAuthselect = state => state.authorized.email;

export const isModalOpenSelect = createSelector(isModalOpenSelector, (isOpen) => {

  return isOpen;
});

export const getUsersSelectors = state => state.addUsers.users;

export const usersSelect = createSelector(getUsersSelectors, (users) => {

  return users;
}
);

export const isUserAuth = createSelector(isUserAuthselect, (auth) => {
  return auth;
}
)
