// import React from 'react';
// import { AiFillDashboard } from 'react-icons/ai';
// import { MdFlight } from 'react-icons/md';
// import { BsPersonFill, BsPersonFillUp } from 'react-icons/bs';
// import { AiOutlineClose } from "react-icons/ai";
// import { RxHamburgerMenu } from "react-icons/rx";

// const NavigationBar = ({ onNavItemSelect, isOpen, setIsOpen }) => {
//   const navItems = [
//     {
//       name: "Dashboard",
//       icon: AiFillDashboard,
//       sublist: [],
//     },
//     {
//       name: "Profile",
//       icon: BsPersonFill,
//       sublist: [],
//     },
//     {
//       name: "Promotions",
//       icon: BsPersonFillUp,
//       sublist: [],

//     },
//     {
//       name: "Leaves",
//       icon: MdFlight,
//       sublist: ['My Application', 'All Leaves', 'Employee Leaves'],
//     }
//   ];

//   const handleNavItemClicked = (item) => {
//     onNavItemSelect(item);
//   };

//   return (
//     <section className="page sidebar-2-page">
//       <aside className={`sidebar-2 ${isOpen ? "open" : ""}`}>
//         <div className="inner">
//           <header className=''>
//             <button type="button" className="sidebar-2-burger" onClick={() => setIsOpen(!isOpen)}>
//               <span className="material-symbols-outlined">
//                 {isOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
//               </span>
//             </button>
//           </header>
//           <nav>
//             {navItems.map((item, index) => (
//               <button key={index} type="button" onClick={() => handleNavItemClicked(item.name)}>
//                 <span className="material-symbols-outlined">{<item.icon className={`${isOpen ? 'size-6' : 'size-7'} `} />}</span>
//                 <p>{item.name}</p>
//                 {item.sublist && item.sublist.length > 0 && isOpen &&
//                   <ul className='hidden'>
//                     {item.sublist.map((sub, subIndex) => (
//                       <li key={subIndex}>{sub}</li>
//                     ))}
//                   </ul>
//                 }
//               </button>
//             ))}
//           </nav>
//         </div>
//       </aside>
//     </section>

//   );
// };

// export default NavigationBar;

import React, { useState } from 'react';
import { AiFillDashboard } from 'react-icons/ai';
import { MdFlight } from 'react-icons/md';
import { BsPersonFill, BsPersonFillUp } from 'react-icons/bs';
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

const NavigationBar = ({ onNavItemSelect, isOpen, setIsOpen }) => {
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
      sublist: ['My Applications', 'All Leaves', 'Employee Applications'],
    }
  ]);

  const handleNavItemClicked = (itemName) => {
    const updatedNavItems = navItems.map(item => {
      if (item.name === itemName) {
        return { ...item, sublistVisible: !item.sublistVisible };
      }
      return item;
    });
    setNavItems(updatedNavItems);
    onNavItemSelect(itemName);
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
              <div key={index}>
                <button type="button" className='text-white' onClick={() => handleNavItemClicked(item.name)}>
                  <span className="material-symbols-outlined">{<item.icon className={`${isOpen ? 'size-6' : 'size-7'} `} />}</span>
                  <p>{item.name}</p>
                </button>
                {item.sublistVisible &&
                  <ul>
                    {item.sublist.map((sub, subIndex) => (
                      <li key={subIndex}>{sub}</li>
                    ))}
                  </ul>
                }
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </section>
  );
};

export default NavigationBar;
