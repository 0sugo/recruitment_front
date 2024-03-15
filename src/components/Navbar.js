// import React, { useEffect, useState } from 'react';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// import coat from '../images/banner2.png'
// import { NavLink } from 'react-router-dom';
// import axios from 'axios';
// import { setUserApplications } from '../redux/Jobs/userApplications';

// const Navbar = () => {
//   const [nav, setNav] = useState(false);

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   const fetchUserApplications = async () => {
//     const userId = localStorage.getItem('userId');
//     if (userId) {
//       try {
//         const response = await axios.get(`https://sir.magicalfurnitures.co.ke/api/getUserApplications/${userId}`);
//         setUserApplications(response.data);
//       } catch (error) {
//         console.error('Error fetching user applications:', error);
//       }
//     }
//   };

//   useEffect(() => {
//     fetchUserApplications();
//   }, []);

//   const navItems = [
//     { id: 1, text: 'Applications' },
//     { id: 2, text: 'Profile' },
//     { id: 3, text: 'Support' },
//   ];

//   return (
//     <div className='bg-white shadow-md flex justify-between items-center h-24 w-full mx-auto px-4 text-black border-b border-black'>
//       {/* Logo */}
//       <img src={coat} className='md:h-[80px] h-[40px]' alt='coat of arms'></img>

//       {/* Desktop Navigation */}
//       <NavLink to="/Available-jobs">Jobs</NavLink>
//       <ul className='hidden md:flex'>
//         {navItems.map(item => (
//           <NavLink
//             key={item.id}
//             to={item.id}
//             className='p-4 hover:bg-[#2E6C9D] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
//           >
//             {item.text}
//           </NavLink>
//         ))}
//       </ul>

//       {/* <ul>
//         <li><a href='' >Register</a></li>
//       </ul> */}

//         <NavLink to='/Login' className='bg-[#0044AA] text-white p-2 m-2 rounded-lg hidden md:block'><a href='' className=' P-4 hover:bg-inherit rounded-lg' >Login</a></NavLink>


//       {/* Mobile Navigation Icon */}
//       <div onClick={handleNav} className='block md:hidden'>
//         {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//       </div>

//       {/* Mobile Navigation Menu */}
//       <ul
//         className={
//           nav
//             ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
//             : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
//         }
//       >
//         {/* Mobile Logo */}
//         <h1 className='w-full text-3xl font-bold text-[#2E6C9D] m-4'>LABOUR HR.</h1>


//         {/* Mobile Nav*/}
//         {navItems.map(item => (
//           <NavLink
//             key={item.id}
//             className='p-4 border-b rounded-xl hover:bg-[#2E6C9D] duration-300 hover:text-black cursor-pointer border-gray-600'
//           >
//             {item.text}
//           </NavLink>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Navbar;

// Navbar.js
import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { fetchApplications } from '../redux/Applications/applicationsSlice'; // Update this path
import coat from '../images/banner2.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const dispatch = useDispatch();

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'Applications' },
    { id: 2, text: 'Profile' },
    { id: 3, text: 'Support' },
  ];

  return (
    <div className='bg-white shadow-md flex justify-between items-center h-24 w-full mx-auto px-4 text-black border-b border-black'>
      {/* Your logo here */}
      <img src={coat} className='md:h-[80px] h-[40px]' alt='coat of arms'></img>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <NavLink
            key={item.id}
            to={`/${item.text.toLowerCase()}`}
            className='p-4 hover:bg-[#2E6C9D] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
          >
            {item.text}
          </NavLink>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        <h1 className='text-2xl font-bold text-[#2E6C9D] m-4'>Your Logo</h1>

        {/* Mobile Nav*/}
        {navItems.map(item => (
          <NavLink
            key={item.id}
            to={`/${item.text.toLowerCase()}`} // Assuming your paths are based on the text
            className='p-4 border-b rounded-xl hover:bg-[#2E6C9D] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            {item.text}
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
