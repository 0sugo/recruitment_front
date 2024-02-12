import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RegisterPage() {

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // submit logic
  }

  return (
    
    <div className="flex flex-col items-center justify-center h-screen bg-grey-100">
     <nav className="bg-grey-100 text-white fixed top-0 right-0 items-left p-4">
      
      <div>
      <Link to="/">
      <button className="bg-purple-500 text-white px-4 py-2 rounded">
        Login
      </button>
      </Link> 
      </div>
    </nav>
    <form className="shadow-2xl rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
      <h2 className="text-5xl font-bold mb-6">Register</h2>
      
      <div className="mb-4">
        <label className="block font-bold mb-2">Email</label>
        <input 
          className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 w-full"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)} 
        />
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-2">Phone</label>
        <input
          className="border text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 w-full"
          type="tel" 
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-2">Password</label>
        <input 
          className="border p-2 w-full text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500" 
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-2">Confirm Password</label>
        <input
          className="border p-2 w-full text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"  
          type="password" 
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)} 
        />
      </div>

      <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">Register</button>
      <div class="md:w-2/3 mb-5"></div>
      Have an account?
      <Link to="/" class="hover:text-purple-900 font-bold"> Login</Link>
    </form>
    <p class="text-center text-gray-500 text-s">
    &copy;2024 modiga. All rights reserved.
    </p>
   </div> 
  )

}
