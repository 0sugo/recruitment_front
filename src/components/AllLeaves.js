import React, { useEffect, useState } from 'react'
import Dashboard from './Dashboard'
import { useDispatch, useSelector } from 'react-redux';
import { AiFillPrinter } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { approveRejectHod, getLeaves} from '../redux/Leave/LeaveSlice';
import { TiTick } from "react-icons/ti";
import { MdCancel } from "react-icons/md";

const AllLeaves = () => {
  const dispatch = useDispatch();
  const leaveSummary = useSelector((state) => state.leave.leaves);
  const loading = useSelector((state) => state.leave.loading);
  const error = useSelector((state) => state.leave.error);
  const userId = localStorage.getItem('userId');
  const role = localStorage.getItem('role');

  const handleApprove = (id) => {
    const payload = {

      user_id: userId,
      leave_app_id: id,
      approved: 1,
      rejected: 0,
      recommend_other: 1
    };
    dispatch(approveRejectHod(payload));
    console.log('Approve');
  }

  const handleReject = (id) => {
    const payload = {

      user_id: userId,
      leave_app_id: id,
      approved: 0,
      rejected: 1,
      recommend_other: 0
    };
    dispatch(approveRejectHod(payload));
    console.log('Rejected');
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
    <div className='relative h-fit bg-gray-100'>
      <Dashboard />
      <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 w-full max-w-7xl bg-white shadow-lg rounded-lg overflow-hidden md:p-4 sm:w-[68%] xs:w-[90%]">

      <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">All Leaves</h2>
        </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      
      <div className='p-4 overflow-x-auto'>
      <table className='w-full table-auto border-collapse'>
      <thead>
              <tr className="border-b border-slate-500">
                <th className="px-6 py-3 border">S/N</th>
                <th className="px-6 py-3 border">Name</th>
                <th className="px-6 py-3 border">Leave Type</th>
                <th className="px-6 py-3 border">Num of days</th>
                <th className="px-6 py-3 border">Applied date</th>
                <th className="px-6 py-3 border">Action</th>
                <th className="px-6 py-3 border">Start date</th>
                <th className="px-6 py-3 border">Stage</th>
              </tr>
            </thead>
        <tbody>
          {currentItems.map((leave, index) => (
            <tr key={index} className="odd:bg-white even:bg-gray-50">
              <td className='px-6 py-3 border text-center'>{startIndex + 1 + index}.</td>
              <td className='px-6 py-3 border text-center'>{leave.applicant_name}</td>

              <td className='px-6 py-3 border text-center'>{leave.leave_type}</td>
              {/* Replace with actual date from API */}
              <td className='px-6 py-3 border text-center'>{leave.applied_on}</td>
              {/* Replace with actual duration from API */}
              <td className='px-6 py-3 border text-center'>{leave.num_of_days}</td>
              {role === 'admin' ? (<td className='px-6 py-3 border text-center'>
              <div className="flex items-center justify-center space-x-2">
                      <span
                        onClick={() => handleApprove(leave.id)}
                        className="cursor-pointer text-green-400 hover:text-green-800 transition-colors duration-200"
                      >
                        <TiTick size={24} />
                      </span>
                      <span
                        onClick={() => handleReject(leave.id)}
                        className="cursor-pointer text-red-200 hover:text-red-800 transition-colors duration-200"
                      >
                        <MdCancel size={24} />
                      </span>
                    </div>
              </td>) : ''}
              <td className='px-6 py-3 border text-center'>
                {leave.status === 1 ? (
                  <div className='flex items-center gap-5'>
                    <span className='bg-green-600 p-1 text-white rounded-full w-2 h-2 flex items-center justify-center'>
                      <span className='dot'></span>
                    </span>
                    <span className='text-green-400'>Approved</span>
                  </div>
                ) : leave.status === 0 ? (
                  <div className='flex items-center gap-5'>
                    <span className='bg-red-600 p-1 text-white rounded-full w-2 h-2 flex items-center justify-center'>
                      <span className='dot'></span>
                    </span>
                    <span className='text-red-400'>Rejected</span>
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


              <td className='px-6 py-3 border text-center'>
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
              {/* <td className='px-6 py-3 border text-center flex gap-2 items-center justify-center'> */}
              {/* <AiFillPrinter /> */}
              {/* <ReactToPrint trigger={() => <AiFillPrinter className='' ><AiFillPrinter /></AiFillPrinter>} content={() => componentRef.current} /> */}
              <td className='px-6 py-3 border text-center'>
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
    </div>
  )
}

export default AllLeaves
