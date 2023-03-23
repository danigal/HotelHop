import { createSlice } from "@reduxjs/toolkit";

export const modeSlice = createSlice({
  name: "mode",
  initialState: {
    mode: "light",
  },
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = modeSlice.actions;

export default modeSlice.reducer;
