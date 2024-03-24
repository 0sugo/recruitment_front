import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../redux/Jobs/JobsSlice';
import { applyForJob } from '../redux/Applications/apply';
import Output from './Output';

const Jobs = () => {
  const dispatch = useDispatch();
  const { AllJobs, isLoading } = useSelector((store) => store.allJobs);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const handleApply = (userId, jobId) => {
    dispatch(applyForJob({ userId, jobId }));
  };

  return (
    <>
    <Output />
    <div className='m-4 rounded-lg w-full lg:w-8/12 mx-auto p-4'>
      <h1>AVAILABLE JOBS</h1>
      <div className='bg-white'>
        <div className='md:block overflow-x-auto'>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <table className="w-full text-justify table-auto">
              <thead>
                <tr className='border-b border-slate-500'>
                  <th className='px-6 py-3'>ID</th>
                  <th className='px-6 py-3'>Job Title</th>
                  <th className='px-6 py-3'>Ref. No.</th>
                  <th className='px-6 py-3'>Employment Terms</th>
                  <th className='px-6 py-3'>Positions</th>
                  <th className='px-6 py-3'>Deadline</th>
                  <th className='px-6 py-3'>Action</th>
                </tr>
              </thead>
              <tbody>
                {AllJobs.map(job => (
                  <tr key={job.id}>
                    <td className='px-6 py-4'>{job.id}</td>
                    <td className='px-6 py-4'>{job.job_title}</td>
                    <td className='px-6 py-4'>{job.ref_no}</td>
                    <td className='px-6 py-4'>{job.emp_terms}</td>
                    <td className='px-6 py-4'>{job.positions}</td>
                    <td className='px-6 py-4'>{job.deadline}</td>
                    {/* <td class="px-6 py-4"><span className='bg-green-600 text-white rounded-md px-7 py-2'>Apply</span></td> */}
                    <td className="px-6 py-4">
                      <span
                        className={`rounded-md px-7 py-2 cursor-pointer bg-green-600 text-white`}
                        onClick={() => handleApply(userId, job.id)}
                      >
                        Apply
                      </span>
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

const getStatusColor = (status) => {
  switch (status) {
    case 'Shortlisted':
      return 'bg-green-600 text-white';
    case 'Applied':
      return 'bg-blue-600 text-white';
    case 'Rejected':
      return 'bg-red-600 text-white';
    case 'Apply':
      return 'bg-yellow-600 text-white';
    default:
      return '';
  }
};

export default Jobs;
