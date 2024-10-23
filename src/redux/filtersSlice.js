import { createSlice } from "@reduxjs/toolkit";

export const selectNameFilter = (state) => state.filters.name;

const slice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
});

export default slice.reducer;
