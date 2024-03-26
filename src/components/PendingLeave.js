import React from 'react'
import { AiFillPrinter } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";

const PendingLeave = () => {
  return (
    <table className="w-full table-auto ">
            <thead>
              <tr className='border-b border-slate-500'>
                <th className='px-6 py-3'>S/N</th>
                <th className='px-6 py-3'>Leave Category</th>
                <th className='px-6 py-3'>Date</th>
                <th className='px-6 py-3'>Duration</th>
                <th className='px-6 py-3'>Status</th>
                <th className='px-6 py-3'>View</th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <td className='px-6 py-2'>2.</td>
                <td className='px-6 py-2'>Sick</td>
                <td className='px-6 py-2'>12-08-2024</td>
                <td className='px-6 py-2'>5</td>
                <td className='px-6 py-2 '><span className='bg-orange-600 text-white p-1 rounded-sm w-20 inline-block text-center'>Pending</span></td>
                <td className='px-6 py-2 flex gap-2 items-center justify-center'>
                  <span><AiFillPrinter /></span>
                  <span><CgNotes /></span>
                </td>

              </tr>
            </tbody>
          </table>
  )
}

export default PendingLeave
