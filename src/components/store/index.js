import { configureStore } from '@reduxjs/toolkit';

import searchReducer from "./searchQuery";
import toggleIsFetchingReducer from './thunk/LoadingMovieList';
import modalSliceReducer from './ModalSlice/index';
import UsersSlice from './UsersSlice';
import { persistReducer } from 'redux-persist'
// import toggleIsFetchingReducer from "./toggleIsFetchingReducer"

// const persistConfig = {
//   key: 'root',
//   storage
// };

//const persistedReducer = persistReducer(persistConfig);


export default configureStore({
  reducer: {
    //reducer: persistedReducer,
    search: searchReducer,
    addMovies: toggleIsFetchingReducer,
    isOpen: modalSliceReducer,
    addUsers: UsersSlice,
  },

})
