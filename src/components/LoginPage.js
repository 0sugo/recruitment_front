import { useState, useEffect } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setError, setToken, logout, selectExpiration } from '../redux/Login/authSlice';
import { login as loginAction, selectIsAuthenticated } from '../redux/Login/authSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Output from './Output';
import Dashboard from './Dashboard';

const LoginPage = ({setSelectedNavItem}) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const navigate = useNavigate();
  const expiration = useSelector(selectExpiration);

  const [job_id, setJob_id] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const storedRememberMe = localStorage.getItem('rememberMe');
    if (storedRememberMe) {
      setRememberMe(true);
    }
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoading());

    try {
      const {token,userId} = await dispatch(loginAction(job_id, password));
      dispatch(setToken({ token }));
      
      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId);


      if (token === 'admin') {
        navigate('/admin');
      } else if (token){
        navigate('/home');
      }

      toast.success('Login successful');

    } catch (error) {
      dispatch(setError(error.message));

      if (error.response && error.response.data && error.response.data.message === 'Unauthorized') {
        toast.error('Incorrect password or Username. Please try again.');
      } else {
        toast.error('Login failed. Please try again.');
      }
    }
  };


  return (
    <div className='relative'>
    {/* <Output /> */}
    <Dashboard />

    <div className='absolute  top-[20%] left-[30%] flex justify-center items-center mt-20'>
      <div className='flex flex-col items-center bg-gray-100'>
        <form className="shadow-2xl rounded px-24 pb-6 mb-4" onSubmit={handleSubmit}>
          <h2 className=" font-bold mb-6">Login </h2>

          <div className="mb-4 flex flex-nowrap gap-4 items-baseline justify-end">
            <label className='mb-2 text-sm' htmlFor='jobId'>
              Job Id :
            </label>
            <input className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/3 shadow appearance-none  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter your job Id"
              value={job_id}
              onChange={(e) => setJob_id(e.target.value)}
            />
          </div>
          <div className="mb-4 flex flex-nowrap gap-4 items-baseline justify-end">
            <label className='text-gray-750  mb-2 text-sm' htmlFor="password">
              Password :
            </label>
            <input className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-2/3
        shadow appearance-none  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Enter  Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <label>Remember Me </label>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />

          <div class="md:w-2/3 mb-4"></div>
          <button class="shadow bg-[#283387] hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
            Log in
          </button>
          <div class="md:w-2/3 mb-5"></div>
          <Link to="#" className='hover:text-[#283387] font-bold'>Forgot password?</Link>
          <div class="md:w-2/3 mb-5"></div>
          Dont have an account?
          <Link to='/register' class="hover:text-[#283387] font-bold"> Register</Link>
        </form>

      </div>

    </div>
    </div>


  );
}

export default LoginPage;
