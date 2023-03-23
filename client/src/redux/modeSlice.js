import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "mode",
  initialState: {
    model: "light",
  },
  reducers: {
    setMode: (state) => {
      state.model = state.model === "light" ? "dark" : "light";
    },
  },
});

export const { setLogin, setLogout } = userSlice.actions;

export default userSlice.reducer;
