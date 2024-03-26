import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApplications } from '../redux/Applications/applicationsSlice';
import { AiOutlineClose } from "react-icons/ai";
import Output from './Output';

const Applications = () => {
  const dispatch = useDispatch();
  const { AllApplications, isLoading, error } = useSelector((store) => store.userApplications);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchData = async () => {
      if (userId) {
        try {
          await dispatch(fetchApplications(userId));
        } catch (error) {
          console.error('Error dispatching fetchApplications:', error);
        }
      }
    };

    fetchData();
  }, [dispatch, 1]);

  return (
    <>
      <Output />
      <div className='m-4 rounded-lg w-full lg:w-8/12 mx-auto p-4'>
        <h1 className='text-2xl font-bold mb-4'>Pending Applications</h1>
        <div className='bg-white'>
          <div className='md:block overflow-x-auto'>
            {isLoading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error: {error.message}</p>
            ) : (
              <table className='w-full text-justify table-auto'>
                <thead>
                  <tr className='border-b border-slate-500'>
                    <th className='px-6 py-3'>S/N</th>
                    <th className='px-6 py-3'>Job Title</th>
                    <th className='px-6 py-3'>Ref. No.</th>
                    <th className='px-6 py-3'>Employment Terms</th>
                    <th className='px-6 py-3'>Deadline</th>
                    <th className='px-6 py-3'>Status</th>
                    <th className='px-6 py-3'>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {AllApplications.map((application, index) => (
                    <tr key={index + 1}>
                      <td className='px-6 py-4'>{index + 1}</td>
                      <td className='px-6 py-4'>{application.job_title}</td>
                      <td className='px-6 py-4'>{application.ref_no}</td>
                      <td className='px-6 py-4'>{application.emp_terms}</td>
                      <td className='px-6 py-4'>{application.deadline}</td>
                      <td className='px-6 py-4'>
                        <span className='bg-green-600 text-white rounded-md px-4 py-2'>{application.status}</span>
                      </td>

                      <td className='px-6 py-4'>
                        <span className='text-red-700 mx-auto'><AiOutlineClose /></span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Applications;
