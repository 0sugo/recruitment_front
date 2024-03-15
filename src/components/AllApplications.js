import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllApplications, changeApplicationStatus, fetchUserDetails } from '../redux/Applications/applicationsSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllApplications = () => {
  const dispatch = useDispatch();
  const { AllApplications, isLoading, error, isLoadingUserDetails, errorUserDetails, userDetails } = useSelector((state) => state.applications);
  const [showModal, setShowModal] = React.useState(false);
  const [selectedUserId, setSelectedUserId] = React.useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [applicationsPerPage] = useState(10);

  useEffect(() => {
    dispatch(fetchAllApplications());
  }, [dispatch]);

  const indexOfLastApplication = currentPage * applicationsPerPage;
  const indexOfFirstApplication = indexOfLastApplication - applicationsPerPage;
  const currentApplications = AllApplications.slice(indexOfFirstApplication, indexOfLastApplication);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleStatusChange = async (userId, jobId, status) => {
    dispatch(changeApplicationStatus({ userId, jobId, status }));

    if (status === 'selected') {
      toast.success(`${userId}'s application SHORTLISTED`);
    } else if (status === 'rejected') {
      toast.error(`${userId}'s application REJECTED`);
    }
  };

  const handleViewProfile = async (userId) => {
    setSelectedUserId(userId);
    await dispatch(fetchUserDetails(userId));
    setShowModal(true);
  };

  return (
    <div>
      <div className='m-4 rounded-lg w-full lg:w-10/12 mx-auto p-4'>
        <h1>All Applications</h1>

        <div className="fixed bottom-6 right-6">
          <div className="bg-gradient-to-r from-purple-700 to-[#2E6C9D] p-4 rounded-full shadow-lg flex items-center space-x-2 animate-bounce">
            <span className="text-white text-lg font-bold">{AllApplications.length}</span>
            <span className="text-white">Applications</span>
          </div>
        </div>
        <div className='bg-white'>
          <div className='md:block overflow-x-auto'>
            {isLoading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error: {error.message}</p>
            ) : (
              <table className="w-full table-auto">
                <thead>
                  <tr className='border-b border-slate-500'>
                    <th className='px-6 py-3'>S/N</th>
                    <th className='px-6 py-3'>Name</th>
                    <th className='px-6 py-3'>Job Title</th>
                    <th className='px-6 py-3'>Ref. No.</th>
                    <th className='px-6 py-3'>View Applications</th>
                    <th className='px-6 py-3'>Action</th>
                    {/* <th className='px-6 py-3'>Status</th> */}
                  </tr>
                </thead>
                <tbody>
                  {currentApplications.map((application, index) => (
                    <tr key={application.id}>
                      <td className='px-6 py-2'>{indexOfFirstApplication + index + 1}</td>
                      <td className='px-6 py-2'>{application.name}</td>
                      <td className='px-6 py-2'>{application.job_title}</td>
                      <td className='px-6 py-2'>{application.ref_no}</td>
                      <td className="px-6 py-4">
                        <span onClick={() => handleViewProfile(application.user_id)} className='bg-blue-600 text-white rounded-md px-7 py-2 cursor-pointer'>
                          View Resume
                        </span>
                      </td>

                      <td className="px-6 py-2">
                        <span
                          onClick={() => handleStatusChange(application.user_id, application.job_id, 'selected')}
                          className='bg-green-600 text-white rounded-l-md px-2 py-2 cursor-pointer'
                        >
                          Shortlist
                        </span>
                        <span
                          onClick={() => handleStatusChange(application.user_id, application.job_id, 'rejected')}
                          className='bg-red-600 text-white rounded-r-md px-2 py-2 cursor-pointer'
                        >
                          Reject
                        </span>
                      </td>

                      {/* <td className='px-6 py-4'>{application.status}</td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center">
        <ul className="flex items-center mt-4">
          {Array(Math.ceil(AllApplications.length / applicationsPerPage)).fill().map((_, index) => (
            <li key={index} className={`px-3 py-1 mx-1 cursor-pointer ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'hover:bg-blue-200'}`} onClick={() => paginate(index + 1)}>
              {index + 1}
            </li>
          ))}
        </ul>
      </div>

      {/* Profile Overflow modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-auto">
          <div className="relative bg-white w-full max-w-4xl mx-auto p-6 rounded-md shadow-lg">
            {/* Modal header */}
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-3xl font-semibold">
                {userDetails && userDetails.personal_details && userDetails.personal_details.length > 0
                  ? userDetails.personal_details[0].name
                  : "User Profile"}
              </h3>
              <button
                className="text-gray-700 hover:text-gray-900 text-2xl focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
            </div>
            {/* Modal body */}
            <div className="space-y-4">
              {isLoadingUserDetails ? (
                <p>Loading user details...</p>
              ) : errorUserDetails ? (
                <p className="text-red-500">Error fetching user details: {errorUserDetails.message}</p>
              ) : (
                <div>
                  {/* Display user details here */}
                  {Object.keys(userDetails).length > 0 &&
                    Object.entries(userDetails).map(([category, details], index) => (
                      <div key={index} >
                        <h4 className="text-lg font-semibold mb-2 uppercase">{category.replace(/_/g, ' ')}</h4>
                        {details.map((detail, detailIndex) => (
                          <div key={detailIndex} className='grid grid-cols-3 gap-4 border-gray-100  border-2 p-4 '>
                            {Object.entries(detail).map(([key, value]) => (
                              <div key={key} className="mb-1 text-red-700 text-left border-b border-l shadow-md  shadow-gray-300 border-gray-200 p-2">
                                <strong className="text-gray-700">{key.replace(/_/g, ' ')}:</strong> {value}
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    ))}
                </div>
              )}
            </div>
            {/* Modal footer */}
            <div className="flex justify-end mt-6">
              <button
                className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {showModal && <div className="fixed inset-0 z-40 bg-black opacity-25"></div>}
    </div>
  );
};

export default AllApplications;
