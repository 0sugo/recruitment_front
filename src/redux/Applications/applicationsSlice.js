import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  AllApplications: [],
  isLoading: false,
  error: null,
};

export const fetchApplications = createAsyncThunk('fetch/Applications', async (userId) => {
  try {
    const response = await axios.get(`https://sir.magicalfurnitures.co.ke/api/getUserApplications/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
});

export const fetchAllApplications = createAsyncThunk('fetch/Applications', async (userId) => {
  try {
    const response = await axios.get(`https://sir.magicalfurnitures.co.ke/api/getAllApplications`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
});

export const changeApplicationStatus = createAsyncThunk('applications/changeApplicationStatus', async ({ userId, jobId, status }) => {
  try {
    const response = await axios.post(`https://sir.magicalfurnitures.co.ke/api/jobStatus/${userId}/${jobId}/${status}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
});

export const fetchUserDetails = createAsyncThunk('applications/fetchUserDetails', async (userId) => {
  try {
    const response = await axios.get(`https://sir.magicalfurnitures.co.ke/api/getUserDetails/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
});

// https://sir.magicalfurnitures.co.ke/api/getUserApplications/user_id

const ApplicationsSlice = createSlice({
  name: 'ApplicationsSlice',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchApplications.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchApplications.fulfilled, (state, action) => {
        state.isLoading = false;
        state.AllApplications = action.payload;
        state.error = null;
      })
      .addCase(fetchApplications.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(changeApplicationStatus.pending, (state) => {
        // Handle pending state if needed
      })
      .addCase(changeApplicationStatus.fulfilled, (state, action) => {
        // Update the application status in the state
        // For example, find the application by ID and update its status
        const updatedApplications = state.AllApplications.map((application) =>
          application.id === action.payload.id ? { ...application, status: action.payload.status } : application
        );
        state.AllApplications = updatedApplications;
      })
      .addCase(changeApplicationStatus.rejected, (state, action) => {
        // Handle rejected state if needed
      })
      .addCase(fetchUserDetails.pending, (state) => {
        state.isLoadingUserDetails = true;
        state.errorUserDetails = null;
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.isLoadingUserDetails = false;
        state.userDetails = action.payload;
      })
      .addCase(fetchUserDetails.rejected, (state, action) => {
        state.isLoadingUserDetails = false;
        state.errorUserDetails = action.error;
      });

  },
});

export default ApplicationsSlice.reducer;
