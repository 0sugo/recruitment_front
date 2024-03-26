import React, { useState } from 'react'
import Tabular from './Tabular'
import { useDispatch } from 'react-redux';
import { submitReferees } from '../redux/Profile/refereesSlice';
import Output from './Output';

const Referees = () => {
  const dispatch = useDispatch();
  const userId = 129

  const [formData, setFormData] = useState({
    full_name: '',
    position: '',
    mobile_no: '',
    email: '',
    period: '',
    full_name2: '',
    position2: '',
    mobile_no2: '',
    email2: '',
    period2: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitReferees({ userId, refereeData: formData }));
  };



  return (
    <>
    <Output />
    <div className=''>
      <Tabular />

      <h2 className='uppercase'>Referees</h2>

      <section className="py-1 ">
        <div className="w-full lg:w-8/12 px-4 mx-auto mt-6 ">
          <div className="flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleSubmit}>
                <h6 class="text-red-600 text-sm mt-3 mb-6 font-bold uppercase">
                  FIRST REFEREE
                </h6>
                <div class="flex flex-wrap">
                  <div class="w-full lg:w-6/12 px-6">
                    <div class="w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                        Full names
                      </label>
                      <input type="text" name='full_name' value={formData.full_name}
                        onChange={handleChange}required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                  </div>


                  <div class="w-full lg:w-6/12 px-6">
                    <div class="w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                        Occupation
                      </label>
                      <input type="text" name='position' value={formData.position}
                        onChange={handleChange}required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                  </div>

                  <div class="w-full lg:w-6/12 px-6">
                    <div class="w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                        Mobile No
                      </label>
                      <input type="tel" name='mobile_no' value={formData.mobile_no}
                        onChange={handleChange} required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                  </div>

                  <div class="w-full lg:w-6/12 px-6">
                    <div class="w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                        email
                      </label>
                      <input type="email" name='email' value={formData.email}
                        onChange={handleChange} required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                  </div>

                  <div class="w-full lg:w-6/12 px-6">
                    <div class="w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                        Period for which the referee has known you:
                      </label>
                      <input type="number" name='period' value={formData.period}
                        onChange={handleChange} required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                  </div>





                </div>

                <hr class="mt-6 border-b-1 border-blueGray-300" />

                <h6 class="text-red-600 text-sm mt-3 mb-6 font-bold uppercase">
                  SECOND REFEREE
                </h6>
                <div class="flex flex-wrap">
                  <div class="w-full lg:w-6/12 px-6">
                    <div class="w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                        Full names
                      </label>
                      <input type="text" name='full_name2' value={formData.full_name2}
                        onChange={handleChange}required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                  </div>


                  <div class="w-full lg:w-6/12 px-6">
                    <div class="w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                        Occupation
                      </label>
                      <input type="text" name='position2' value={formData.position2}
                        onChange={handleChange} required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                  </div>

                  <div class="w-full lg:w-6/12 px-6">
                    <div class="w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                        Mobile No
                      </label>
                      <input type="tel" name='mobile_no2' value={formData.mobile_no2}
                        onChange={handleChange} required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                  </div>

                  <div class="w-full lg:w-6/12 px-6">
                    <div class="w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                        email
                      </label>
                      <input type="email" name='email2' value={formData.email2}
                        onChange={handleChange} required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                  </div>

                  <div class="w-full lg:w-6/12 px-6">
                    <div class="w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                        Period for which the referee has known you ( In Yrs):
                      </label>
                      <input type="number" name='period2' value={formData.period2}
                        onChange={handleChange} required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
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

export default Referees
