import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import modeReducer from "./modeSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    mode: modeReducer,
  },
});
