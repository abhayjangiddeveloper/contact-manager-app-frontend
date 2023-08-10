import { createSlice } from "@reduxjs/toolkit";
import { IS_KEEP_ME_LOGGED_IN } from "../../../utils/constant";

//
const initialState = {
  isUserLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.isUserLoggedIn = true;
    },
    logoutUser: (state, action) => {
      state.isUserLoggedIn = false;
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
