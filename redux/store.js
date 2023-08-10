import { configureStore } from "@reduxjs/toolkit";
import drawerSlice from "./slice/drawerSlice";
import authenticationSlice from "./slice/authenticationSlice/authenticationSlice";

const store = configureStore({
  reducer: {
    drawer: drawerSlice,
    auth: authenticationSlice,
  },
});

export default store;
