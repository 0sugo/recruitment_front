import React, { useState } from 'react'
import Tabular from './Tabular'
import { useDispatch } from 'react-redux'
import { submitQualification } from '../redux/Profile/profQualificationSlice'
import Output from './Output'

const ProfessionalQualification = () => {
  const dispatch = useDispatch();
  const userId = 115;

  const [formData, setFormData] = useState({
    institution_name: '',
    course_name: '',
    certificate_no: '',
    start_date: '',
    end_date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitQualification({ userId, qualificationData: formData }));
  };

  return (
    <>
      {/* <Output /> */}
      <div className=''>
        {/* <Tabular /> */}

        <h2 className='uppercase'>Professional Qualification</h2>

        <section className="py-1 bg-blueGray-50">
          <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
            <div className="flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form onSubmit={handleSubmit}>
                  <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    SECTION ONE: Personal Details
                  </h6>
                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-6/12 px-6">
                      <div class="w-full mb-3">
                        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                          Institution name
                        </label>
                        <input type="text" name='institution_name' value={formData.institution_name}
                          onChange={handleChange} required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                      </div>
                    </div>

                    <div class="w-full lg:w-6/12 px-6">
                      <div class="w-full mb-3">
                        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                          Course Name
                        </label>
                        <input type="text" name='course_name' value={formData.course_name}
                          onChange={handleChange} required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                      </div>
                    </div>

                    <div class="w-full lg:w-6/12 px-6">
                      <div class="w-full mb-3">
                        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                          Certificate No
                        </label>
                        <input type="text" name='certificate_no' value={formData.certificate_no}
                          onChange={handleChange} required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                      </div>
                    </div>


                    {/* Start Date */}
                    <div class="w-full lg:w-6/12 px-6">
                      <div class="w-full mb-3">
                        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="startDate">
                          Start Date
                        </label>
                        <input
                          type="date"
                          name='start_date'
                          value={formData.start_date}
                          onChange={handleChange}
                          required
                          id="startDate"
                          class="border-0 px-3 py-3 placeholder-blueGray-300 text-slate-500 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>

                    {/* End Date */}
                    <div class="w-full lg:w-6/12 px-6">
                      <div class="w-full mb-3">
                        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="endDate">
                          End Date
                        </label>
                        <input
                          type="date"
                          name='end_date'
                          value={formData.end_date}
                          onChange={handleChange}
                          required
                          id="endDate"
                          class="border-0 px-3 py-3 placeholder-blueGray-300 text-slate-500 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>

                  </div>

                  <hr class="mt-6 border-b-1 border-blueGray-300" />

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

export default ProfessionalQualification
