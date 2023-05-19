import { createSlice } from "@reduxjs/toolkit";
// import cookie from "react-cookies";
// import cookies from "react-cookies";

const initialState = {
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
    },
    logOut: (state) => {
      state.token = "";
    },
  },
});

export const { loginSuccess, logOut } = authSlice.actions;
export default authSlice.reducer;
