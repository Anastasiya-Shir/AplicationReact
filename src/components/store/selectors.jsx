import { createSelector } from "reselect";

export const isModalOpenSelector = state => state.isOpen.isOpen;

export const isUserAuthselect = state => state.authorized.email;

export const searchFilms = state => state.search.search;

export const authoriz = state => state.authorized.email;

export const list = state => state.addMovies.films;

export const statusMovie = state => state.addMovies.status;

export const errorMovie = state => state.addMovies.error;

export const itemMovie = state => state.addMovies.films;


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

export const findfilm = createSelector(list, searchFilms, (items, search) => {
  return items.filter(item =>
    item.acronym.toUpperCase().includes(search.toUpperCase()))
})
