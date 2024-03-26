import React, { useEffect, useRef, useState } from 'react';
// import LeaveTemplate from './LeaveTemplate';
import ReactToPrint from 'react-to-print';
import coat from '../images/coat.png';
import ReactSignatureCanvas from 'react-signature-canvas';
import { useDispatch } from 'react-redux';
import { submitForm } from '../redux/Leave/LeaveSlice';
// import Output from './Output';
import { HiOutlinePlus } from "react-icons/hi";

import LeaveReport from './LeaveReport';
import PendingLeave from './PendingLeave';
import RejectedLeave from './RejectedLeave';
import ApprovedLeave from './ApprovedLeave';

const LeaveForm = () => {
  const componentRef = useRef(null);
  const signatureRef = useRef();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = React.useState(false);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [selectedComponent, setSelectedComponent] = useState(null); // State to keep track of the selected component

  const handleComponentSelect = (componentName) => {
    setSelectedComponent(componentName);
  };


  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timerID);
  }, []);

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
  const formattedDateTime = currentDateTime.toLocaleString('en-US', options);


  const [signatureDataUrl, setSignatureDataUrl] = useState('');
  const formData = {
    pfNo: '123456',
    date: '2024-03-10',
    name: 'Kasyoki',
    through: 'Emmanuel James',
    designation: 'Manager',
    phone: '0721234567',
    days: 14,
    leaveStartDate: '2024-03-15',
    lastLeaveStartDate: '2023-03-15',
    lastLeaveEndDate: '2023-03-29',
    leaveAddress: '123 Bishop St, Nairobi',
    salaryPaymentOption: 'b',
    rejectedReason: 'Understaffed',
    payrollAddress: '1234 - Absa Bank, Nairobi Branch',
    payMonth: 'March 2024',
    permissionDate: '2024-02-25',
    headOfDepartmentApproval: 'Approved',
    principalSecretaryApproval: 'Approved',
    leaveBalance: 21,
    resumeDate: '2024-03-30',
    hrmDepartment: {
      leaveBroughtForward: 5,
      leaveDaysCurrentYear: 26,
      totalLeaveDaysDue: 31,
      daysAlreadyTaken: 10,
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const signatureData = signatureRef.current.toDataURL();

    const formData = {
      full_name: e.target.full_name.value,
      phone: e.target.phone.value,
      postal_address: e.target.postal_address.value,
      designation: e.target.designation.value,
      leave_days: e.target.leave_days.value,
      start_date: e.target.start_date.value,
      last_leave_date: e.target.last_leave_date.value,
      signature: signatureData,
    };

    dispatch(submitForm(formData));

    setSignatureDataUrl(signatureData);
  };

  const handleClear = () => {
    signatureRef.current.clear();
  };

  return (
    <div className='flex flex-col'>
      <div className=" py-4 flex justify-between text-xs text-gray-500 bg-[#f8f8f4] px-2">
        <span>Leave Management</span>
        <span>{formattedDateTime}</span>
      </div>


      <div className='max-w-3/4 mx-auto border-b border-l b-2 border-gray-200 text-sm'>
        <div className='flex mx-auto max-w-3/4 whitespace-nowrap gap-16 bg-slate-100'>
          <div className='font-semibold text-sm flex gap-16 text-slate-600'>
            <span className='flex items-center p-3 cursor-pointer' onClick={() => handleComponentSelect('LeaveReport')}>Leave Report</span>
            <span className='flex items-center p-3 cursor-pointer' onClick={() => handleComponentSelect('PendingLeave')}>Pending Leave</span>
            <span className='flex items-center p-3 cursor-pointer' onClick={() => handleComponentSelect('ApprovedLeave')}>Approved Leave</span>
            <span className='flex items-center p-3 cursor-pointer' onClick={() => handleComponentSelect('RejectedLeave')}>Rejected Leave</span>
          </div>
          <span className='bg-[#2E6C9D] p-3 text-white flex rounded-md items-center gap-2 cursor-pointer' onClick={() => setShowModal(true)}><HiOutlinePlus />Apply leave</span>
        </div>
        <div className='content'>

          {selectedComponent === 'LeaveReport' && <LeaveReport />}
          {selectedComponent === 'PendingLeave' && <PendingLeave />}
          {selectedComponent === 'ApprovedLeave' && <ApprovedLeave />}
          {selectedComponent === 'RejectedLeave' && <RejectedLeave />}

        </div>

      </div>

      {/* <Output /> */}
      {/* <ReactToPrint trigger={() => <button className='bg-blue-700 p-2'>Print Form</button>} content={() => componentRef.current}/> */}

      {/* Profile Overflow modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-auto">
          <section className="py-1 ">
            <div className="w-full lg:w-8/12 px-4 mx-auto mt-6 ">
              <div className="flex flex-col min-w-0  w-full mb-6 shadow-lg rounded-lg bg-white border-0">
                <div className="flex items-start justify-between p-4 mb-4">

                  <h2 className='uppercase'>LEAVE APPLICATION</h2>
                  <button
                    className="text-gray-700 hover:text-gray-900 text-2xl focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    ×
                  </button>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-5 pt-0">
                  <form onSubmit={handleSubmit}>
                    <div class="flex flex-wrap">

                      <div class="w-full lg:w-4/12 px-6">
                        <div class="w-full mb-3">
                          <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                            Name
                          </label>
                          <input type="text" name='full_name' value={formData.full_name} min={0} max={30}
                            required class="border-0 px-2 py-2 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                        </div>
                      </div>

                      <div class="w-full lg:w-4/12 px-6">
                        <div class="w-full mb-3">
                          <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                            Phone
                          </label>
                          <input type="tel" name='phone' value={formData.position}
                            required class="border-0 px-2 py-2 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                        </div>
                      </div>

                      <div class="w-full lg:w-4/12 px-6">
                        <div class="w-full mb-3">
                          <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                            Postal Address
                          </label>
                          <input type="text" name='postal_address' value={formData.position}
                            required class="border-0 px-2 py-2 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                        </div>
                      </div>

                      <div class="w-full lg:w-6/12 px-6">
                        <div class="w-full mb-3">
                          <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                            Designation
                          </label>
                          <input type="text" name='designation' value={formData.position}
                            required class="border-0 px-2 py-2 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                        </div>
                      </div>

                      <div className="w-full lg:w-6/12 px-6">
                        <div className="w-full mb-3">
                          <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="leave_days">
                            During my Leave, My Salary should:
                          </label>
                          <select
                            name="leave_days"
                            value={formData.leave_days}

                            required
                            className="border-0 px-2 py-2 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          >
                            <option value="">Select one option</option>
                            <option value="a">Continue to be paid into my account</option>
                            <option value="b">Be paid at the following address</option>
                            <option value="c">Be included in the payroll of a station</option>
                          </select>
                        </div>
                      </div>

                      <div class="w-full lg:w-6/12 px-6">
                        <div class="w-full mb-3">
                          <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                            Leave Duration (days)
                          </label>
                          <input type="number" name='leave_days' value={formData.full_name}
                            required class="border-0 px-2 py-2 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                        </div>
                      </div>

                      <div class="w-full lg:w-6/12 px-6">
                        <div class="w-full mb-3">
                          <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                            Start Date
                          </label>
                          <input type="date" name='start_date' value={formData.start_date}
                            required class="border-0 px-2 py-2 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                        </div>
                      </div>

                      {/* <div class="w-full lg:w-6/12 px-6">
                    <div class="w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                        Last Leave
                      </label>
                      <input type="date" name='last_leave_date' value={formData.start_date}
                        required class="border-0 px-2 py-2 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                  </div> */}

                      <div className="w-full mt-2 px-6 flex justify-center">
                        <div className="w-full max-w-md mb-3">
                          <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="signature">
                            Signature
                          </label>
                          <ReactSignatureCanvas
                            ref={signatureRef}
                            canvasProps={{ className: 'signature-canvas w-full border-2 border-slate-200', style: { backgroundColor: '#f8f6f6' } }}
                            clearOnResize={false}
                            onBegin={() => console.log('User has started signing.')}
                            onEnd={() => console.log('User has finished signing.')}
                          />
                          <div className="flex justify-center">
                            <button onClick={handleClear}>Clear Signature</button>
                          </div>
                          <p className="text-xs text-blueGray-500 mt-1 text-red-600">Please sign in the box above using your mouse or finger if on a touch device.</p>
                        </div>
                      </div>

                    </div>

                    <hr class="mt-4 border-b-1 border-blueGray-300" />
                    <div className='flex gap-2 justify-center'>
                      <button type='submit' className='bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 mt-2 text-white'>Apply</button>
                      {/* <ReactToPrint trigger={() => <button className='bg-green-600 rounded-lg px-5 py-2 mt-2'>Print Form</button>} content={() => componentRef.current} /> */}
                    </div>


                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
      {showModal && <div className="fixed inset-0 z-40 bg-black opacity-25"></div>}
      {/* Print Leave form */}
      <div className="leave-template mx-28 my-20 " ref={componentRef}>
        <div className="header ">
          <div className='flex flex-col items-center'>
            <img src={coat} alt="Ministry Logo" className='w-32 my-4' />
            <h3 className='items-center'>MINISTRY OF LABOUR AND SOCIAL PROTECTION</h3>
            <p className='font-bold italic'>(To be completed in triplicate at least 30 days before leave is due)</p>
          </div>
          <div className='flex justify-between my-8'>
            <p>PF/NO: <span className='font-bold'>{formData.pfNo}</span></p>
            <p>Date: <span className='font-bold'>{formData.date}</span></p>
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
            Thro’ <span className='font-bold'>{formData.through}</span><br />
          </p>

          <h3 className='font-bold'>APPLICATION FOR ANNUAL LEAVE</h3>
          <p>
            I <span className='font-bold'>{formData.name}</span> P/No <span className='font-bold'>{formData.pfNo} </span>Designation <span className='font-bold'>{formData.designation}</span> Apply for <span className='font-bold'>{formData.days}</span> Days annual leave beginning on{' '}
            <span className='font-bold'>{formData.leaveStartDate}</span>. The last leave was taken by me was from <span className='font-bold'>{formData.lastLeaveStartDate} </span>to <span className='font-bold'>{formData.lastLeaveEndDate}</span>.
          </p>
          <p>
            My leave address will be:  <span className='font-bold'>{formData.leaveAddress}</span> and Mobile No:  <span className='font-bold'>{formData.phone}</span> <br />
          </p>
          <p>
            During the period of leave, my salary should: <br />
            {formData.salaryPaymentOption === 'a' &&
              <span className='font-bold'>Continue to be paid into my account</span>}
            {formData.salaryPaymentOption === 'b' &&
              <span className='font-bold'>Be paid at the following address:</span>}
            {formData.salaryPaymentOption === 'b' && formData.payrollAddress}
            {formData.salaryPaymentOption === 'c' &&
              <span className='font-bold'>Be included in the payroll of {formData.payrollAddress} Station</span>}
          </p>



          <p>
            As I am taking not less than one-half of my annual leave due to me, I wish to receive my pay for the month of{' '}
            <span className='font-bold'>{formData.payMonth}</span> Three days before the date of commencement of leave in terms of Regulation 1.1 of the Code of
            Regulation.
          </p>
          <p>
            I understand that I will require permission should I desire to spend leave outside Kenya in terms of
            personnel Circular No. 6 of 15th January 1967.
          </p>
          <div className='flex justify-between mt-4'>
            <p>Date: <span className='font-bold'>{formData.permissionDate}</span></p>
            <div>
              <p>Signature of Applicant</p>
              <img src={signatureDataUrl} alt="Applicant's Signature" className="w-32" />

            </div>
          </div>

          {/* <h3>PART II</h3> */}
          <h3 className='mx-auto' style={{ pageBreakBefore: 'always' }}>PART II</h3>
          <p className='font-bold italic'>(To be completed by Head of Department)</p>
          {formData.headOfDepartmentApproval === 'a' ? (
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
          <div>
            <div className='flex justify-between'>
              <p>Station: </p>
              <p>Sign: </p>
            </div>

            <div className='flex justify-between'>
              <p>Date: </p>
              <p>Designation: </p>
            </div>
          </div>

          <h3 className='mx-auto'>PART III</h3>
          <p className='font-bold italic'>(To be completed by the Principal Secretary where applicable)</p>
          <p >This application is: <span className='font-bold'> {formData.principalSecretaryApproval}</span></p>

          <div>
            <p>Date: </p>
            <p>Signed: </p>
          </div>

          <h3 className='mx-auto'>PART IV</h3>
          <p className='font-bold italic'>(To be completed by the HRM&D Department)</p>
          <p>
            Leave b/f from the previous year: <span className='font-bold'>{formData.hrmDepartment.leaveBroughtForward}</span> days <br />
            Leave days for the current year: <span className='font-bold'>{formData.hrmDepartment.leaveDaysCurrentYear}</span> days <br />
            Total Leave days due: <span className='font-bold'>{formData.hrmDepartment.totalLeaveDaysDue}</span> days <br />
            Less days already taken: <span className='font-bold'>{formData.hrmDepartment.daysAlreadyTaken}</span> days <br />
            Less this application: <span className='font-bold'>{formData.days}</span> days <br />
            Leave balance for the current year: <span className='font-bold'>{formData.leaveBalance}</span> days
            <span>To resume duty on: <span className='font-bold'>{formData.resumeDate}</span></span>
          </p>
          <div className='flex justify-between'>
            <p>Date: </p>
            <p>Sign: </p>
            <p>Designation: </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default LeaveForm;
