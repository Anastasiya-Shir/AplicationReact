import { createSlice } from "@reduxjs/toolkit"; let i = 0;
const searchSlice = createSlice({

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
export const { getFilm } = searchSlice.actions;
export default searchSlice.reducer;
