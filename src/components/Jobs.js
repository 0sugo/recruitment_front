import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchJobs } from '../redux/Jobs/JobsSlice';

// const Jobs = () => {
//   const dispatch = useDispatch();

//   return (
//     <div className='m-4 rounded-lg w-full lg:w-8/12 mx-auto p-4'>
//       <h1>AVAILABLE JOBS</h1>
//       <div className='bg-white'>
//       <div className=' md:block overflow-x-auto'>
//         <table class="w-full text-justify table-auto ">
//           <thead >
//             <tr className='border-b border-slate-500'>
//               <th className='scope="col" class="px-6 py-3"'>ID</th>
//               <th className='scope="col" class="px-6 py-3"' >Job Tittle</th>
//               <th className='scope="col" class="px-6 py-3"' >Ref. No.</th>
//               <th className='scope="col" class="px-6 py-3"' >Employment Terms</th>
//               <th className='scope="col" class="px-6 py-3"' >Positions</th>
//               <th className='scope="col" class="px-6 py-3"' >Deadline</th>
//               <th className='scope="col" class="px-6 py-3"' >Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td scope="row" class="px-6 py-4">1</td>
//               <td class="px-6 py-4">  ICT Officer</td>
//               <td class="px-6 py-4">  ICTO/908745/45</td>
//               <td class="px-6 py-4">  Contract - 5years</td>
//               <td class="px-6 py-4">  10</td>
//               <td class="px-6 py-4">24.02.1961</td>
//               <td class="px-6 py-4"><span className='bg-green-600 text-white rounded-md px-2 py-2.5 w-full'>Shortlisted</span></td>

//             </tr>

//             <tr>
//               <td class="px-6 py-4">2</td>
//               <td class="px-6 py-4">  HR Officer</td>
//               <td class="px-6 py-4">  HRO/908745/45</td>
//               <td class="px-6 py-4">  Contract - 5years</td>
//               <td class="px-6 py-4">  10</td>
//               <td class="px-6 py-4">24.02.1961</td>
//               <td class="px-6 py-4"><span className='bg-blue-600 text-white rounded-md px-5 py-2'>Applied</span></td>

//             </tr>

//             <tr>

//               <td class="px-6 py-4">3</td>
//               <td class="px-6 py-4">  HR Officer</td>
//               <td class="px-6 py-4">  HRO/908745/45</td>
//               <td class="px-6 py-4">  Contract - 5years</td>
//               <td class="px-6 py-4">  10</td>
//               <td class="px-6 py-4">24.02.1961</td>
//               <td class="px-6 py-4"><span className='bg-red-600 text-white rounded-md px-4 py-2'>Rejected</span></td>
//             </tr>

//             <tr>

//               <td class="px-6 py-4">3</td>
//               <td class="px-6 py-4">  HR Officer</td>
//               <td class="px-6 py-4">  HRO/908745/45</td>
//               <td class="px-6 py-4">  Contract - 5years</td>
//               <td class="px-6 py-4">  10</td>
//               <td class="px-6 py-4">24.02.1961</td>
//               <td class="px-6 py-4"><span className='bg-yellow-600 text-white rounded-md px-7 py-2'>Apply</span></td>
//             </tr>


//           </tbody>
//         </table>

//       </div>
//       </div>


//     </div>
//   )
// }

// export default Jobs;


const Jobs = () => {
  const dispatch = useDispatch();
  const { AllJobs, isLoading } = useSelector((store) => store.allJobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {AllJobs.map((job) => (
            <li key={job.id}>{job.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Jobs;
