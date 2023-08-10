import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    openDrawer: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeDrawer: (state) => {
      state.isOpen = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openDrawer, closeDrawer } = drawerSlice.actions;

export default drawerSlice.reducer;
