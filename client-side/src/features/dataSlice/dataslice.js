import { createSlice } from "@reduxjs/toolkit";
// import cookie from "react-cookies";
// import cookies from "react-cookies";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  role: "",
};

export const dataSlice = createSlice({
  name: "getData1",
  initialState,
  reducers: {
    getDataPending: (state) => {
      state.isLoading = true;
    },
    getDataSuccess: (state, action) => {
      state.role = action.payload.role;
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
    },
    getDataFail: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.role = "";
    },
    clearRedux: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.role = "";
    },
  },
});

export const { getDataPending, clearRedux, getDataFail, getDataSuccess } =
  dataSlice.actions;
export default dataSlice.reducer;
