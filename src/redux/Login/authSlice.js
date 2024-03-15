import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = (job_id, password) => async (dispatch) => {
  try {
    const response = await axios.post('https://sir.magicalfurnitures.co.ke/api/login', { job_id, password });
    localStorage.setItem('userId', response.data.id);

    dispatch(setToken(response.data.token));
    return response.data.id;
  } catch (error) {
    dispatch(setError(error.response ? error.response.data.message : 'An error occurred'));
    throw error; // Rethrow the error to handle it in the component
  }
};

const calculateExpiration = () => {
  const expirationTime = new Date();
  expirationTime.setHours(expirationTime.getHours() + 1);
  return expirationTime;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('token') || null,
    isAuthenticated: localStorage.getItem('token') ? true : false,
    loading: false,
    error: null,
    expiration: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
      state.expiration = action.payload.expiration || calculateExpiration();
      localStorage.setItem('token', action.payload);
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
