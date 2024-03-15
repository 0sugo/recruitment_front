import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postJob } from '../redux/Jobs/JobsSlice';
import { fetchAllApplications } from '../redux/Applications/applicationsSlice';
import { NavLink } from 'react-router-dom';

const Admin = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const jobData = {};
    formData.forEach((value, key) => {
      jobData[key] = value;
    });

    dispatch(postJob(jobData));
  };

  const { AllApplications, isLoading, error } = useSelector((state) => state.applications);

  useEffect(() => {
    dispatch(fetchAllApplications());
  }, [dispatch]);


  return (
    <div className=''>
      <section className="py-1 bg-slate-200 w-full lg:w-8/12 px-4 mx-auto mt-12 shadow-lg shadow-slate-400">

        <div class="question-wrap mx-8 mt-2">
          <details class="question py-4 border-b border-grey-lighter">

            <summary class="flex items-center font-bold">ADD A NEW JOB
              <button class="ml-auto">
                <svg class="fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" /></svg>
              </button>
            </summary>

            <div className="w-full lg:w-10/12 px-4 mx-auto mt-6">
              <div className="flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <form onSubmit={handleSubmit}>
                    <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                      Post Jobs
                    </h6>
                    <div class="flex flex-wrap">

                      <div class="w-full lg:w-4/12 px-6">
                        <div class="w-full mb-3">
                          <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                            Job Title
                          </label>
                          <input type="text" name='job_title' required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                        </div>
                      </div>

                      <div class="w-full lg:w-4/12 px-6">
                        <div class="w-full mb-3">
                          <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                            Ref No.
                          </label>
                          <input type="text" name='ref_no' required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                        </div>
                      </div>


                      {/* employmentTerms */}

                      <div class="w-full lg:w-4/12 px-6">
                        <div className="w-full mb-3">
                          <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="salutation">
                            Employment Terms
                          </label>
                          <select
                            id="employmentTerms" name='emp_terms'
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-slate-500 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          >
                            <option value="">Select Employment Terms</option>
                            <option value="Permanent">Permanent</option>
                            <option value="Contractual">Contractual</option>
                          </select>
                        </div>
                      </div>

                      <div class="w-full lg:w-4/12 px-6">
                        <div class="w-full mb-3">
                          <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                            Positions Availabe
                          </label>
                          <input type="number" name='positions' required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                        </div>
                      </div>

                      {/* Deadline */}
                      <div class="w-full lg:w-4/12 px-6">
                        <div class="w-full mb-3">
                          <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="birthDate">
                            Deadline
                          </label>
                          <input
                            type="date"
                            name='deadline'
                            required
                            id="deadline"
                            class="border-0 px-3 py-3 placeholder-blueGray-300 text-slate-500 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                        </div>
                      </div>

                    </div>

                    <hr class="mt-6 border-b-1 border-blueGray-300" />

                    <button type='submit' className='bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 mt-2 text-white'>Post</button>

                  </form>
                </div>

                <hr class="mt-6 border-b-1 border-blueGray-300" />

              </div>
            </div>

          </details>
        </div>
      </section>

      <NavLink to="/Shortlisted-Applications">
        <section className="py-1 bg-slate-200 w-full lg:w-8/12 px-4 mx-auto mt-6 shadow-lg shadow-slate-400">

          <div class="question-wrap mx-8 mt-2">
            <div class="question py-4 border-b border-grey-lighter">

              <div class="flex items-center font-bold">VIEW SHORTLISTED

              </div>

            </div>
          </div>
        </section>
      </NavLink>

      <NavLink to="/Rejected-Applications">
        <section className="py-1 bg-slate-200 w-full lg:w-8/12 px-4 mx-auto mt-6 shadow-lg shadow-slate-400">

          <div class="question-wrap mx-8 mt-2">
            <div class="question py-4 border-b border-grey-lighter">

              <div class="flex items-center font-bold">VIEW REJECTED

              </div>

            </div>
          </div>
        </section>

      </NavLink>



      <NavLink to="/All-Applications">
        <section className="py-1 bg-slate-200 w-full lg:w-8/12 px-4 mx-auto mt-6 shadow-lg shadow-slate-400">
          <div class="question-wrap mx-8 mt-2">
            <div class="question py-4 border-b border-grey-lighter">

              <div class="flex items-center font-bold">VIEW ALL APPLICATIONS

              </div>

            </div>
          </div>


        </section>
      </NavLink>

    </div>
  )
}

export default Admin
