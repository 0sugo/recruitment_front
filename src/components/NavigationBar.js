import React, { useState } from 'react';
import { AiFillDashboard } from 'react-icons/ai';
import { MdFlight } from 'react-icons/md';
import { BsPersonFill, BsPersonFillUp } from 'react-icons/bs';
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';


const NavigationBar = ({ onNavItemSelect, isOpen, setIsOpen }) => {
  
 const navigate = useNavigate();
  
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
      sublist: ['My Applications', 'Employee Applications', 'All Leaves'],
    }
  ]);

  const handleNavItemClicked = (itemName) => {
    const updatedNavItems = navItems.map(item => {
      if (item.name === itemName) {
        return { ...item, sublistVisible: isOpen ? !item.sublistVisible : true };
      } else {
        return { ...item, sublistVisible: false };
      }
    });
    setNavItems(updatedNavItems);
    onNavItemSelect(itemName);
    if (!isOpen) {
      setIsOpen(true);
    }
  };
  
  
  /**
   * handle the sublist id
   * Redirect the id of the sublist clicked and pass it to leave summary component
   */
  const handleSublistItemClick = (itemName, sublistID) => {
    alert(`Test if the theory does work: ${itemName} at index ${sublistID}`);
    navigate(`/LeaveReport/${sublistID}`);
    onNavItemSelect(itemName, sublistID);
    setIsOpen(!isOpen);
  };

  return (
    <section className="page sidebar-2-page">
      <aside className={`sidebar-2 ${isOpen ? "open" : ""}`}>
        <div className="inner">
          <header className="border-b">
            <button type="button" className="sidebar-2-burger" onClick={() => setIsOpen(!isOpen)}>
              <span className="material-symbols-outlined">
                {isOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
              </span>
            </button>
          </header>
          <nav>
            {navItems.map((item, index) => (
              <div key={index}>
                <button type="button" className='text-white flex justify-start items-center w-full p-3' onClick={() => handleNavItemClicked(item.name)}>
                  <span className="mr-2">
                    <item.icon className={`${isOpen ? 'text-lg' : 'text-xl'} `} />
                  </span>
                  <p className={`${isOpen ? 'block ' : 'hidden'}`}>{item.name}</p>
                </button>
                {item.sublistVisible && (
                  <ul className="ml-6 bg-slate-50">
                    {item.sublist.map((sub, subIndex) => (
                      <li key={subIndex} className="border-b border-black">
                        <button className='text-left bg-blue-200 w-full pl-1 py-2' onClick={() => handleSublistItemClick(item.name, subIndex)}>{sub}</button></li>
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
