import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  error: null,
  leaves: [],
};

const url = `https://sir.magicalfurnitures.co.ke/api`;
const token = localStorage.getItem('token');
const userId = localStorage.getItem('userId');

export const getFormData = createAsyncThunk('leave/personalDetails', async () => {
  try {
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    };

    const response = await axios.get(`${url}/applyLeave`, config);

    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to submit form');
  }
});

export const submitForm = createAsyncThunk('leave/submitForm', async (formData) => {
  try {
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    };

    const response = await axios.post(`${url}/submitDetails`, formData, config);

    return response.data;
  } catch (error) {
    throw new Error('Failed to submit form');
  }
});

// Get my all Leaves
export const getLeaves = createAsyncThunk('leave/GetLeaves', async () => {
  try {
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    };
    // console.log('fired');

    const response = await axios.get(`${url}/listLeaves`, config);
    // console.log(response.data);

    return response.data;
  } catch (error) {
    throw new Error('Failed to retrieve Leaves');
  }
});

// Get all Leaves Super User
export const getAllLeaves = createAsyncThunk('leave/GetAllLeaves', async () => {
  try {
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    };

    const response = await axios.get(`${url}/listLeaves`, config);
    console.log("From LeaveSlice:", response.data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to retrieve Leaves');
  }
});

// get Roles
export const getEmployeeRoles = createAsyncThunk('/getRoles', async () => {
  try {
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    };
    console.log('fired');

    const response = await axios.get(`${url}/getUsers`, config);
    // console.log(response.data);

    return response.data;
  } catch (error) {
    throw new Error('Failed to retrieve Roles');
  }
});

// update users roles and department
// get Roles
export const setEmployeeRoles = createAsyncThunk('/updateUser', async (userData, { rejectWithValue }) => {
  try {
    const { user_id, department, role } = userData;
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    };
    console.log(token);
    const response = await axios.put(`${url}/updateUser?user_id=${user_id}&department=${department}&role=${role}`,{}, config);
    console.log(response.data);
    return response.data;
  } catch (error) {
    // throw new Error('Failed to retrieve Roles');
    return rejectWithValue('Failed to Update User Role');
  }
});


// To be deleted

// export const getAllLeaves = createAsyncThunk('leave/GetLeaves', async () => {
//   try {
//     const userId = localStorage.getItem('userId');
//     const response = await axios.get(`${url}/getMyLeaves/${userId}`);
//     // const response = await axios.get(`${url}/getMyLeaves/110`);
//     return response.data;
//   } catch (error) {
//     throw new Error('Failed to retrieve Leaves');
//   }
// });


const formSlice = createSlice({
  name: 'LeaveForm',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(submitForm.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(submitForm.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });

    builder.addCase(submitForm.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(getLeaves.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(getLeaves.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.leaves = action.payload;
    });

    builder.addCase(getLeaves.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(getFormData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(getFormData.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.personal = action.payload;
    });

    builder.addCase(getFormData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    {/** get user Roles   */ }
    builder.addCase(getEmployeeRoles.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(getEmployeeRoles.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.employees = action.payload;
    });

    builder.addCase(getEmployeeRoles.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    {/** set user Roles   */ }
    builder.addCase(setEmployeeRoles.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(setEmployeeRoles.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload ? action.payload : 'Failed to update user';
    });
  },
});


export default formSlice.reducer;
