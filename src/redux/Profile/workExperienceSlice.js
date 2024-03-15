// workExperienceSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async Action Creator
export const submitWorkExperience = createAsyncThunk(
  'workExperience/submitWorkExperience',
  async ({ userId, workExperienceData }, { dispatch }) => {
    try {
      const response = await axios.post(`https://sir.magicalfurnitures.co.ke/api/postExperience/${userId}`, workExperienceData);
      // Handle success if needed
      return response.data; // You can modify this based on your backend response structure
    } catch (error) {
      throw error.message || 'An error occurred';
    }
  }
);

// Reducer
const workExperienceSlice = createSlice({
  name: 'workExperience',
  initialState: { loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitWorkExperience.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitWorkExperience.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(submitWorkExperience.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export default workExperienceSlice.reducer;
