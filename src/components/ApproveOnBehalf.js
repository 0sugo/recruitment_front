import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Dashboard from './Dashboard';
import { approveOnBehalfOfPs, hrmdCheckPsProfile } from '../redux/Leave/LeaveSlice';
import { TiTick } from "react-icons/ti";
import { MdCancel } from "react-icons/md";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const ApproveOnBehalf = () => {
  const dispatch = useDispatch();
  const role = localStorage.getItem('role');
  const userId = localStorage.getItem('userId');
  const [selectedComponent, setSelectedComponent] = useState('PendingLeave');
  const leaveSubjects = useSelector((state) => state.leave.listForPs);

  useEffect(() => {
    dispatch(hrmdCheckPsProfile());
  }, [dispatch]);

  const handleApprove = (id) => {
    const payload = {
      user_id: userId,
      leave_app_id: id,
      approved: 1,
      rejected: 0,
      recommend_other: 1
    };

    dispatch(approveOnBehalfOfPs(payload));

  };

  const handleReject = (id) => {
    const payload = {
      user_id: userId,
      leave_app_id: id,
      approved: 0,
      rejected: 1,
      recommend_other: 0
    };
    dispatch(approveOnBehalfOfPs(payload));

  };

  // console.log(leaveSubjects);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const filteredLeaves = leaveSubjects.filter((leave) => {
    if (selectedComponent === 'PendingLeave') return leave.status === 0 && leave.stage === 2;
    if (selectedComponent === 'ApprovedLeave') return leave.ps_rejected_on === null;
    if (selectedComponent === 'RejectedLeave') return leave.ps_rejected_on !== null;
    if (selectedComponent === 'AllLeave') return true;
  });

  const totalPages = Math.ceil(filteredLeaves.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredLeaves.slice(startIndex, endIndex);

  const goToPrevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const handleComponentSelect = (component) => {
    setSelectedComponent(component);
    setCurrentPage(1);
  };
  return (
    <div className="relative h-fit bg-gray-100 p-4">
      <Dashboard />
      <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg overflow-hidden md:p-4 w-[80%] ">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">All Leave Applications</h2>
          <div className='max-w-3/4 mx-auto border-b border-l b-2 border-gray-200 text-sm'>
            <div className='flex mx-auto max-w-3/4 whitespace-nowrap gap-16 bg-gray-100'>
              <div className='font-semibold text-sm flex gap-16 text-slate-600'>
                <span
                  className={`flex items-center p-3 cursor-pointer ${selectedComponent === 'PendingLeave' ? 'underline animate-bounce text-black' : ''}`}
                  onClick={() => handleComponentSelect('PendingLeave')}
                >
                  Pending Approval
                </span>
                <span
                  className={`flex items-center p-3 cursor-pointer ${selectedComponent === 'ApprovedLeave' ? 'underline animate-bounce text-black' : ''}`}
                  onClick={() => handleComponentSelect('ApprovedLeave')}
                >
                  Approved Leaves
                </span>
                <span
                  className={`flex items-center p-3 cursor-pointer ${selectedComponent === 'RejectedLeave' ? 'underline animate-bounce text-black' : ''}`}
                  onClick={() => handleComponentSelect('RejectedLeave')}
                >
                  Rejected Leaves
                </span>
                <span
                  className={`flex items-center p-3 cursor-pointer ${selectedComponent === 'AllLeave' ? 'underline animate-bounce text-black' : ''}`}
                  onClick={() => handleComponentSelect('AllLeave')}
                >
                  All Leaves
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="border-b border-slate-500">
                <th className="px-4 py-2 border">S/N</th>
                <th className="px-4 py-2 border">Applicant Name</th>
                <th className="px-4 py-2 border">Leave Type</th>
                <th className="px-4 py-2 border">Num of days</th>
                <th className="px-4 py-2 border">Applied date</th>
                <th className="px-4 py-2 border">Start date</th>
                <th className="px-4 py-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((leave, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-50">
                  <td className="px-4 py-2 border text-center">{index + 1}</td>
                  <td className="px-4 py-2 border text-center">{leave.applicant_name}</td>
                  <td className="px-4 py-2 border text-center">{leave.leave_type}</td>
                  <td className="px-4 py-2 border text-center">{leave.num_of_days}</td>
                  <td className="px-4 py-2 border text-center">{leave.applied_on}</td>
                  <td className="px-4 py-2 border text-center">{leave.start_date}</td>
                  <td className="px-4 py-2 border text-center">
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
                </tr>
              ))}
            </tbody>
          </table>
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
        </div>
      </div>
    </div>
  )
}

export default ApproveOnBehalf
