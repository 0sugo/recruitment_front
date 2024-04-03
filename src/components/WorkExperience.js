import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitWorkExperience } from '../redux/Profile/workExperienceSlice';
import Tabular from './Tabular';
import Output from './Output';

const WorkExperience = () => {
  const dispatch = useDispatch();
  const userId = localStorage.getItem('userId');

  const [formData, setFormData] = useState({
    position: '',
    job_group: '',
    mcda: '',
    start_date: '',
    end_date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitWorkExperience({ userId, workExperienceData: formData }));
  };

  return (
    <>
      {/* <Output /> */}

      <div className=''>
        {/* <Tabular /> */}

        <section className="py-1 bg-blueGray-50">
          <div className="w-full lg:w-10/12 px-4 mx-auto mt-6">
            <div className="flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form onSubmit={handleSubmit}>
                <h6 class="text-blueGray-400 text-sm mt-3 mb-6 uppercase">
                    <span className='font-bold'>SECTION six: </span>Personal Details
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-6">
                      <div className="w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs mb-2" htmlFor="designation">
                          Designation/Position :
                        </label>
                        <input
                          type="text"
                          name="position"
                          value={formData.position}
                          onChange={handleChange}
                          required
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>

                    <div className="w-full lg:w-6/12 px-6">
                      <div className="w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs mb-2" htmlFor="NCDA">
                          Job Group :
                        </label>
                        <input
                          type="text"
                          name="job_group"
                          value={formData.job_group}
                          onChange={handleChange}
                          required
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>


                    <div className="w-full lg:w-6/12 px-6">
                      <div className="w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs mb-2" htmlFor="NCDA">
                          NCDA :
                        </label>
                        <input
                          type="text"
                          name="mcda"
                          value={formData.mcda}
                          onChange={handleChange}
                          required
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>

                    <div className="w-full lg:w-6/12 px-6">
                      <div className="w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs mb-2" htmlFor="startDate">
                          Start Date :
                        </label>
                        <input
                          type="date"
                          name="start_date"
                          value={formData.start_date}
                          onChange={handleChange}
                          required
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>

                    <div className="w-full lg:w-6/12 px-6">
                      <div className="w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs mb-2" htmlFor="endDate">
                          End Date :
                        </label>
                        <input
                          type="date"
                          name="end_date"
                          value={formData.end_date}
                          onChange={handleChange}
                          required
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                  </div>

                  <hr className="mt-6 border-b-1 border-blueGray-300" />

                  <button type='submit' className='bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 mt-2 text-white'>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default WorkExperience;
