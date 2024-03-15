// qualificationSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async Action Creator
export const submitQualification = createAsyncThunk(
  'qualification/submitQualification',
  async ({ userId, qualificationData }, { dispatch }) => {
    console.log(userId+''+qualificationData)
    try {
      const response = await axios.post(`https://sir.magicalfurnitures.co.ke/api/professionalQualification/${userId}`, qualificationData);
      // Handle success if needed
      return response.data; // You can modify this based on your backend response structure
    } catch (error) {
      throw error.message || 'An error occurred';
    }
  }
);

// Reducer
const qualificationSlice = createSlice({
  name: 'qualification',
  initialState: { loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitQualification.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitQualification.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(submitQualification.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export default qualificationSlice.reducer;
