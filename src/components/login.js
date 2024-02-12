import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function LoginPage() {

  const [pscNumber, setPscNumber] = useState('');
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
    
 <div className="flex flex-col   h-screen bg-gray-100">
  <nav className="bg-gray-100 text-white fixed top-0 right-0 items-left items-left p-4">
      
        <div>
        <Link to="/register">
        <button className="bg-purple-500 text-white px-4 py-2 rounded">
          Sign up
        </button>
      </Link> 
        </div>
  </nav> 
   <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
    <form className="shadow-2xl rounded px-8 pb-6 mb-4" onSubmit={handleSubmit}>
    <h2 className="text-5xl font-bold mb-6">Login </h2>
     
     <div className="mb-4">
      <label className='block font-bold mb-2 text-xl' htmlFor='pscNumber'>
        PSC Number
      </label>
      <input className="border text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 w-full
        shadow appearance-none  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline     "
        type="text"
        placeholder="PSC Number"
        value={pscNumber}
        onChange={(e) => setPscNumber(e.target.value)} 
      />
    </div>  
    <div className="mb-4">
    <label className='block text-gray-750 font-bold mb-2 text-xl' htmlFor="password"> 
      Password
    </label>
      <input className="border text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 w-full
        shadow appearance-none  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="password"
        placeholder="Password"
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
      <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
       Log in
      </button>
      <div class="md:w-2/3 mb-5"></div>
     <Link to="#" className='hover:text-purple-900 font-bold focus:text-xl'>Forgot password?</Link>
      <div class="md:w-2/3 mb-5"></div>
      Dont have an account?
      <Link to="/register" class="hover:text-purple-900 font-bold"> Register</Link>
    </form>
    <p class="text-center text-gray-500 text-s">
    &copy;2024 modiga. All rights reserved.
    </p>
   </div> 

   
   </div>

  );
}

export default LoginPage;
