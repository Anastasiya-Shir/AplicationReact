import { configureStore } from '@reduxjs/toolkit';

import searchReducer from "./searchSlice";
import toggleIsFetchingReducer from './thunk/LoadingMovieList'
// import toggleIsFetchingReducer from "./toggleIsFetchingReducer"
export default configureStore({
  reducer: {
    search: searchReducer,
    AddMovies: toggleIsFetchingReducer,
  },

})
