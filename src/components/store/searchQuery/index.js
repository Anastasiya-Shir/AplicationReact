import { createSlice } from "@reduxjs/toolkit"; let i = 0;
const searchQuery = createSlice({

  name: "search",
  initialState: {
    search: [],
  },
  reducers: {
    getFilm(state, action) {

      state.search.push({
        id: ++i,
        searchFilms: action.payload.inputSearch,
      })
    }
  }
})
export const { getFilm } = searchQuery.actions;
export default searchQuery.reducer;
