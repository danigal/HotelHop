import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
  mode: "light",
  user: null,
  token: null,
  scenarios: [],
  scenes: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },   
    
    setScenarios: (state, action) => { 
      state.scenarios = action.payload.scenarios;
    },

    setScenes: (state, action) => {
      state.scenes = action.payload.scenes;
    },
  }
});

export const { setMode, setLogin, setLogout, setScenarios, setScenes } =
  authSlice.actions;
export default authSlice.reducer;
