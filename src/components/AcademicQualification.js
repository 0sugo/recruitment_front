import React, { useState } from 'react'
import Tabular from './Tabular';

const AcademicQualifications = () => {

    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <div className='mt-8'>
      <Tabular />

            <h2 className='uppercase'>Academic Qualification</h2>

            <section className="py-1 bg-blueGray-50">
                <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
                    <div className="flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                            <form>
                                <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                    SECTION ONE: Personal Details
                                </h6>
                                <div class="flex flex-wrap">
                                    <div class="w-full lg:w-6/12 px-6">
                                        <div class="w-full mb-3">
                                            <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                                Institution name
                                            </label>
                                            <input type="text" required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                        </div>
                                    </div>

                                    <div className="w-full lg:w-6/12 px-6">

                                        <div className="w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                Education Level
                                            </label>
                                            <select
                                                required
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                value={selectedOption}
                                                onChange={handleOptionChange}
                                            >
                                                <option value="">Select an option</option>
                                                <option value="course">Cours/Programme</option>
                                                <option value="certificate">Certificate(KCPE, KCSE)</option>
                                            </select>
                                        </div>
                                    </div>

                                    {selectedOption === "certificate" && (
                                        <>
                                            <div className="w-full lg:w-6/12 px-6">
                                                <div className="w-full mb-3">
                                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grade-input">
                                                        Enter Grade
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="grade-input"
                                                        placeholder="Enter grade here..."
                                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    />
                                                </div>
                                            </div>

                                            <div className="w-full lg:w-6/12 px-6">
                                                <div className="w-full mb-3">
                                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="certNo-input">
                                                        Enter Cert No.
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="certNo-input"
                                                        placeholder="Enter certificate number here..."
                                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    )}



                                    {selectedOption === "course" && (
                                        <>
                                        <div className="w-full lg:w-6/12 px-6">
                                        <div className="w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                Awards
                                            </label>
                                            <select
                                                required
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

                                            >
                                                <option value="">Select an option</option>
                                                <option value="doctrate">Doctrate</option>
                                                <option value="masters">Masters</option>
                                                <option value="degree">Degree</option>
                                                <option value="diploma">Diploma</option>
                                                <option value="cert">Certificate</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="w-full lg:w-6/12 px-6">
                                        <div class="w-full mb-3">
                                            <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                                Institution name
                                            </label>
                                            <input type="text" required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                        </div>
                                    </div>

                                    <div class="w-full lg:w-6/12 px-6">
                                        <div class="w-full mb-3">
                                            <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                                Student Admission number
                                            </label>
                                            <input type="text" required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                        </div>
                                    </div>

                                    <div className="w-full lg:w-6/12 px-6">
                                    <div class="w-full mb-3">
                                        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                            Program/course
                                        </label>
                                        <select required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                            <option selected>select type of prog</option>
                                            <option>Degree</option>
                                            <option>(Diploma)</option>

                                        </select>
                                    </div>
                                </div>

                                <div class="w-full lg:w-6/12 px-6">
                                        <div class="w-full mb-3">
                                            <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                                Area of Specialization
                                            </label>
                                            <select required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                                <option>IT</option>
                                                <option>Cs</option>

                                            </select>
                                        </div>
                                    </div>

                                    <div class="w-full lg:w-6/12 px-6">
                                        <div class="w-full mb-3">
                                            <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                                Grade
                                            </label>
                                            <select required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                                <option selected>select Grade</option>
                                                <option>Distintions</option>
                                                <option>Credit</option>
                                            </select>
                                        </div>
                                    </div>




                                        </>
                                    )}



                                    {/* Start Date */}
                                    <div class="w-full lg:w-6/12 px-6">
                                        <div class="w-full mb-3">
                                            <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="startDate">
                                                Start Date
                                            </label>
                                            <input
                                                type="date"
                                                required
                                                id="startDate"
                                                class="border-0 px-3 py-3 placeholder-blueGray-300 text-slate-500 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            />
                                        </div>
                                    </div>


                                    {/* Graduation/Completion Date */}
                                    <div class="w-full lg:w-6/12 px-6">
                                        <div class="w-full mb-3">
                                            <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="endDate">
                                                Graduation/Completion Date
                                            </label>
                                            <input
                                                type="date"
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
    )
}

export default AcademicQualifications
