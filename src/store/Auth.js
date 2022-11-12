import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "categories",
  initialState: {
    value: false,
  },
  reducers: {
    loginUser: (state, action) => {
      state.value = action.payload.loggedIn;
    },
    logoutUser: (state, action) => {
      state.value = action.payload.loggedIn;
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
