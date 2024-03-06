import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../interfaces";

interface UserForm extends User {
  password: string;
}
interface AuthState {
  isLoggedIn: boolean;
  user: UserForm | null;
  loginError: string | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
  loginError: null,
};

const mockUser = {
  email: "ola@no.com",
  name: "Daniel",
  id: "84h2uy4n43",
  password: "mipass123",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<UserForm>) {
      //WARNING!!  =>  MOCK USER, It should be validate ON SERVER //WARNING!!!
      const isValidUser =
        action.payload.email == mockUser.email &&
        action.payload.password == mockUser.password;
      if (isValidUser) {
        state.user = mockUser;
        state.isLoggedIn = true;
      } else {
        state.isLoggedIn = false;
        state.loginError = "User or email No validos";
      }
    },

    resetLogin(state) {
      state.isLoggedIn = false;
      state.user = null;
      state.loginError = null;
    },

    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
      state.loginError = null;
    },

    updateUser(state, action: PayloadAction<User>) {
      if (state.isLoggedIn && state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
  },
});

export const { login, resetLogin, logout, updateUser } =
  authSlice.actions;

export default authSlice.reducer;
