import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  AllJobs: [],
  isLoading: false,
};

const url = 'https://finalspaceapi.com/api/v0/episode/';

export const fetchJobs = createAsyncThunk('fetch/Jobs', async () => {
  try {
    const response = await axios(url);
    const resp = response.data;
    console.log(resp);
    return resp;
  } catch (error) {
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
        // console.log(action.payload)
      })
      .addCase(fetchJobs.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default JobsSlice.reducer;
