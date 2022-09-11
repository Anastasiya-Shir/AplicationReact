import { createSlice } from "@reduxjs/toolkit";


// import { applyMiddleware } from 'redux';
const toggleIsFetching = createSlice({

  name: "isLoading",
  initialState: {
    isLoading: { isLoading: false },
  },
  reducers: {
    isLoadingMovies(state, action) {
      state.isLoading = action.payload.isLoading;
      console.log(action.payload.isLoading)
    },
  }

})
export const { isLoadingMovies } = toggleIsFetching.actions;
// export default toggleIsFetching.reducer;
