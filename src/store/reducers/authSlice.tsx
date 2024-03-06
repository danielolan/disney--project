import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
  loginError: string | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
  loginError: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    
    loginSuccess(state, action: PayloadAction<User>) {
      state.isLoggedIn = true;
      state.user = action.payload;
      state.loginError = null;
    },
    
    loginFailure(state, action: PayloadAction<string>) {
      state.isLoggedIn = false;
      state.user = null;
      state.loginError = action.payload;
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
    }
  }
});


export const { loginSuccess, loginFailure, logout, updateUser } = authSlice.actions;


export default authSlice.reducer;
