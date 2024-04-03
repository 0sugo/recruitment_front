import React from 'react'
import Tabular from './Tabular'
import { useDispatch } from 'react-redux';
import { submitMembershipProfessionalBodies } from '../redux/Profile/memProfBodiesSlice';
import Output from './Output';

const MemProfBodies = () => {

  const dispatch = useDispatch();
  const userId = localStorage.getItem('userId');

  const [formData, setFormData] = React.useState({
    professional_body: '',
    membership_type: '',
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
    dispatch(submitMembershipProfessionalBodies({ userId, membershipProfessionalBodiesData: formData }));
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
                    <span className='font-bold'>SECTION five: </span>Membership for Professional Bodies
                  </h6>
                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-6/12 px-6">
                      <div class="w-full mb-3">
                        <label class="block uppercase text-blueGray-600 text-xs  mb-2" htmlfor="grid-password">
                          Professional body :
                        </label>
                        <input type="text" name="professional_body"
                          value={formData.professional_body}
                          onChange={handleChange} required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                      </div>
                    </div>


                    <div class="w-full lg:w-6/12 px-6">
                      <div class="w-full mb-3">
                        <label class="block uppercase text-blueGray-600 text-xs  mb-2" htmlfor="grid-password">
                          Membership type (e.g Associate) :
                        </label>
                        <input required name="membership_type"
                          value={formData.membership_type}
                          onChange={handleChange} type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-6">
                      <div class="w-full mb-3">
                        <label class="block uppercase text-blueGray-600 text-xs  mb-2" htmlfor="grid-password">
                          Certificate No :
                        </label>
                        <input required type="text" name="certificate_no"
                          value={formData.certificate_no}
                          onChange={handleChange} class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                      </div>
                    </div>


                    {/* Start Date */}
                    <div class="w-full lg:w-6/12 px-6">
                      <div class="w-full mb-3">
                        <label class="block uppercase text-blueGray-600 text-xs  mb-2" htmlFor="startDate">
                          Start Date :
                        </label>
                        <input
                          type="date"
                          name="start_date"
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
                        <label class="block uppercase text-blueGray-600 text-xs  mb-2" htmlFor="endDate">
                          End Date :
                        </label>
                        <input
                          type="date"
                          required
                          name="end_date"
                          value={formData.end_date}
                          onChange={handleChange}
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

export default MemProfBodies
