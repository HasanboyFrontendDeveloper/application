import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  loggedIn: false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //LOGIN
    loginUserStart: (state) => {
      state.isLoading = true;
      console.log("Login");
    },
    loginUserSuccess: (state) => {},
    loginUserFalure: (state) => {},
    //REGISTER
    registerUserStart: (state) => {
      state.isLoading = true;
      console.log('register');
    },
    registerUserSuccess: (state) => {},
    registerUserFalure: (state) => {},
  },
});

export const {
  loginUserStart,
  loginUserSuccess,
  loginUserFalure,
  registerUserStart,
  registerUserSuccess,
  registerUserFalure,
} = authSlice.actions;
export default authSlice.reducer;
