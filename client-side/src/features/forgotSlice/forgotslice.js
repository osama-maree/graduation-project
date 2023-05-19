import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  role: "",
};

export const forgotSlice = createSlice({
  name: "setEmail",
  initialState,
  reducers: {
    setEmailRedux: (state, action) => {
      console.log(action);
      state.email = action.payload.email;
      state.role = action.payload.role;
    },
  },
});

export const { setEmailRedux } = forgotSlice.actions;
export default forgotSlice.reducer;
