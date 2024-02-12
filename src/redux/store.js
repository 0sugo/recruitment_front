import { configureStore } from '@reduxjs/toolkit';
import JobsReducer from './Jobs/JobsSlice'

const store = configureStore({
  reducer: {
    allJobs: JobsReducer,

  },
});
export default store;
