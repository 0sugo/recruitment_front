import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
  AllJobs: [],
  isLoading: false,
};

const url = 'https://Sir.magicalfurnitures.co.ke/api';

export const fetchJobs = createAsyncThunk('fetch/Jobs', async () => {
  try {
    const response = await axios.get(`${url}/getJobs`);
    const resp = response.data;
    return resp;
  } catch (error) {
    throw new Error(error);
  }
});

export const postJob = createAsyncThunk('post/Job', async (jobData) => {
  try {
    const response = await axios.post(`${url}/postJobs`, jobData);
    const resp = response.data;
    toast.success('Job posted Successfully');
    return resp;
  } catch (error) {
    toast.error('Job NOT posted');
    throw new Error(error);
  }
});

const JobsSlice = createSlice({
  name: 'JobsSlice',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.AllJobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(postJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.AllJobs = [...state.AllJobs, action.payload];
      })
      .addCase(postJob.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default JobsSlice.reducer;
