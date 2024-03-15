
import axios from 'axios';

export const fetchUserApplications = (userId) => async (dispatch) => {
  try {
    const response = await axios.get(`https://sir.magicalfurnitures.co.ke/api/getUserApplications/${userId}`);
    dispatch(setUserApplications(response.data));
  } catch (error) {
    console.error('Error fetching user applications:', error);
  }
};

export const setUserApplications = (userApplications) => ({
  type: 'SET_USER_APPLICATIONS',
  payload: userApplications,
});


const initialState = [];

const userApplicationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_APPLICATIONS':
      return action.payload;
    default:
      return state;
  }
};

export default userApplicationsReducer;
