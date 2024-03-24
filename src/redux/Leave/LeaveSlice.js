import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  error: null,
};

export const submitForm = createAsyncThunk('leave/submitForm', async (formData) => {
  try {
    const response = await axios.post('your-backend-url', formData);
    return response.data;
  } catch (error) {
    throw new Error('Failed to submit form');
  }
});

const formSlice = createSlice({
  name: 'LeaveForm',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(submitForm.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(submitForm.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });

    builder.addCase(submitForm.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});


export default formSlice.reducer;
