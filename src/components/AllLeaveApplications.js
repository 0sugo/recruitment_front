import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { approveRejectHod, approveRejectPs, getLeaves } from '../redux/Leave/LeaveSlice';
// import { approveRejectHod, getLeaves } from '../redux/Leave/LeaveSlice';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import Dashboard from './Dashboard';
import { TiTick } from "react-icons/ti";
import { MdCancel } from "react-icons/md";

const AllLeaveApplications = () => {
  const dispatch = useDispatch();
  const userId = localStorage.getItem('userId');
  const role = localStorage.getItem('role');
  const leaveSubjects = useSelector((state) => state.leave.leaves);
  console.log(leaveSubjects);

  useEffect(() => {
    dispatch(getLeaves())
  }, [dispatch]);

  const handleApprove = (id) => {
    const payload = {

      user_id: userId,
      leave_app_id: id,
      approved: 1,
      rejected: 0,
      recommend_other: 1
    };
    if (role === 'hod') {
      dispatch(approveRejectHod(payload));
    }
    else {
      dispatch(approveRejectHod(payload));
    }

    // dispatch(approveRejectHod(payload));
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

  const totalPages = Math.ceil(leaveSubjects.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = leaveSubjects.slice(startIndex, endIndex);

  const goToPrevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  // const leaveSubjects = useSelector((state) => state.leave.leaves);
  // // console.log(leaveSubjects);

  return (
    <div className="relative h-fit bg-gray-100 p-4">
      <Dashboard />
      <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 w-full max-w-7xl bg-white shadow-lg rounded-lg overflow-hidden md:p-4 sm:w-[90%] xs:w-[95%]">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">All Leave Applications</h2>
        </div>
        <div className="p-4 overflow-x-auto">
          <table className="w-full table-auto border-collapse">
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
                  <td className="px-6 py-3 border text-center">{leave.employee_id}</td>
                  <td className="px-6 py-3 border text-center">{leave.applicant_name}</td>
                  <td className="px-6 py-3 border text-center">{leave.leave_type}</td>
                  <td className="px-6 py-3 border text-center">{leave.num_of_days}</td>
                  <td className="px-6 py-3 border text-center">{leave.applied_on}</td>
                  <td className="px-6 py-3 border text-center">
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
                  </td>
                  <td className="px-6 py-3 border text-center">{leave.start_date}</td>
                  <td className="px-6 py-3 border text-center">{leave.stage}</td>
                </tr>
              ))}
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
  );
};

export default AllLeaveApplications
