import React from 'react'

const Header = () => {


  const handleLogout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    window.location.href = '/login';

  };

  return (
    <div className='bg-[#283387] h-14 px-4'>
      <button className='bg-white text-[#283387] px-2 mt-3 py-1 float-right rounded-lg '><a href='' className=' P-4 hover:bg-inherit rounded-lg' >Login</a></button>
      <button className='bg-white text-[#283387] px-2 mt-3 py-1 float-right rounded-lg' onClick={handleLogout}>
        <a href='/login' className='p-4 hover:bg-inherit rounded-lg'>Logout</a>
      </button>
    </div>
  )
}

export default Header
