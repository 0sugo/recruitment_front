import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Navbar from './Navbar';

const LoginPage = () => {

  const [jobId, setJobId] = useState('');
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


  }

  return (
    <div className='flex justify-center items-center mt-20'>
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
              value={jobId}
              onChange={(e) => setJobId(e.target.value)}
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
          <NavLink to="/register" class="hover:text-[#283387] font-bold"> Register</NavLink>
        </form>

      </div>

    </div>


  );
}

export default LoginPage;
