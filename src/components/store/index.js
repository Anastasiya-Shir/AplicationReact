import { configureStore } from '@reduxjs/toolkit';

import searchReducer from "./searchSlice"
import errorReducer from "./errorSlice"
export default configureStore({
  reducer: {
    search: searchReducer,
    error: errorReducer,
  },

})
