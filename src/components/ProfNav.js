import React, { useEffect, useState } from 'react'

const ProfNav = ({ onNav2ItemSelect }) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [activator,setActivator] =useState('Profile');

  const handleComponentSelect = (componentName) => {
    onNav2ItemSelect(componentName);
    setActivator(componentName);
    console.log(activator);

  };

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timerID);
  }, []);

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
  const formattedDateTime = currentDateTime.toLocaleString('en-US', options);

  return (
    <div>
      <div className="py-4 flex justify-between text-xs text-gray-500 bg-[#f8f8f4] px-2">
        <span>Profile Section</span>
        <span>{formattedDateTime}</span>
      </div>
    <section class={`text-gray-600 body-font flex mx-auto w-full lg:w-10/12 `}>
      <div className="container  px-5">
        <div className="md:grid hidden md:grid-cols-6">
          <a onClick={() => handleComponentSelect('Profile')} class={`${activator==='Profile'? 'sm:px-6 flex flex-col py-3 w-1/2  sm:w-auto justify-center sm:justify-start border-b-2 text-xs gap-2 bg-gray-100 items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t': 'sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font text-xs gap-2 flex flex-col items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider'}`}>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>FILL IN PERSONAL DETAILS
          </a>

          <a onClick={() => handleComponentSelect('academic')} class={`${activator==='academic'? 'sm:px-6 flex flex-col py-3 w-1/2  sm:w-auto justify-center sm:justify-start border-b-2 text-xs gap-2 bg-gray-100 items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t': 'sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font text-xs gap-2 flex flex-col items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider'}`}>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="3"></circle>
              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
            </svg>ACADEMIC QUALIFICATION
          </a>
          <a onClick={() => handleComponentSelect('professionalQualification')} class={`${activator==='professionalQualification'? 'sm:px-6 flex flex-col py-3 w-1/2  sm:w-auto justify-center sm:justify-start border-b-2 text-xs gap-2 bg-gray-100 items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t': 'sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font text-xs gap-2 flex flex-col items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider'}`}>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>PROFESSIONAL QUALIFICATION
          </a>
          <a onClick={() => handleComponentSelect('professionalBody')} class={`${activator==='professionalBody'? 'sm:px-6 flex flex-col py-3 w-1/2  sm:w-auto justify-center sm:justify-start border-b-2 text-xs gap-2 bg-gray-100 items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t': 'sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font text-xs gap-2 flex flex-col items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider'}`}>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>MEMBERSHIP FOR PROFESSIONAL BODIES
          </a>
          <a onClick={() => handleComponentSelect('workExperience')} class={`${activator==='workExperience'? 'sm:px-6 flex flex-col py-3 w-1/2  sm:w-auto justify-center sm:justify-start border-b-2 text-xs gap-2 bg-gray-100 items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t': 'sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font text-xs gap-2 flex flex-col items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider'}`}>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>WORK EXPERIENCE
          </a>
          <a onClick={() => handleComponentSelect('referees')} class={`${activator==='referees'? 'sm:px-6 flex flex-col py-3 w-1/2  sm:w-auto justify-center sm:justify-start border-b-2 text-xs gap-2 bg-gray-100 items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t': 'sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font text-xs gap-2 flex flex-col items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider'}`}>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>REFEREES
          </a>

        </div>
      </div>
    </section>
    </div>
  )
}

export default ProfNav
