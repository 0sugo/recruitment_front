import React, { useState } from 'react';
import { MdOutlineSort } from 'react-icons/md';
import { BsBell } from 'react-icons/bs';
import profile from '../images/profile.svg';
import banner from '../images/banner2.png';
import NavigationBar from './NavigationBar';
import Header from './Header';
import LeaveForm from './LeaveForm';
import { BsFillPersonFill } from "react-icons/bs";

const Dashboard = () => {
  const [selectedNavItem, setSelectedNavItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleNavItemSelect = (item) => {
    setSelectedNavItem(item);
  };

  return (
    <div className=''>
      <div className='h-dvh overflow-x-hidden'>
        {/* <NavigationBar onNavItemSelect={handleNavItemSelect} /> */}
        <NavigationBar onNavItemSelect={handleNavItemSelect} isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className={`flex flex-col flex-grow bg-neutral-50 h-full ${isOpen ? 'relative left-56 transition-all' : 'relative left-14 transition-all'}`}>
          {/* <div className='flex flex-col flex-grow bg-neutral-50 h-full relative left-56 '> */}
          <div className={`flex bg-white ${isOpen ? '':''}`}>
            <div className={`flex justify-between flex-grow-0 flex-shrink-0  items-center px-6 py-2 ${isOpen ? 'w-9/12 transition-all':'w-10/12 transition-all'} `}>
              {/* <MdOutlineSort className='size-6' /> */}
              <img src={banner} alt='banner' className='w-96' />
              <BsBell className='size-5' />
            </div>
            <div className='flex gap-2 text-end border-slate-300 border-l-2 w-2/12 items-center  py-2 px-6'>
              {/* <img src={profile} alt='profile' className='w-7 h-7' /> */}
              <BsFillPersonFill className='size-7' />
              <p>Susan</p>
            </div>
          </div>
          <div className={` font-light ${isOpen ? 'w-10/12' : 'w-11/12'}`}>
            {selectedNavItem === 'Leave Application' && <LeaveForm />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
