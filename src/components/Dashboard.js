import React, { useState } from 'react';
import { MdOutlineSort } from 'react-icons/md';
import { BsBell } from 'react-icons/bs';
import profile from '../images/profile.svg';
import banner from '../images/banner2.png';
import NavigationBar from './NavigationBar';
import Header from './Header';
import LeaveForm from './LeaveForm';
import { BsFillPersonFill } from "react-icons/bs";
import Profile from './profile';
import AcademicQualifications from './AcademicQualification';
import ProfessionalQualification from './ProfessionalQualification';
import MemProfBodies from './MemProfBodies';
import WorkExperience from './WorkExperience';
import Referees from './Referees';
import ProfNav from './ProfNav';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import EmployeeManagement from './EmployeeManagement';
import { Link } from 'react-router-dom';
import LeaveReport from './LeaveReport';

const Dashboard = () => {
  const [selectedNavItem, setSelectedNavItem] = useState(null);
  const [selectedNav2Item, setSelectedNav2Item] = useState('Profile');
  const [adminChoice, setAdminChoice] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const userId = localStorage.getItem('userId');

  const handleNavItemSelect = (item) => {
    setSelectedNavItem(item);
  };

  const handleNav2ItemSelect = (item) => {
    setSelectedNav2Item(item);
  };

  const handleLogout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    window.location.href = '/';

  };

  return (
    <div className=''>
      <div className='h-dvh overflow-x-hidden'>
        {/* <NavigationBar onNavItemSelect={handleNavItemSelect} /> */}
        <NavigationBar setAdminChoice={setAdminChoice} onNavItemSelect={handleNavItemSelect} isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className={`flex flex-col flex-grow bg-neutral-50 h-full ${isOpen ? 'relative left-56 transition-all' : 'relative left-14 transition-all'}`}>
          {/* <div className='flex flex-col flex-grow bg-neutral-50 h-full relative left-56 '> */}
          <div className={`flex bg-white ${isOpen ? '' : ''}`}>
            <div className={`flex justify-between flex-grow-0 flex-shrink-0  items-center px-6 py-2 ${isOpen ? 'w-9/12 transition-all' : 'w-10/12 transition-all'} `}>
              {/* <MdOutlineSort className='size-6' /> */}
              <img src={banner} alt='banner' className='w-96' />
              <BsBell className='size-5' />
            </div>
            <div className='flex gap-2 text-end border-slate-300 border-l-2 w-2/12 items-center  py-2 px-6'>
              {/* <img src={profile} alt='profile' className='w-7 h-7' /> */}
              <BsFillPersonFill className='size-7' />
              {userId ? (     <button className='bg-white text-[#283387] px-2 mt-3 py-1 float-right rounded-lg' onClick={handleLogout}>
                    <a href='/login' className='p-4 hover:bg-inherit rounded-lg'>Logout</a>
                  </button>) :
                (
                  <Link to='/login' className='bg-white text-[#283387] px-2 mt-3 py-1 float-right rounded-lg'>Login</Link>
                )
              }
            </div>
          </div>

          <div className={` font-light ${isOpen ? 'w-10/12' : 'w-11/12'}`}>

            {selectedNavItem === 'Profile' && <ProfNav onNav2ItemSelect={handleNav2ItemSelect} />}
            {/* {selectedNavItem === 'Leave Application' && <LeaveForm adminChoice={adminChoice} />} */}
            {/* Job recruitment */}
            {selectedNavItem === 'Profile' && selectedNav2Item === 'Profile' && <Profile isOpen={isOpen} selectedNav2Item={selectedNav2Item} />}
            {selectedNavItem === 'Profile' && selectedNav2Item === 'academic' && <AcademicQualifications isOpen={isOpen} selectedNav2Item={selectedNav2Item} />}
            {selectedNavItem === 'Profile' && selectedNav2Item === 'professionalQualification' && <ProfessionalQualification isOpen={isOpen} selectedNav2Item={selectedNav2Item} />}
            {selectedNavItem === 'Profile' && selectedNav2Item === 'professionalBody' && <MemProfBodies isOpen={isOpen} selectedNav2Item={selectedNav2Item} />}
            {selectedNavItem === 'Profile' && selectedNav2Item === 'workExperience' && <WorkExperience isOpen={isOpen} selectedNav2Item={selectedNav2Item} />}
            {selectedNavItem === 'Profile' && selectedNav2Item === 'referees' && <Referees isOpen={isOpen} selectedNav2Item={selectedNav2Item} />}
            {/** Employee Management */}
            {selectedNavItem === 'Employee Management' && <EmployeeManagement />}
            {selectedNavItem === 'LeaveReport/:id' && <LeaveReport/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
