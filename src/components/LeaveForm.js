import React, { useEffect, useRef, useState } from 'react';
// import LeaveTemplate from './LeaveTemplate';
import ReactToPrint from 'react-to-print';
import coat from '../images/coat.png';
import ReactSignatureCanvas from 'react-signature-canvas';
import { useDispatch,useSelector } from 'react-redux';
import { getLeaves, submitForm } from '../redux/Leave/LeaveSlice';
import { HiOutlinePlus } from "react-icons/hi";
import LeaveReport from './LeaveReport';
import PendingLeave from './PendingLeave';
import RejectedLeave from './RejectedLeave';
import ApprovedLeave from './ApprovedLeave';

const LeaveForm = () => {
  const componentRef = useRef(null);
  const signatureRef = useRef();
  const dispatch = useDispatch();
  const leaves = useSelector((state) => state.leave.leaves);
  const [showModal, setShowModal] = React.useState(false);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [selectedComponent, setSelectedComponent] = useState('LeaveReport');
  const [formData, setFormData] = useState({});

  const handleComponentSelect = (componentName) => {
    setSelectedComponent(componentName);
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
  };



  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timerID);
  }, []);

  useEffect(()=>{
    dispatch(getLeaves());
  },[dispatch]);

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
  const formattedDateTime = currentDateTime.toLocaleString('en-US', options);
  const [signatureDataUrl, setSignatureDataUrl] = useState('');



  const handleSubmit = async (e) => {
    e.preventDefault();
    // const signatureData = signatureRef.current.toDataURL();

    const formData = {
      // full_name: e.target.full_name?.value,
      // phone: e.target.phone?.value,
      // postal_address: e.target.postal_address.value,
      designation: e.target.designation.value,
      leave_type: e.target.leave_type.value,
      leave_address: e.target.leave_address.value,
      salary_paid_to: e.target.salary_paid_to.value,
      account_no: e.target.account_no?.value,
      num_of_days: e.target.num_of_days.value,
      leave_begins_on: e.target.leave_begins_on.value,
      signed: 1,
      // signature: signatureData,
      date: new Date().toISOString().split('T')[0],
    };

    console.log(formData);
    dispatch(submitForm(formData));

    // setSignatureDataUrl(signatureData);
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
        <div className='flex mx-auto max-w-3/4 whitespace-nowrap gap-16 bg-gray-100'>
          <div className='font-semibold text-sm flex gap-16 text-slate-600'>
            <span className={`flex items-center p-3 cursor-pointer ${selectedComponent === 'LeaveReport' ? 'underline animate-bounce text-black' : ''}`} onClick={() => handleComponentSelect('LeaveReport')}>Leave Summary</span>
            <span className={`flex items-center p-3 cursor-pointer ${selectedComponent === 'PendingLeave' ? 'underline animate-bounce text-black' : ''}`} onClick={() => handleComponentSelect('PendingLeave')}>Pending Leave</span>
            <span className={`flex items-center p-3 cursor-pointer ${selectedComponent === 'ApprovedLeave' ? 'underline animate-bounce text-black' : ''}`} onClick={() => handleComponentSelect('ApprovedLeave')}>Approved Leave</span>
            <span className={`flex items-center p-3 cursor-pointer ${selectedComponent === 'RejectedLeave' ? 'underline animate-bounce text-black' : ''}`} onClick={() => handleComponentSelect('RejectedLeave')}>Rejected Leave</span>
          </div>
          <span className='bg-[#2E6C9D] p-3 text-white flex rounded-md items-center gap-2 cursor-pointer' onClick={() => setShowModal(true)}><HiOutlinePlus />Apply leave</span>
        </div>
        <div className='content mt-4'>
          <div className='flex flex-col items-start px-4 mb-4'>
            <p className='mb-2 '>Leaves Taken already :</p>
            <div className='flex justify-between w-full'>
              <p className='shadow-slate-400 shadow-md p-2 rounded-md'>Annual leave: 10 / 45</p>
              <p className='shadow-slate-400 shadow-md p-2 rounded-md'>Sick leave: 1 / 10</p>
              <p className='shadow-slate-400 shadow-md p-2 rounded-md'>Compassionate leave: 0 / 10</p>
              <p className='shadow-slate-400 shadow-md p-2 rounded-md'>Total: 11 / 65</p>
            </div>
          </div>

          {selectedComponent === 'LeaveReport' && <LeaveReport />}
          {selectedComponent === 'PendingLeave' && <PendingLeave />}
          {selectedComponent === 'ApprovedLeave' && <ApprovedLeave />}
          {selectedComponent === 'RejectedLeave' && <RejectedLeave />}

        </div>

      </div>

      {/* Profile Overflow modal */}
      {showModal && (
        <div className="fixed inset-0  z-50 overflow-auto ">
          <section className="py-1 ">
            <div className="w-full lg:w-9/12 px-4 mx-auto mt-6 ">
              <div className="flex flex-col min-w-0  w-full mb-6 shadow-lg rounded-lg bg-white border-0">
                <h3 className='uppercase'>LEAVE APPLICATION FORM</h3>
                <div className="flex items-start justify-between px-4 py-2 mb-2">
                  <button
                    className="text-gray-700 hover:text-gray-900 text-2xl focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    ×
                  </button>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-5 pt-0">
                  <form onSubmit={handleSubmit}>
                    <div className="flex flex-wrap">

                      <div className="w-full lg:w-4/12 px-6">
                        <div className="w-full mb-3">
                          <label className="block uppercase text-black text-xs mb-2" htmlFor="grid-password">
                            Designation :
                          </label>
                          <input type="text" name='designation' value={formData.designation} placeholder='e.g snr ICT officer'
                            required className="border-0 px-2 py-2  text-black bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                        </div>
                      </div>

                      <div className="w-full lg:w-4/12 px-6">
                        <div className="w-full mb-3">
                          <label className="block uppercase text-black text-xs mb-2" htmlFor="grid-password">
                            Leave Address :
                          </label>
                          <input type="text" name='leave_address' value={formData.leave_address} placeholder='e.g p.o box 40326-100'
                            required className="border-0 px-2 py-2  text-black bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                        </div>
                      </div>



                      <div className="w-full lg:w-4/12 px-6">
                        <div className="w-full mb-3">
                          <label className="block uppercase text-black text-xs mb-2" htmlFor="grid-password">
                            Leave Type :
                          </label>
                          <select name='leave_type' value={formData.leave_type} required className="border-0 px-2 py-2  text-slate-500 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                            <option value="a">Select one option</option>
                            <option value="4">Sick Leave</option>
                            <option value="5">Maternity</option>
                            <option value="6">Annual</option>
                          </select>
                        </div>
                      </div>

                      <div className="w-full lg:w-4/12 px-6">
                        <div className="w-full mb-3">
                          <label className="block uppercase text-black text-xs mb-2 " htmlFor="leave_days">
                            During my Leave, My Salary should :
                          </label>
                          <select
                            name="salary_paid_to"
                            value={formData.salary_paid_to}
                            required
                            onChange={(e) => setFormData({ ...formData, salary_paid_to: e.target.value })}
                            className="border-0 px-2 py-2  text-slate-500 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          >
                            <option value="">Select one option</option>
                            <option value="a">Continue to be paid into my account</option>
                            <option value="b">Be paid at the following address</option>
                            <option value="c">Be included in the payroll of a station</option>
                          </select>
                        </div>
                      </div>

                      {formData.salary_paid_to !== 'a' && formData.salary_paid_to !== '' && (
                        <div className="w-full lg:w-4/12 px-6">
                          <div className="w-full mb-3">
                            <label className="block uppercase text-black text-xs mb-2" htmlFor="grid-password">
                              Account No :
                            </label>
                            <input type="number" name='account_no' value={formData.account_no} placeholder='e.g 123456789999'
                              required className="border-0 px-2 py-2  text-black bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                          </div>
                        </div>
                      )}

                      <div className="w-full lg:w-4/12 px-6">
                        <div className="w-full mb-3">
                          <label className="block uppercase text-black text-xs mb-2" htmlFor="grid-password">
                            Leave Duration (days) :
                          </label>
                          <input type="number" name='num_of_days' value={formData.num_of_days} placeholder='e.g 15 days'
                            required className="border-0 px-2 py-2  text-black bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                        </div>
                      </div>

                      <div className="w-full lg:w-4/12 px-6">
                        <div className="w-full mb-3">
                          <label className="block uppercase text-black text-xs mb-2" htmlFor="grid-password">
                            Leave start Date :
                          </label>
                          <input type="date" name='leave_begins_on' value={formData.leave_begins_on}
                            required className="border-0 px-2 py-2  text-slate-500 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                        </div>
                      </div>

                      {/* <div className="w-full mt-2 px-6 flex justify-center">
                        <div className="w-full max-w-md mb-3">
                          <label className="block uppercase text-black text-xs mb-2" htmlFor="signature">
                            Signature :
                          </label>
                          <ReactSignatureCanvas
                            ref={signatureRef}
                            canvasProps={{ className: 'signature-canvas w-full border-2 border-slate-200', style: { backgroundColor: '#f8f6f6' } }}
                            clearOnResize={false}
                            onBegin={() => console.log('User has started signing.')}
                            onEnd={() => console.log('User has finished signing.')}
                          />
                          <div className="flex justify-center">
                            <button onClick={handleClear} className='text-xs p-2 bg-neutral-100 rounded-lg'>Clear Signature</button>
                          </div>
                          <p className="text-xs text-blueGray-500 mt-1 text-red-600">Please sign in the box above using your mouse or finger if on a touch device.</p>
                        </div>
                      </div> */}

                    </div>

                    <hr className="mt-4 border-b-1 border-blueGray-300" />
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

    </div>
  );
};

export default LeaveForm;
