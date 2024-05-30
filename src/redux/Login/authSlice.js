import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = (job_id, password) => async (dispatch) => {
  try {
    const response = await axios.post('https://sir.magicalfurnitures.co.ke/api/login', { job_id, password });

    const token = response.data.authorzation.token;
    const userId = response.data.user_id;
    const role = response.data.roles;
    const userExists = response.data.user_exists;
    {/** Added the userExists to localStorage */}
    localStorage.setItem('profile',  userExists);
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
    localStorage.setItem('role', role);
    return {token,userId,role} ;

  } catch (error) {
    dispatch(setError(error.response ? error.response.data.message : 'An error occurred'));
    throw error;
  }
};



export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('token'),
    isAuthenticated: localStorage.getItem('token') ? true : false,
    loading: false,
    error: null,
    expiration: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
    },

    setLoading: (state) => {
      state.loading = true;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
      state.expiration = null;
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
    },
  },
});


export const { setToken, setLoading, setError, logout } = authSlice.actions;

export const selectToken = (state) => state.auth.token;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectLoading = (state) => state.auth.loading;
export const selectError = (state) => state.auth.error;
export const selectExpiration = (state) => state.auth.expiration;

export default authSlice.reducer;
