import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const applyForJob = createAsyncThunk(
  'jobs/applyForJob',
  async ({ userId, jobId }) => {
    try {
      const response = await axios.post(
        `https://sir.magicalfurnitures.co.ke/api/applyJobs/${userId}/${jobId}`
      );

      if (response.data.success) {
        
        toast.success('Job applied successfully');
      } else {

        toast.warning('You have already applied the job');
      }

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {

        const errorMessage =
          error.response.data?.['Error!!!'] ||
          'Failed to apply for the job due to an error';
        toast.error(errorMessage);
      } else {
        // Non-Axios error
        toast.error('Failed to apply for the job');
      }

      throw error; // Re-throw the error to let Redux Toolkit handle it
    }
  }
);

const jobsSlice = createSlice({
  name: 'jobs',
  initialState: {
    AllJobs: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(applyForJob.pending, (state) => {
      })
      .addCase(applyForJob.fulfilled, (state) => {
      })
      .addCase(applyForJob.rejected, (state) => {
      });
  },
});

export default jobsSlice.reducer;
