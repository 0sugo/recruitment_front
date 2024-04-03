import React, { useRef } from 'react'
import { AiFillPrinter } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";
import ReactToPrint from 'react-to-print';
import coat from '../images/coat.png';
import ReactSignatureCanvas from 'react-signature-canvas';

const LeaveReport = () => {
  const componentRef = useRef(null);
  const signatureRef = useRef();
  const [showModal, setShowModal] = React.useState(false);

  // const [signatureDataUrl, setSignatureDataUrl] = useState('');

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
    headOfDepartmentApproval: 'ab',
    principalSecretaryApproval: 'Approved',
    leaveBalance: 21,
    resumeDate: '2024-03-30',
    hrmDepartment: {
      leaveBroughtForward: 5,
      leaveDaysCurrentYear: 26,
      totalLeaveDaysDue: 31,
      daysAlreadyTaken: 10,
    },
    signatureDataUrl: 'data:image/png;base64,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'

  };

  return (
    <>
      <table className="w-full table-auto ">
        <thead>
          <tr className='border-b border-slate-500'>
            <th className='px-6 py-3'>S/N</th>
            <th className='px-6 py-3'>Leave Category</th>
            <th className='px-6 py-3'>Date</th>
            <th className='px-6 py-3'>Duration</th>
            <th className='px-6 py-3'>Status</th>
            <th className='px-6 py-3'>View</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className='px-6 py-2'>1.</td>
            <td className='px-6 py-2'>Annual</td>
            <td className='px-6 py-2'>12-08-2024</td>
            <td className='px-6 py-2'>7</td>
            <td className='px-6 py-2 '><span className='bg-red-600 p-1 text-white rounded-sm inline-block w-20 text-center'>Rejected</span></td>
            <td className='px-6 py-2 flex gap-2 items-center justify-center'>
              {/* <span><AiFillPrinter /></span> */}
              <ReactToPrint trigger={() => <AiFillPrinter className=''><AiFillPrinter /></AiFillPrinter>} content={() => componentRef.current} />
              <span><CgNotes /></span>
            </td>
          </tr>
          <tr>
            <td className='px-6 py-2'>2.</td>
            <td className='px-6 py-2'>Annual</td>
            <td className='px-6 py-2'>12-08-2024</td>
            <td className='px-6 py-2'>12</td>
            <td className='px-6 py-2 '><span className='bg-green-600 p-1 text-white rounded-sm w-20 text-center'>Approved</span></td>
            <td className='px-6 py-2 flex gap-2 items-center justify-center'>
              <span><AiFillPrinter /></span>
              <span><CgNotes /></span>
            </td>

          </tr>
          <tr>
            <td className='px-6 py-2'>3.</td>
            <td className='px-6 py-2'>Sick</td>
            <td className='px-6 py-2'>12-08-2024</td>
            <td className='px-6 py-2'>5</td>
            <td className='px-6 py-2 '><span className='bg-orange-600 p-1 text-white rounded-sm w-20 inline-block text-center'>Pending</span></td>
            <td className='px-6 py-2 flex gap-2 items-center justify-center'>
              <span><AiFillPrinter /></span>
              <span><CgNotes /></span>
            </td>

          </tr>
        </tbody>
      </table>

      <div>
        {showModal && <div className="fixed inset-0 z-40 bg-black opacity-25"></div>}
        {/* Print Leave form */}
        <div className="leave-template mx-24 my-20" ref={componentRef}>
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
            <div className='flex justify-between items-end mt-4'>
              <p>Date: <span className='font-bold'> {formData.permissionDate}</span></p>
              <div>
                <div className='flex flex-col'>
                  <img src={formData.signatureDataUrl} alt="Applicant's Signature" className="w-32" />
                  <p className='font-bold'>Signature of Applicant</p>
                </div>
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
            <div className='flex justify-between'>
              <div className='flex flex-col justify-between '>
                <p>Station: </p>
                <p>Designation: </p>
              </div>

              <div className='flex justify-between'>
              <div className='flex flex-col justify-between '>

                <p>Date: </p>
                <div className='flex items-end'>
                  <p className=''>Sign</p>
                  <img src={formData.signatureDataUrl} alt="Applicant's Signature" className="w-32" />
                </div>
                </div>
              </div>
            </div>

            <h3 className='mx-auto'>PART III</h3>
            <p className='font-bold italic'>(To be completed by the Principal Secretary where applicable)</p>
            <p >This application is: <span className='font-bold'> {formData.principalSecretaryApproval}</span></p>

            <div className='flex justify-between'>
              <p>Date: </p>
              <div className='flex items-end'>
                <p className=''>Sign</p>
                <img src={formData.signatureDataUrl} alt="Applicant's Signature" className="w-32" />
              </div>
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
            <div className='flex justify-between items-end'>
              <p>Date: </p>
              <p>Designation: </p>
              <div className='flex items-end'>
                <p className=''>Sign</p>
                <img src={formData.signatureDataUrl} alt="Applicant's Signature" className="w-32" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default LeaveReport
