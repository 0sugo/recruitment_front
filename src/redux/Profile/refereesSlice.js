import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async Action Creator
export const submitReferees = createAsyncThunk(
  'referees/submitReferees',
  async ({ userId, refereeData }, { dispatch }) => {
    console.log(userId + '' + refereeData);
    try {
      const response = await axios.post(`https://sir.magicalfurnitures.co.ke/api/postReferees/${userId}`, refereeData);
      // Handle success if needed
      return response.data;
    } catch (error) {
      throw error.message || 'An error occurred';
    }
  }
);

// Reducer
const refereeSlice = createSlice({
  name: 'referees',
  initialState: { loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitReferees.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitReferees.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(submitReferees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export default refereeSlice.reducer;
