import React, { useEffect } from 'react'
import Dashboard from './Dashboard'
import { useDispatch, useSelector } from 'react-redux';
import { getLeaves } from '../redux/Leave/LeaveSlice';
import { useState } from 'react';
import { AiFillPrinter } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const AllLeaves = () => {
  const dispatch = useDispatch();
  const leaves = useSelector((state) => state.leave.leaves);
  const leaveSummary = useSelector((state) => state.leave.leaves);
  const loading = useSelector((state) => state.leave.loading);
  const error = useSelector((state) => state.leave.error);
  const userId = localStorage.getItem('userId');
  const role = localStorage.getItem('role');

  const handleApprove = () => {
    console.log('Approve');
  }

  const handleReject = () => {
    console.log('Reject');
  }
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(leaveSummary.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = leaveSummary.slice(startIndex, endIndex);

  const goToPrevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  useEffect(() => {
    dispatch(getLeaves())
  }, [dispatch]);


  return (
    <div className='relative'>
      <Dashboard />
      <div className="absolute top-[9%] left-[25%] border-2  w-[60%]">

      <h1>All Leaves</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <table>

        <tbody>

          {currentItems.map((leave, index) => (
            <tr key={index}>
              <td className='px-6 py-2'>{startIndex + 1 + index}.</td>
              <td className='px-6 py-2'>{leave.applicant_name}</td>

              <td className='px-6 py-2'>{leave.leave_type}</td>
              {/* Replace with actual date from API */}
              <td className='px-6 py-2'>{leave.applied_on}</td>
              {/* Replace with actual duration from API */}
              <td className='px-6 py-2'>{leave.num_of_days}</td>
              {role === 'admin' ? (<td className='px-6 py-2'>
                <span className='text-green-600 cursor-pointer' onClick={() => handleApprove()}>Approve</span>
                <span className='text-red-600 cursor-pointer' onClick={() => handleReject()}>Reject</span>
              </td>) : ''}
              <td className='px-6 py-2'>
                {leave.status === 1 ? (
                  <div className='flex items-center gap-5'>
                    <span className='bg-green-600 p-1 text-white rounded-full w-2 h-2 flex items-center justify-center'>
                      <span className='dot'></span>
                    </span>
                    <span className='text-black'>Approved</span>
                  </div>
                ) : leave.status === 0 ? (
                  <div className='flex items-center gap-5'>
                    <span className='bg-red-600 p-1 text-white rounded-full w-2 h-2 flex items-center justify-center'>
                      <span className='dot'></span>
                    </span>
                    <span className='text-black'>Rejected</span>
                  </div>
                ) : (
                  <div className='flex items-center gap-5'>
                    <span className='bg-orange-600 p-1 text-white rounded-full w-2 h-2 flex items-center justify-center'>
                      <span className='dot'></span>
                    </span>
                    <span className='text-black'>Pending</span>
                  </div>
                )}
              </td>


              <td className='px-6 py-2'>
                {leave.stage === 'hod' ? (
                  <div className='flex items-center gap-5'>
                    <span className='text-black'>HOD</span>
                  </div>
                ) : leave.stage === 'HR' ? (
                  <div className='flex items-center gap-5'>
                    <span className='text-black'>HR</span>
                  </div>
                ) : leave.stage === 'PS' ? (
                  <div className='flex items-center gap-5'>
                    <span className='text-black'>PS</span>
                  </div>
                ) : (
                  <div className='flex items-center gap-5'>
                    <span className='text-black'>Pending</span>
                  </div>
                )}
              </td>
              {/* <td className='px-6 py-2 flex gap-2 items-center justify-center'> */}
              {/* <AiFillPrinter /> */}
              {/* <ReactToPrint trigger={() => <AiFillPrinter className='' ><AiFillPrinter /></AiFillPrinter>} content={() => componentRef.current} /> */}
              <td className='px-6 py-2 flex gap-2 items-center justify-center'>
                <AiFillPrinter />
                <CgNotes />
              </td>
            </tr>
          ))
          }
        </tbody>

        {/* Pagination controls */}
        <div className="flex items-center justify-center mt-4">
          {/* Back button */}
          <button onClick={goToPrevPage} disabled={currentPage === 1}>
            <AiOutlineLeft />
          </button>

          {/* Current page number */}
          <span className="mx-2">{currentPage}</span>

          {/* Next button */}
          <button onClick={goToNextPage} disabled={currentPage === totalPages}>
            <AiOutlineRight />
          </button>
        </div>




      </table>
    </div>
    </div>
  )
}

export default AllLeaves
