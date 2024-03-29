import React, { useState } from 'react';
import { AiFillDashboard } from 'react-icons/ai';
import { MdFlight } from 'react-icons/md';
import { BsPersonFill, BsPersonFillUp } from 'react-icons/bs';
import banner from '../images/coat.png';
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

const NavigationBar = ({ onNavItemSelect, isOpen, setIsOpen }) => {
  // const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    {
      name: "Dashboard",
      icon: AiFillDashboard
    },
    {
      name: "Profile",
      icon: BsPersonFill
    },
    {
      name: "Promotions",
      icon: BsPersonFillUp
    },
    {
      name: "Leave Application",
      icon: MdFlight
    }
  ];

  const handleNavItemClicked = (item) => {
    onNavItemSelect(item);
  };

  return (
    <section className="page sidebar-2-page">
      <aside className={`sidebar-2 ${isOpen ? "open" : ""}`}>
        <div className="inner">
          <header className=''>
            <button type="button" className="sidebar-2-burger" onClick={() => setIsOpen(!isOpen)}>
              <span className="material-symbols-outlined">
                {isOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
              </span>
            </button>
          </header>
          <nav>
            {navItems.map((item, index) => (
              <button key={index} type="button" onClick={() => handleNavItemClicked(item.name)}>
                <span className="material-symbols-outlined">{<item.icon className={`${isOpen ?'size-6':'size-7'} `}/>}</span>
                <p>{item.name}</p>
              </button>
            ))}
          </nav>
        </div>
      </aside>
    </section>

  );
};

export default NavigationBar;

