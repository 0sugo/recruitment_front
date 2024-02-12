import React from 'react'
import { NavLink } from 'react-router-dom'

const Tabular = () => {
  return (
    <div className='flex flex-nowrap justify-between mt-4'>
      <NavLink to="/Personal-Details" className='focus:animate-bounce focus:font-bold hidden md:block bg-black p-4 items-center flex justify-center uppercase w-1/6 text-white text-xs font-bold'>Personal details</NavLink>
      <NavLink to="/Personal-Details" className='focus:animate-bounce md:hidden bg-black p-4 items-center flex justify-center uppercase w-1/6 text-white text-xs font-bold'>Step 1</NavLink>

      <NavLink to="/Academic-Qualification" className='focus:animate-bounce bg-white hidden md:block w-1/6 text-xs p-4 font-bold items-center flex justify-center uppercase'>Academic qualifications</NavLink>
      <NavLink to="/Academic-Qualification" className='focus:animate-bounce bg-white md:hidden w-1/6 text-xs p-4 font-bold items-center flex justify-center uppercase'>Step 2</NavLink>

      <NavLink to="/Professional-Qualification" className='focus:animate-bounce hidden md:block bg-red-600 p-4 w-1/6 text-xs font-bold items-center flex justify-center uppercase'>Professional Qualification</NavLink>
      <NavLink to="/Professional-Qualification" className='focus:animate-bounce md:hidden bg-red-600 p-4 w-1/6 text-xs font-bold items-center flex justify-center uppercase'>Step 3</NavLink>

      <NavLink to="/Professional-body-member" className='focus:animate-bounce bg-white hidden md:block w-1/6 text-xs p-4 font-bold items-center flex justify-center uppercase'>Membership for professional bodies</NavLink>
      <NavLink to="/Professional-body-member" className='focus:animate-bounce bg-white md:hidden w-1/6 text-xs p-4 font-bold items-center flex justify-center uppercase'>Step 4</NavLink>

      <NavLink to="/Work-Experience"className='focus:animate-bounce hidden md:block bg-green-600 p-4 text-xs w-1/6 text-white font-bold items-center flex justify-center uppercase'>Work experience</NavLink>
      <NavLink to="/Work-Experience"className='focus:animate-bounce md:hidden bg-green-600 p-4 text-xs w-1/6 text-white font-bold items-center flex justify-center uppercase'>Step 5</NavLink>

      <NavLink to="/Referees" className='focus:animate-bounce bg-white hidden md:block w-1/6 text-xs p-4 font-bold items-center flex justify-center uppercase'>Referees</NavLink>
      <NavLink to="/Referees" className='focus:animate-bounce bg-white md:hidden w-1/6 text-xs p-4 font-bold items-center flex justify-center uppercase'>Step 6</NavLink>
    </div>
  )
}

export default Tabular
