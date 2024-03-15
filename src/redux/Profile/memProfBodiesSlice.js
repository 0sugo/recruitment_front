// membershipProfessionalBodiesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async Action Creator
export const submitMembershipProfessionalBodies = createAsyncThunk(
  'membershipProfessionalBodies/submitMembershipProfessionalBodies',
  async ({ userId, membershipProfessionalBodiesData }, { dispatch }) => {
    try {
      const response = await axios.post(`https://sir.magicalfurnitures.co.ke/api/professionalBody/${userId}`, membershipProfessionalBodiesData);
      // Handle success if needed
      return response.data;
    } catch (error) {
      throw error.message || 'An error occurred';
    }
  }
);

// Reducer
const membershipProfessionalBodiesSlice = createSlice({
  name: 'membershipProfessionalBodies',
  initialState: { loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitMembershipProfessionalBodies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitMembershipProfessionalBodies.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(submitMembershipProfessionalBodies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export default membershipProfessionalBodiesSlice.reducer;
