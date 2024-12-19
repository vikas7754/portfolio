import { createSlice } from "@reduxjs/toolkit";

export const theme = createSlice({
  name: "navbar",
  initialState: {
    active: 0,
  },
  reducers: {
    setActive: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const { setActive } = theme.actions;
export default theme.reducer;
