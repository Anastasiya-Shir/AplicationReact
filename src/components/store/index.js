import { configureStore } from '@reduxjs/toolkit';

import searchReducer from "./searchQuery";
import toggleIsFetchingReducer from './thunk/LoadingMovieList';
import modalSliceReducer from './ModalSlice/index';
// import toggleIsFetchingReducer from "./toggleIsFetchingReducer"
export default configureStore({
  reducer: {
    search: searchReducer,
    addMovies: toggleIsFetchingReducer,
    isOpen: modalSliceReducer,
  },

})
