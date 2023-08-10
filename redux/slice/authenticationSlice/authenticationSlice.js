import { createSlice } from "@reduxjs/toolkit";
import { IS_KEEP_ME_LOGGED_IN } from "../../../utils/constant";

//
const initialState = {
  isUserLoggedIn: JSON.parse(localStorage.getItem(IS_KEEP_ME_LOGGED_IN)),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.isUserLoggedIn = true;
      localStorage.setItem(IS_KEEP_ME_LOGGED_IN, state.isUserLoggedIn);
    },
    logoutUser: (state, action) => {
      state.isUserLoggedIn = false;
      localStorage.setItem(IS_KEEP_ME_LOGGED_IN, state.isUserLoggedIn);
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
