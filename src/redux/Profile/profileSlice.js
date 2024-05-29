// profile.js
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const token = localStorage.getItem('token');
const userId = localStorage.getItem('userId');

export const postPersonalDetails = (personalDetails,userId) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    };
    const response = await axios.post(`https://magicalfurnitures.co.ke/recruitment/public/api/personalDetails/${userId}`, personalDetails, config);

    dispatch(updatePersonalDetails(response.data));
  } catch (error) {
    console.error('Error posting personal details:', error);
  }
};

const initialState ={
  id_no:'' ,
  salutation:'' ,
  name:'' ,
  date_of_birth:'' ,
  gender:'',
  ethnicity:'' ,
  pwd_status:'' ,
  county:'' ,
  constituency:'' ,
  sub_county:'' ,
  ward:'' ,
  postal_address:'' ,
  postal_code:'' ,
  postal_town:'' ,
  isntitution_category:'' ,
  public_institution:'' ,
  station:'' ,
  employment_number:'' ,
  present_designation:'' ,
  current_appointment_date:'' ,
  previous_effective_date:'' ,
  previous_designation:'' ,
  job_group:'' ,
  terms_of_service:''
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updatePersonalDetails: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetProfile: (state) => {
      return initialState;
    },
  },
});

export const { updatePersonalDetails, resetProfile } = profileSlice.actions;
export default profileSlice.reducer;
