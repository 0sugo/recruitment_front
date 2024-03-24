import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
  user: null,
  error: null,
};

export const registerUser = (userData) => async (dispatch) => {

  try {
    const response = await axios.post('https://sir.magicalfurnitures.co.ke/api/register', userData);

    if ('failed' in response.data) {

      toast.error('Registration Failed');
      dispatch({ type: 'REGISTER_FAIL', payload: 'Registration Failed' });

    } else {

      toast.success('Registration Successful');
      dispatch({ type: 'REGISTER_SUCCESS', payload: response.data });

    }
    return response.data;
  } catch (error) {
    toast.error('Registration Failed');
    dispatch({ type: 'REGISTER_FAIL', payload: error.message });
  }
};


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    case 'REGISTER_FAIL':
      return {
        ...state,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
