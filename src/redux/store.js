import { configureStore } from '@reduxjs/toolkit';
import JobsReducer from './Jobs/JobsSlice'
import authReducer from './Registration/RegistrationSlice';
import workExperienceReducer from './Profile/workExperienceSlice';
import applicationsReducer from '../redux/Applications/applicationsSlice';
import leaveReducer from './Leave/LeaveSlice';

const store = configureStore({
  reducer: {
    allJobs: JobsReducer,
    auth: authReducer,
    workExperience: workExperienceReducer,
    applications: applicationsReducer,
    userApplications: applicationsReducer,
    leave:leaveReducer,

  },
});
export default store;
