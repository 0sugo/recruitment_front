import React, { useState } from 'react'
import Tabular from './Tabular';
import { useDispatch } from 'react-redux';
import { postAcademicQualifications } from '../redux/Profile/academicSlice';
import Output from './Output';

const AcademicQualifications = () => {

    const dispatch = useDispatch();
    // const token = useSelector(selectToken);
    const userId = localStorage.getItem('userId');

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const academicQualification = {
            institution_name: formData.get('institution_name'),
            education_level: selectedOption,
            admission_no: formData.get('admission_no'),
            certificate_no: formData.get('certificate_no'),
            award: formData.get('award'),
            programme_name: formData.get('programme_no'),
            grade: selectedGrade,
            start_date: formData.get('start_date'),
            end_date: formData.get('end_date'),
        };

        if (userId) {
            dispatch(postAcademicQualifications(academicQualification, userId));
            console.log(academicQualification);
        }
    }

    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const [selectedProgram, setSelectedProgram] = useState('');
    const [selectedGrade, setSelectedGrade] = useState('');

    const programOptions = [
        'Certificate/Trade test',
        'Diploma',
        'Advanced/Higher diploma',
        'Degree',
        'Post Graduate',
        'Masters',
        'Doctrate/PhD'
    ];

    const gradeOptions = {
        'Certificate/Trade test': ['Distinction', 'Credit', 'Pass', 'Not Graded'],
        'Diploma': ['Distinction', 'Credit', 'Pass', 'Not Graded'],
        'Degree': ['First Class', 'Second class(Upper)', 'Second class(Lower)', 'Pass'],
        'Advanced/Higher diploma': ['Distinction', 'Credit', 'Pass', 'Not Graded'],
        'Post Graduate': ['Distinction', 'Credit', 'Pass', 'Not Graded'],
        'Masters': ['Distinction', 'Merit', 'Pass'],
        'Doctrate/PhD': ['Distinction', 'Merit', 'Pass'],
    };

    const handleProgramChange = (event) => {
        const selectedProgram = event.target.value;
        setSelectedProgram(selectedProgram);
        setSelectedGrade('');
    };

    const handleGradeChange = (event) => {
        const selectedGrade = event.target.value;
        setSelectedGrade(selectedGrade);
    };

    return (
        <div className=''>
            {/* <Output /> */}
            {/* <Tabular /> */}

            <h2 className='uppercase'>Academic Qualification</h2>

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
                                            <input type="text" name='institution_name' required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
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
                                                <option value="course">Course/Programme</option>
                                                <option value="certificate">Certificate(KCPE, KCSE)</option>
                                            </select>
                                        </div>
                                    </div>

                                    {selectedOption === "certificate" && (
                                        <>
                                            {/* <div className="w-full lg:w-6/12 px-6">
                                                <div className="w-full mb-3">
                                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grade-input">
                                                        Enter Grade
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="grade"
                                                        placeholder="Enter grade here..."
                                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    />
                                                </div>
                                            </div> */}

                                            <div class="w-full lg:w-6/12 px-6">
                                                <div class="w-full mb-3">
                                                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                                        Grade
                                                    </label>
                                                    <select className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                                        <option value="">Select an option</option>
                                                        <option value="A">A</option>
                                                        <option value="B">B</option>
                                                        <option value="C">C</option>
                                                        <option value="D">D</option>
                                                        <option value="E">E</option>

                                                    </select>
                                                </div>
                                            </div>

                                            <div className="w-full lg:w-6/12 px-6">
                                                <div className="w-full mb-3">
                                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="certNo-input">
                                                        Enter Cert No.
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="certificate_no"
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
                                                        id="program-dropdown"
                                                        name='award'
                                                        required
                                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        onChange={handleProgramChange}
                                                        value={selectedProgram}
                                                    >
                                                        <option value="" disabled>Select type of program</option>
                                                        {programOptions.map(program => (
                                                            <option key={program} value={program}>{program}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="w-full lg:w-6/12 px-6">
                                                <div class="w-full mb-3">
                                                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                                        Institution name
                                                    </label>
                                                    <input type="text" name='institution_name' required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                                </div>
                                            </div>

                                            <div class="w-full lg:w-6/12 px-6">
                                                <div class="w-full mb-3">
                                                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                                        Student Admission number
                                                    </label>
                                                    <input type="text" name='admission_no' required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                                </div>
                                            </div>

                                            <div className="w-full lg:w-6/12 px-6">
                                                <div class="w-full mb-3">
                                                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                                        Program/course
                                                    </label>
                                                    <input type="text" name='programme_no' required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />

                                                </div>
                                            </div>




                                            <div class="w-full lg:w-6/12 px-6">
                                                <div class="w-full mb-3">
                                                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                                        Grade
                                                    </label>
                                                    <select
                                                        id="grade-dropdown"
                                                        name="grade"
                                                        required
                                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        onChange={handleGradeChange}
                                                        value={selectedGrade}
                                                    >
                                                        <option value="" disabled>Select Grade</option>
                                                        {gradeOptions[selectedProgram] && gradeOptions[selectedProgram].map(grade => (
                                                            <option key={grade} value={grade}>{grade}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="w-full lg:w-6/12 px-6">
                                                <div class="w-full mb-3">
                                                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                                        Certificate Number
                                                    </label>
                                                    <input type="text" name='certificate_no' required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />

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
                                                name="start_date"
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
                                                name="end_date"
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
