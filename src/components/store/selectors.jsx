import { createSelector } from "reselect";

export const isModalOpenSelector = state => state.isOpen.isOpen;

export const isModalOpenSelect = createSelector(isModalOpenSelector, (isOpen) => {

  return isOpen;
});

export const getUsersSelectors = state => state.addUsers.users;

export const usersSelect = createSelector(getUsersSelectors, (users) => {

  return users;
}
)

