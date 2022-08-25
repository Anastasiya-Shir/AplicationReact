import { createSlice } from "@reduxjs/toolkit";
const searchSlice = createSlice({
  name: "search",
  initialState: {
    search: [],
  },
  reducers: {
    getFilm(state, action) {
      console.log(state);
      console.log(action);
      state.search.push({
        searchFilms: action.payload.searchFilms,

      })
      console.log(action.payload)
    }
  }
})
export const { getFilm } = searchSlice.actions;
export default searchSlice.reducer;
