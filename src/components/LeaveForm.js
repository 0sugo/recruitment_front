import React, { useRef } from 'react';
import LeaveTemplate from './LeaveTemplate';
import ReactToPrint from 'react-to-print';
import coat from '../images/coat.png';
import ReactSignatureCanvas from 'react-signature-canvas';

const LeaveForm = () => {
  const componentRef = useRef(null);
  const signatureRef = useRef();

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

  const handleSubmit = (e) => {
    const byteSize = str => new Blob([str]).size;
    e.preventDefault();
    const signatureData = signatureRef.current.toDataURL();
    console.log(byteSize(signatureData));
  };

  const handleClear = () => {
    signatureRef.current.clear();
  };

  const handleChange = () => {
    console.log('hjghvdsd');
  }

  return (
    <div>
      <ReactToPrint
        trigger={() => <button className='bg-blue-700 p-2'>Print Form</button>}
        content={() => componentRef.current}
      />

      <h2 className='uppercase'>LEAVE APPLICATION</h2>

      <section className="py-1 ">
        <div className="w-full lg:w-8/12 px-4 mx-auto mt-6 ">
          <div className="flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleSubmit}>
                <h6 class="text-red-600 text-sm mt-3 mb-6 font-bold uppercase">
                </h6>
                <div class="flex flex-wrap">

                  <div class="w-full lg:w-6/12 px-6">
                    <div class="w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                        Name
                      </label>
                      <input type="text" name='full_name' value={formData.full_name} min={0} max={30}
                        onChange={handleChange} required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                  </div>



                  <div class="w-full lg:w-6/12 px-6">
                    <div class="w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                        Phone
                      </label>
                      <input type="tel" name='position' value={formData.position}
                        onChange={handleChange} required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                  </div>

                  <div class="w-full lg:w-6/12 px-6">
                    <div class="w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                        Postal Address
                      </label>
                      <input type="text" name='position' value={formData.position}
                        onChange={handleChange} required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                  </div>

                  <div class="w-full lg:w-6/12 px-6">
                    <div class="w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                        Designation
                      </label>
                      <input type="text" name='position' value={formData.position}
                        onChange={handleChange} required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                  </div>

                  <div class="w-full lg:w-6/12 px-6">
                    <div class="w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                        Number of Days applying
                      </label>
                      <input type="number" name='leave_days' value={formData.full_name}
                        onChange={handleChange} required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
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
                        onChange={handleChange}
                        required
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
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
                        Start Date
                      </label>
                      <input type="date" name='start_date' value={formData.start_date}
                        onChange={handleChange} required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                  </div>

                  <div class="w-full lg:w-6/12 px-6">
                    <div class="w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                        Last Leave
                      </label>
                      <input type="date" name='last_leave_date' value={formData.start_date}
                        onChange={handleChange} required class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-[#f8f6f6] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                  </div>

                  <div className="w-full px-6">
                    <div className="w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="signature">
                        Signature
                      </label>
                      <ReactSignatureCanvas
                        ref={signatureRef}
                        canvasProps={{ className: 'signature-canvas' }}
                      />
                      <div>
                        <button onClick={handleClear}>Clear Signature</button>
                      </div>
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
          <div className='flex justify-between'>
            <p>Date: <span className='font-bold'>{formData.permissionDate}</span></p>
            <div>
              <p>Signature of Applicant</p>
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
            Leave b/f from the previous year: {formData.hrmDepartment.leaveBroughtForward} days <br />
            Leave days for the current year: {formData.hrmDepartment.leaveDaysCurrentYear} days <br />
            Total Leave days due: {formData.hrmDepartment.totalLeaveDaysDue} days <br />
            Less days already taken: {formData.hrmDepartment.daysAlreadyTaken} days <br />
            Less this application: {formData.days} days <br />
            Leave balance for the current year: {formData.leaveBalance} days
            <p>To resume duty on: {formData.resumeDate}</p>
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
