import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/Registration/RegistrationSlice';
import Output from './Output';
import Dashboard from './Dashboard';

const RegisterPage = ({setSelectedNavItem}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [job_id, setJob_id] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      job_id,
      password,
    };

    try {
      await dispatch(registerUser(userData));
      setTimeout(() => {
        navigate('/login');
      }, 5000);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className='relative'>
      {/* <Output /> */}
      <Dashboard />
      <div className=' absolute  top-[20%] left-[30%] flex justify-center items-center'>
        <div className="flex flex-col items-center mt-20 bg-gray-100">

          <form className="shadow-2xl rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <h2 className="font-bold mb-6">Register</h2>

            <div className="mb-4 flex flex-nowrap gap-4 items-baseline justify-end">
              <label className="mb-2 text-sm">Email :</label>
              <input
                className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/3 shadow appearance-none  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4 flex flex-nowrap gap-4 items-baseline justify-end">
              <label className="mb-2 text-sm">Job Id :</label>
              <input
                className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 w-2/3"
                type="tel"
                value={job_id}
                onChange={e => setJob_id(e.target.value)}
              />
            </div>

            <div className="mb-4 flex flex-nowrap gap-4 items-baseline justify-end">
              <label className="mb-2 text-sm">Password :</label>
              <input
                className="border p-2 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/3"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-4 flex flex-nowrap gap-4 items-baseline justify-end">
              <label className="mb-2 text-sm">Confirm Password </label>
              <input
                className="border p-2 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/3"
                type="password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
              />
            </div>

            <button className="shadow bg-[#283387] hover:bg-[#283387]focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">Register</button>
            <div class="md:w-2/3 mb-5"></div>
            Have an account?
            <Link to='/Login' className="hover:text-[#283280] font-bold"> Login</Link>
          </form>

        </div>
      </div>
    </div>


  )

}

export default RegisterPage;
