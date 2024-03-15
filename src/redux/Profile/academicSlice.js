import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
  institution_name: '',
  education_level: '',
  admission_no:'',
  certificate_no:'',
  award:'',
  programme_name:'',
  grade:'',
  start_date: '',
  end_date: '',
};

export const postAcademicQualifications = (academicData, userId) => async (dispatch) => {
  try {
    const response = await axios.post(`https://sir.magicalfurnitures.co.ke/api/academicQualification/${userId}`, academicData);

    console.log('Server Response:', response.data);
    dispatch(updateAcademicQualifications(response.data));
  } catch (error) {
    console.error('Error posting academic qualifications:', error);
  }
};


const academicQualificationsSlice = createSlice({
  name: 'academicQualifications',
  initialState,
  reducers: {
    updateAcademicQualifications: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetAcademicQualifications: (state) => {
      return initialState;
    },
  },
});

export const { updateAcademicQualifications, resetAcademicQualifications } = academicQualificationsSlice.actions;
export default academicQualificationsSlice.reducer;
