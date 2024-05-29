import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { approveRejectHod, approveRejectPs, getLeaves } from '../redux/Leave/LeaveSlice';
import Dashboard from './Dashboard';
import { TiTick } from "react-icons/ti";
import { MdCancel } from "react-icons/md";

const AllLeaveApplications = () => {
  const dispatch = useDispatch();
  const userId = localStorage.getItem('userId');
  const role = localStorage.getItem('role');

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


  const leaveSubjects = useSelector((state) => state.leave.leaves);
  // console.log(leaveSubjects);

  return (
    <div className="relative">
      <Dashboard />
      <div className="absolute top-[9%] left-[25%] border-2  w-[70%]">
        <div>AllLeaveApplications</div>
        <div>
          <table className='w-full' >
            <thead>
              <tr>
                <th>S/N</th>
                <th>Name</th>
                <th>Leave Type</th>
                <th>Num of days</th>
                <th>Applied date</th>
                <th>Action</th>
                <th>Start date</th>
                <th>Stage</th>
              </tr>
            </thead>
            <tbody>
              {leaveSubjects.map((leave, index) => (
                <tr key={index}>
                  <td>{leave.employee_id}</td>
                  <td>{leave.applicant_name}</td>
                  <td>{leave.leave_type}</td>
                  <td>{leave.num_of_days}</td>
                  <td>{leave.applied_on}</td>
                  <td className='flex items-center justify-center'>
                    <span onClick={() => handleApprove(leave.id)} className='cursor-pointer '><TiTick /></span>
                    <span onClick={() => handleApprove(leave.id)} className='cursor-pointer '><MdCancel /></span>
                  </td>
                  <td>{leave.start_date}</td>
                  <td>{leave.stage}</td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  )
}

export default AllLeaveApplications
