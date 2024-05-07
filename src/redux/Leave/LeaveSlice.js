import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  error: null,
  leaves: [],
};

const url = `https://sir.magicalfurnitures.co.ke/api`;

export const submitForm = createAsyncThunk('leave/submitForm', async (formData) => {
  try {
  const userId = localStorage.getItem('userId');
    const response = await axios.post(`${url}/createLeaveApplication/${userId}`, formData);
    return response.data;
  } catch (error) {
    throw new Error('Failed to submit form');
  }
});

export const getLeaves = createAsyncThunk('leave/GetLeaves', async() => {
  try {
  const userId = localStorage.getItem('userId');
    const response = await axios.get(`${url}/getMyLeaves/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to retrieve Leaves');
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
    builder.addCase(getLeaves.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(getLeaves.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      // Assuming that the fetched leaves data is stored in action.payload
      state.leaves = action.payload;
    });

    builder.addCase(getLeaves.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});


export default formSlice.reducer;
