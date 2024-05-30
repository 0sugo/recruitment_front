import React, { useEffect, useRef, useState } from 'react'
import { AiFillPrinter } from "react-icons/ai";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { CgNotes } from "react-icons/cg";
import coat from '../images/coat.png';
import { useDispatch, useSelector } from 'react-redux';
import { getMyLeaves, populateLeaveForm } from '../redux/Leave/LeaveSlice';
import { ClipLoader } from 'react-spinners';
import { useParams } from 'react-router-dom';
import ReactToPrint from 'react-to-print';

const LeaveReport = () => {

  const adminChoice = useParams();

  const componentRef = useRef(null);
  const dispatch = useDispatch();
  const userId = localStorage.getItem('userId');
  const role = localStorage.getItem('role');
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = React.useState(false);
  const leaveSummary = useSelector((state) => state.leave.myLeaves);
  const formData = useSelector((state) => state.leave.leaveData);
  const [isDataReady, setIsDataReady] = useState(false);


  useEffect(() => {
    dispatch(getMyLeaves())
      .then(() => {
        setLoading(false);
      })
  }, [dispatch]);

  const printTriggerRef = useRef();

  const handlePrint = async (leaveReportId) => {
    setIsDataReady(false);
    await dispatch(populateLeaveForm(leaveReportId));
    setIsDataReady(true);
  };

  useEffect(() => {
    if (isDataReady && formData) {
      handleReactToPrint();
    }
  }, [isDataReady, formData]);

  const handleReactToPrint = () => {
    if (printTriggerRef.current) {
      printTriggerRef.current.click();
    }
  };
console.log(leaveSummary)
  return (
    <div className='relative bg-gray-100 p-4'>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <ClipLoader color={'#123abc'} loading={loading} size={90} />
        </div>
      ) : (
        <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 w-full max-w-7xl bg-white shadow-lg rounded-lg overflow-hidden md:p-4 xs:w-[90%]">
          <div className="p-4 border-b">
            <h2 className="text-xl font-semibold">My Applications</h2>
          </div>
          <div className='p-4 overflow-x-auto'>
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className='border-b border-slate-500'>
                  <th className='px-6 py-3 border text-center'>S/N</th>
                  <th className='px-6 py-3 border text-center'>Leave Category</th>
                  <th className='px-6 py-3 border text-center'>Date</th>
                  <th className='px-6 py-3 border text-center'>Duration</th>
                  <th className='px-6 py-3 border text-center'>Status</th>
                  <th className='px-6 py-3 border text-center'>Stage</th>
                  <th className='px-6 py-3 border text-center'>View</th>
                </tr>
              </thead>

              <tbody>
                {leaveSummary.map((leave, index) => (
                  <tr key={index} className="odd:bg-white even:bg-gray-50">
                    <td className='px-6 py-3 border text-center' >{leave.leave_type}</td>
                    <td className='px-6 py-3 border text-center' onClick={() => handlePrint(leave.id)}>{leave.name}</td>
                    <td className='px-6 py-3 border text-center'>{leave.leave_begins_on}</td>
                    <td className='px-6 py-3 border text-center'>{leave.num_of_days} days</td>
                    <td className='px-6 py-3 border text-center'>
                      {leave.status === 1 ? (
                        <div className='flex items-center gap-5'>
                          <span className='bg-green-600 p-1 text-white rounded-full w-2 h-2 flex items-center justify-center'>
                            <span className='dot'></span>
                          </span>
                          <span className='text-black'>Approved</span>
                        </div>
                      ) : leave.status === 2 ? (
                        <div className='flex items-center gap-5'>
                          <span className='bg-red-600 p-1 text-white rounded-full w-2 h-2 flex items-center justify-center'>
                            <span className='dot'></span>
                          </span>
                          <span className='text-black'>Rejected</span>
                        </div>
                      ) : (
                        <div className='flex items-center gap-5'>
                          <span className='bg-orange-600 p-1 text-white rounded-full w-2 h-2 flex items-center justify-center'>
                            <span className='dot'></span>
                          </span>
                          <span className='text-black'>Pending</span>
                        </div>
                      )}
                    </td>
                    <td className='px-6 py-3 border text-center'>

                      {leave.stage === 1 ? (
                        <div className='flex items-center gap-5'>
                          <span className='text-black'>HOD</span>
                        </div>
                      ) : leave.stage === 3 ? (
                        <div className='flex items-center gap-5'>
                          <span className='text-black'>HR</span>
                        </div>
                      ) : leave.stage === 2 ? (
                        <div className='flex items-center gap-5'>
                          <span className='text-black'>PS</span>
                        </div>
                      ) : leave.stage === 4 ? (
                        <div className='flex items-center gap-5'>
                          <span className='text-black'>Approved</span>
                        </div>
                      ) : (
                        <div className='flex items-center gap-5'>
                          <span className='text-black'>Pending</span>
                        </div>
                      )}
                    </td>
                    <td className='px-6 py-3 border text-center'>
                      <div className=' flex items-center justify-between'>

                        <ReactToPrint trigger={() => (
                          <button ref={printTriggerRef} style={{ display: 'none' }}>Print</button>
                        )}
                          content={() => componentRef.current} />

                        <AiFillPrinter className='cursor-pointer' onClick={() => handlePrint(leave.id)} />
                        <span className='cursor-pointer'><CgNotes /></span>
                      </div>
                    </td>
                  </tr>
                ))
                }
              </tbody>

              {/* <div className="flex items-center justify-center mt-4">
              <button onClick={goToPrevPage} disabled={currentPage === 1}>
                <AiOutlineLeft />
              </button>

              <span className="mx-2">{currentPage}</span>

              <button onClick={goToNextPage} disabled={currentPage === totalPages}>
                <AiOutlineRight />
              </button>
            </div> */}
            </table>

            <div>
              {/* {showModal && <div className="fixed inset-0 z-40 bg-black opacity-25"></div>} */}
              {isDataReady && formData && (
                <div className="leave-template mx-24 my-20" ref={componentRef}>
                  <div className="header ">
                    <div className='flex flex-col items-center'>
                      <img src={coat} alt="Ministry Logo" className='w-32 my-4' />
                      <h3 className='items-center'>MINISTRY OF LABOUR AND SOCIAL PROTECTION</h3>
                      <p className='font-bold italic'>(To be completed in triplicate at least 30 days before leave is due)</p>
                    </div>
                    <div className='flex justify-between my-8'>
                      <p>PF/NO: <span className='font-bold'>{formData.user_job_id}</span></p>
                      <p>Date: <span className='font-bold'>{formData.user_date}</span></p>
                    </div>
                  </div>
                  <div className="content flex flex-col gap-2">
                    <p>
                      The Principal Secretary <br />
                      Ministry of Labour and Social Protection <br />
                      P.O. Box 40326-00100 <br />
                      <span className='font-bold'>NAIROBI</span>
                    </p>
                    <p >
                      Thro’ <span className='font-bold'>{formData.hod_approved_by}</span><br />
                    </p>

                    <h3 className='font-bold'>APPLICATION FOR ANNUAL LEAVE</h3>
                    <p>
                      I <span className='font-bold'>{formData.user_name}</span> P/No <span className='font-bold'>{formData.user_job_id} </span>Designation <span className='font-bold'>{formData.user_designation}</span> Apply for <span className='font-bold'>{formData.user_num_of_days}</span> Days annual leave beginning on{' '}
                      <span className='font-bold'>{formData.user_leave_begin_on}</span>. The last leave was taken by me was from <span className='font-bold'>{formData.user_last_leave_taken_from} </span>to <span className='font-bold'>{formData.user_last_leave_taken_to}</span>.
                    </p>
                    <p>
                      My leave address will be:  <span className='font-bold'>{formData.user_leave_address}</span> and Mobile No:  <span className='font-bold'>{formData.user_id}</span> <br />
                    </p>
                    <p>
                      During the period of leave, my salary should: <br />
                      {formData.user_salary_paid_to === 'a' &&
                        <span className='font-bold'>Continue to be paid into my account</span>}
                      {formData.user_salary_paid_to === 'b' &&
                        <span className='font-bold'>Be paid at the following address:</span>}
                      {formData.user_salary_paid_to === 'b' && formData.user_salary_account_no}
                      {formData.user_salary_paid_to === 'c' &&
                        <span className='font-bold'>Be included in the payroll of {formData.user_salary_account_no} Station</span>}
                    </p>



                    <p>
                      As I am taking not less than one-half of my annual leave due to me, I wish to receive my pay for the month of{' '}
                      <span className='font-bold'>{formData.user_date}</span> Three days before the date of commencement of leave in terms of Regulation 1.1 of the Code of
                      Regulation.
                    </p>
                    <p>
                      I understand that I will require permission should I desire to spend leave outside Kenya in terms of
                      personnel Circular No. 6 of 15th January 1967.
                    </p>
                    <div className='flex justify-between items-end mt-4'>
                      <p>Date: <span className='font-bold'> {formData.user_date}</span></p>
                      <div>
                        <div className='flex flex-col'>
                          <img src={formData.user_sign} alt="Applicant's Signature" className="w-32" />
                          <p className='font-bold'>Signature of Applicant</p>
                        </div>
                      </div>
                    </div>

                    <h3 className='mx-auto' style={{ pageBreakBefore: 'always' }}>PART II</h3>
                    <p className='font-bold italic'>(To be completed by Head of Department)</p>
                    {formData.hod_recommend_other === 1 ? (
                      <>
                        <p className='font-bold'>Approved</p>
                        <p>Recommended arrangement can be made for the performance of duties of the above Officer during his/her absence.</p>
                      </>
                    ) : (
                      <span className='inline'>
                        <p><span className='font-bold'>Not Approved</span> for the following reasons: -</p>
                        {formData.rejectedReason && <p>Reason: <span className='font-bold'>{formData.rejectedReason}</span></p>}
                      </span>
                    )}
                    <div className='flex justify-between'>
                      <div className='flex flex-col justify-between '>
                        <p >Station: <span className='font-bold'>{formData.hod_station}</span></p>
                        <p >Designation: <span className='font-bold'>HOD</span></p>

                        <p> </p>
                      </div>

                      <div className='flex justify-between'>
                        <div className='flex flex-col justify-between '>

                          <p >Date: <span className='font-bold'>{formData.hod_date}</span></p>

                          <div className='flex items-center'>
                            <p className=''>Sign : </p>
                            <img src={formData.hod_sign} alt="Applicant's Signature" className="w-32" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <h3 className='mx-auto'>PART III</h3>
                    <p className='font-bold italic'>(To be completed by the Principal Secretary where applicable)</p>
                    <p >This application is: <span className='font-bold'> Approved</span></p>

                    <div className='flex justify-between'>
                      <p >Date: <span className='font-bold'>{formData.ps_date}</span></p>
                      <div className='flex items-center'>
                        <p className=''>Sign : </p>
                        <img src={formData.ps_sign} alt="Applicant's Signature" className="w-32" />
                      </div>
                    </div>

                    <h3 className='mx-auto'>PART IV</h3>
                    <p className='font-bold italic'>(To be completed by the HRM&D Department)</p>
                    <p>
                      Leave b/f from the previous year: <span className='font-bold'>{formData.hrmd_leave_bf_from_prev_year}</span> days <br />
                      Leave days for the current year: <span className='font-bold'>{formData.hrmd_leave_days_for_current_year}</span> days <br />
                      Total Leave days due: <span className='font-bold'>{formData.hrmd_leave_balance_for_this_year}</span> days <br />
                      Less days already taken: <span className='font-bold'>{formData.hrmd_less_days_already_taken}</span> days <br />
                      Less this application: <span className='font-bold'>{formData.hrmd_less_this_application}</span> days <br />
                      Leave balance for the current year: <span className='font-bold'>{formData.hrmd_leave_balance_for_this_year}</span> days
                      <span>To resume duty on: <span className='font-bold'>{formData.hrmd_to_resume_on}</span></span>
                    </p>
                    <div className='flex justify-between items-end'>
                      <p >Date: <span className='font-bold'>{formData.hrmd_date}</span></p>

                      <p >Designation: <span className='font-bold'>HR</span></p>

                      <div className='flex items-end'>
                        <p className=''>Sign : </p>
                        <img src={formData.hrmd_sign} alt="Applicant's Signature" className="w-32" />
                      </div>


                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default LeaveReport
