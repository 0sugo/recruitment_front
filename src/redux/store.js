import { configureStore} from '@reduxjs/toolkit';
import JobsReducer from './Jobs/JobsSlice'
import authReducer from './Registration/RegistrationSlice';

const store = configureStore({
  reducer: {
    allJobs: JobsReducer,
    auth: authReducer,
  },
});
export default store;
