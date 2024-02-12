import React from 'react';
import Tabular from './Tabular';

const Profile = () => {
  return (
    <div className='mt-8'>
      <Tabular />

      <h2 className='uppercase'>Personal details of applicant</h2>

      <section className="py-1 bg-blueGray-50">
        <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
          <div className="flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form>
                <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  SECTION ONE: Personal Details
                </h6>
                <div class="flex flex-wrap">
                  <div class="w-full lg:w-4/12 px-6">
                    <div class="w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                        ID No:
                      </label>
                      <input type="text" required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                  </div>
                  <div class="w-full lg:w-4/12 px-6">
                    <div class="w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                        Email address
                      </label>
                      <input type="email" required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                  </div>
                  <div class="w-full lg:w-4/12 px-6">
                    <div class="w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                        Name (Surname,First,Other)
                      </label>
                      <input type="text" required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                  </div>
                  <div class="w-full lg:w-4/12 px-6">
                    <div className="w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="gender">
                        Gender
                      </label>
                      <select
                        id="gender"
                        className="border-0 px-3 py-3  placeholder-blue-300 text-slate-500 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                        <option  value="" >Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                  </div>
                  {/* SALUTATION */}
                  <div class="w-full lg:w-4/12 px-6">
                    <div className="w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="salutation">
                        Salutation
                      </label>
                      <select
                        id="salutation"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-slate-500 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      >
                        <option value="">Select Salutation</option>
                        <option value="mr">Mr.</option>
                        <option value="ms">Ms.</option>
                        <option value="mrs">Mrs.</option>
                        <option value="dr">Dr.</option>
                      </select>
                    </div>
                  </div>

                  {/* DOB */}
                  <div class="w-full lg:w-4/12 px-6">
                    <div class="w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="birthDate">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        required
                        id="birthDate"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-slate-500 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                  {/* ethnicity */}
                  <div class="w-full lg:w-4/12 px-6">
                    <div class="w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="ethnicity">
                        Ethnicity
                      </label>
                      <select name="selectethnicity" id="selectethnicity" class="form-control" className='border-0 px-3 py-3 placeholder-blueGray-300 text-slate-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'>
                        <option value="3333">Select Ethnicity</option>
                        <option value="38">Ajuran</option>
                        <option value="1">Bajun</option>
                        <option value="21">Basuba</option>
                        <option value="15">Boni-Sanye</option>
                        <option value="31">Borana</option>
                        <option value="36">Burji</option>
                        <option value="37">Dasnach-Shangil</option>
                        <option value="43">Degodia</option>
                        <option value="26">Dorobo</option>
                        <option value="30">Elmolo</option>
                        <option value="2">Embu</option>
                        <option value="32">Gabra</option>
                        <option value="54">Galjeel</option>
                        <option value="52">Galla</option>
                        <option value="39">Gosha</option>
                        <option value="40">Gureeh</option>
                        <option value="41">Hawiyah</option>
                        <option value="51">Ilchamus</option>
                        <option value="55">Isaak</option>
                        <option value="23">Kalenjin</option>
                        <option value="3">Kamba</option>
                        <option value="49">Kenya Arab</option>
                        <option value="47">Kenyan Asian</option>
                        <option value="48">Kenyan European</option>
                        <option value="44">Kenyan Somali</option>
                        <option value="4">Kikuyu</option>
                        <option value="11">Kisii</option>
                        <option value="13">Kuria</option>
                        <option value="56">Leysan</option>
                        <option value="14">Luhya</option>
                        <option value="22">Luo</option>
                        <option value="25">Masai</option>
                        <option value="5">Mbere</option>
                        <option value="6">Meru</option>
                        <option value="16">Miji Kenda</option>
                        <option value="45">Murulle</option>
                        <option value="27">Njemps</option>
                        <option value="50">Nubi</option>
                        <option value="42">Ogaden</option>
                        <option value="33">Orma</option>
                        <option value="46">Other Kenyan</option>
                        <option value="17">Pokomo</option>
                        <option value="12">Pokot</option>
                        <option value="34">Rendille</option>
                        <option value="35">Sakuye</option>
                        <option value="28">Samburu</option>
                        <option value="18">Swahili-Shirazi</option>
                        <option value="19">Taita</option>
                        <option value="20">Taveta</option>
                        <option value="24">Teso</option>
                        <option value="7">Tharaka</option>
                        <option value="29">Turkana</option>
                        <option value="53">Waat</option>
                        <option value="57">Wardei</option>

                      </select>
                    </div>
                  </div>
                  {/* pwd status */}
                  <div class="w-full lg:w-4/12 px-6">
                    <div class="w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="disabilityStatus">
                        Disability Status
                      </label>
                      <select
                        id="disabilityStatus"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-slate-500 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      >
                        <option value="">Select Disability Status</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        {/* Add more disability status options as needed */}
                      </select>
                    </div>
                  </div>

                  {/* Home county,constituency,sub county,home ward */}
                  <div class="w-full lg:w-4/12 px-6">
                    <div class="w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="disabilityStatus">
                        Home county
                      </label>
                      <select
                        id="disabilityStatus"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-slate-500 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      >
                        <option value="">Select Home county</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                  </div>
                  {/*  */}

                  <div class="w-full lg:w-4/12 px-6">
                    <div class="w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="disabilityStatus">
                        Home constituency
                      </label>
                      <select
                        id="disabilityStatus"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-slate-500 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      >
                        <option value="">Select Home constituency</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                  </div>

                  {/*  */}
                  <div class="w-full lg:w-4/12 px-6">
                    <div class="w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="disabilityStatus">
                        Sub County
                      </label>
                      <select
                        id="disabilityStatus"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-slate-500 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      >
                        <option value="">Select Sub county</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                  </div>

                  {/*  */}
                  <div class="w-full lg:w-4/12 px-6">
                    <div class="w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="disabilityStatus">
                        Home ward
                      </label>
                      <select
                        id="disabilityStatus"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-slate-500 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      >
                        <option value="">Select Home ward</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                  </div>
                  {/* postal address,postal code,Town */}
                  <div class="w-full lg:w-4/12 px-6">
                    <div class="w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                        Postal Address
                      </label>
                      <input type="text"  required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                  </div>
                  {/*  */}
                  <div class="w-full lg:w-4/12 px-6">
                    <div class="w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                        Postal Code
                      </label>
                      <input type="text" required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                  </div>
                  {/*  */}
                  <div class="w-full lg:w-4/12 px-6">
                    <div class="w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                        Town
                      </label>
                      <input type="text" required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                  </div>

                </div>

                <hr class="mt-6 border-b-1 border-blueGray-300" />

                <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  SECTION TWO: Current public institution Category
                </h6>
                <div class="flex flex-wrap">
                  <div class="w-full lg:w-4/12 px-4">
                    <div class="w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                        Current Public  Category
                      </label>
                      <input type="text" required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                  </div>

                  <div class="w-full lg:w-4/12 px-4">
                    <div class="w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                        Public institution

                      </label>
                      <input type="text" required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                  </div>

                  <div class="w-full lg:w-4/12 px-4">
                    <div class="w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                        Station
                      </label>
                      <input type="text" required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                  </div>
                  <div class="w-full lg:w-4/12 px-4">
                    <div class="w-full mb-3 md:mt-4">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                        Employment Number
                      </label>
                      <input type="text" required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                  </div>

                  {/*  */}
                  <div class="w-full lg:w-4/12 px-4">
                    <div class="w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                        Present Substance Post(Full designation)
                      </label>
                      <input type="text" required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                  </div>
                  {/*  */}
                  <div class="w-full lg:w-4/12 px-6 md:mt-4">
                    <div class="w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="appointmentDate">
                        Date of Currrent Appointment
                      </label>
                      <input
                        type="date"
                        required
                        id="appointmentDate"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-slate-500 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                  {/*  */}
                  <div class="w-full lg:w-4/12 px-6">
                    <div class="w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="prevAppointmentDate">
                        Effective date of previous appointment
                      </label>
                      <input
                        type="date"
                        required
                        id="prevAppointmentDate"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-slate-500 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                  {/*  */}
                  <div class="w-full lg:w-4/12 px-4">
                    <div class="w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                        Designation of previous appointment
                      </label>
                      <input type="text" required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                  </div>
                  {/*  */}
                  <div class="w-full lg:w-4/12 px-4 md:mt-4">
                    <div class="w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                        Job Group
                      </label>
                      <input type="text" required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                  </div>
                  {/*  */}
                  <div class="w-full lg:w-4/12 px-4">
                    <div class="w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                        Term of Service
                      </label>
                      <input type="text" required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                  </div>

                </div>

                <hr class="mt-6 border-b-1 border-blueGray-300" />

                <button type='submit' className='bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 mt-2 text-white'>Submit</button>

              </form>
            </div>
          </div>
          {/* <footer className="pt-8 pb-6 mt-2">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                </div>
              </div>
            </div>
          </footer> */}
        </div>
      </section>
    </div>
  );
};

export default Profile;
