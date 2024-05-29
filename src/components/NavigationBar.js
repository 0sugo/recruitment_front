import React, { useState, useEffect } from 'react';
import { AiFillDashboard } from 'react-icons/ai';
import { MdFlight } from 'react-icons/md';
import { BsPersonFill, BsPersonFillUp } from 'react-icons/bs';
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import { getLeaves } from '../redux/Leave/LeaveSlice';
import { useDispatch } from 'react-redux';

// Fetch the role from local storage
const role = localStorage.getItem('role');
const userId = localStorage.getItem('userId');

const NavigationBar = ({ setAdminChoice, onNavItemSelect, isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();



  // Define role-based sublist items
  const roleBasedSublists = {
    employee: ['My Applications'],
    hrmd: ['My Applications', 'All Applications', 'Employee Management'],
    hod: ['My Applications', 'All Applications'],
    ps: ['My Applications', 'All Applications'],
    admin: ['My Applications', 'Employee Management', 'All Leaves','All Applications']
  };

  // Determine the allowed sublist items for the current role
  const allowedSublists = roleBasedSublists[role] || [];

  const [navItems, setNavItems] = useState([
    {
      name: "Dashboard",
      icon: AiFillDashboard,
      sublistVisible: false,
      sublist: [],
    },
    {
      name: "Profile",
      icon: BsPersonFill,
      sublistVisible: false,
      sublist: [],
    },
    {
      name: "Promotions",
      icon: BsPersonFillUp,
      sublistVisible: false,
      sublist: [],
    },
    {
      name: "Leave Application",
      icon: MdFlight,
      sublistVisible: false,
      sublist: [],
    }
  ]);

  // Update the Leave Application sublist based on the role
  useEffect(() => {
    setNavItems(prevNavItems => prevNavItems.map(item => {
      if (item.name === 'Leave Application') {
        return { ...item, sublist: allowedSublists };
      }
      return item;
    }));
  }, []);

  const handleNavItemClicked = (itemName) => {
    const updatedNavItems = navItems.map(item => {
      if (item.name === itemName) {
        return { ...item, sublistVisible: isOpen ? !item.sublistVisible : true };
      } else {
        return { ...item, sublistVisible: false };
      }
    });

    // Close all sublists if the navbar is being closed
    if (!isOpen) {
      updatedNavItems.forEach(item => {
        item.sublistVisible = false;
      });
    }

    setNavItems(updatedNavItems);
    onNavItemSelect(itemName);
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const handleSublistItemClick = (itemName, subName) => {

    if (subName === 'Employee Management') {
      navigate("/EmployeeManagement");
    }
    else if (subName === 'My Applications') {
      navigate("/MyApplications");
    }
    else if (subName === 'All Applications') {
      navigate("/AllLeaveApplications");
    }

    else if (subName === 'All Leaves') {
      navigate(`/allLeaves`);
    }
    setAdminChoice(subName);
    onNavItemSelect(itemName);
    setIsOpen(!isOpen);
  };

  return (
    <section className="page sidebar-2-page">
      <aside className={`sidebar-2 ${isOpen ? "open" : ""}`}>
        <div className="inner">
          <header className="border-b">
            <button type="button" className="sidebar-2-burger" onClick={() => setIsOpen(!isOpen)}>
              <span className="material-symbols-outlined">
                {isOpen ? <AiOutlineClose /> : (
                  <>
                    <RxHamburgerMenu />
                    {navItems.map(item => {
                      if (item.sublistVisible) {
                        item.sublistVisible = false;
                      }
                      return null;
                    })}
                  </>
                )}
              </span>
            </button>
          </header>
          <nav>
            {userId && navItems.map((item, index) => (
              <div key={index}>
                <button type="button" className='text-white flex justify-start items-center w-full p-3' onClick={() => handleNavItemClicked(item.name)}>
                  <span className="mr-2">
                    <item.icon className={`${isOpen ? 'text-lg' : 'text-xl'} `} />
                  </span>
                  <p className={`${isOpen ? 'block ' : 'hidden'}`}>{item.name}</p>
                </button>
                {item.sublistVisible && item.sublist.length > 0 && (
                  <ul className="ml-6 bg-slate-50">
                    {item.sublist.map((sub, subIndex) => (
                      <li key={subIndex} className="border-b border-black">
                        <button className='text-left bg-blue-200 w-full pl-1 py-2' onClick={() => handleSublistItemClick(item.name, sub)}>{sub}</button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </section>
  );
};

export default NavigationBar;
