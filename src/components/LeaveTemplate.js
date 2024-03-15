import React from 'react';
import coat from '../images/coat.png';

const LeaveTemplate = ({ formData }) => {

  const handlePrint = () => {
    // window.print();

  }

  return (
    <>
      <div className="leave-template">
        <div className="header">
          <img src={coat} alt="Ministry Logo" />
          <h2>MINISTRY OF LABOUR AND SOCIAL PROTECTION</h2>
          <p>(To be completed in triplicate at least 30 days before leave is due)</p>
          <div>
            <p>PF/NO: {formData.pfNo}</p>
            <p>Date: {formData.date}</p>
          </div>
        </div>
        <div className="content">
          <p>
            The Principal Secretary <br />
            Ministry of Labour and Social Protection <br />
            P.O. Box 40326-00100 <br />
            NAIROBI
          </p>
          <p>
            Thro’ {formData.name} <br />
            ............................................................................................................
          </p>

          <h3>APPLICATION FOR ANNUAL LEAVE</h3>
          <p>
            I {formData.name} P/No {formData.pfNo} Designation {formData.designation} Apply for {formData.days} Days annual leave beginning on{' '}
            {formData.leaveStartDate}. The last leave was taken by me was from {formData.lastLeaveStartDate} to {formData.lastLeaveEndDate}.
          </p>
          <p>
            My leave address will be: (Postal address & Mobile No) <br />
            {formData.leaveAddress}
          </p>
          <p>
            During the period of leave, my salary should <br />
            {formData.salaryPaymentOption === 'a' && 'Continue to be paid into my account'}
            {formData.salaryPaymentOption === 'b' && 'Be paid at the following address: ' + formData.payrollAddress}
            {formData.salaryPaymentOption === 'c' &&
              'Be included in the payroll of ' + formData.payrollAddress + ' Station'}
          </p>
          <p>
            *Delete (a) (b) or (c) as applicable
          </p>
          <p>
            As I am taking not less than one-half of my annual leave due to me, I wish to receive my pay for the month of{' '}
            {formData.payMonth} Three days before the date of commencement of leave in terms of Regulation 1.1 of the Code of
            Regulation.
          </p>
          <p>
            I understand that I will require permission should I desire to spend leave outside Kenya in terms of
            personnel Circular No. 6 of 15th January 1967.
          </p>
          <div>
            <p>Date: {formData.permissionDate}</p>
            <p>Signature of Applicant</p>
          </div>

          <h3>PART II</h3>
          <p>(To be completed by Head of Department)</p>
          <p>Recommended arrangement can be made for the performance of duties of the above Officer during his/her absence.</p>
          <p>Not recommended for the following reasons: -</p>
          <p>{formData.headOfDepartmentApproval}</p>
          <div>
            <p>Station: {formData.headOfDepartmentApproval}</p>
            <p>Signed: </p>
            <p>Date: </p>
            <p>Designation: </p>
          </div>

          <h3>PART III</h3>
          <p>(To be completed by the Principal Secretary where applicable)</p>
          <p>{formData.principalSecretaryApproval}</p>
          <div>
            <p>Date: </p>
            <p>Signed: </p>
          </div>

          <h3>PART IV</h3>
          <p>(To be completed by the HRM&D Department)</p>
          <p>
            Leave b/f from the previous year: {formData.hrmDepartment.leaveBroughtForward} days <br />
            Leave days for the current year: {formData.hrmDepartment.leaveDaysCurrentYear} days <br />
            Total Leave days due: {formData.hrmDepartment.totalLeaveDaysDue} days <br />
            Less days already taken: {formData.hrmDepartment.daysAlreadyTaken} days <br />
            Less this application: {formData.days} days <br />
            Leave balance for the current year: {formData.leaveBalance} days
          </p>
          <div>
            <p>To resume duty on: {formData.resumeDate}</p>
            <p>Date: </p>
            <p>Sign: </p>
            <p>Designation: </p>
          </div>
        </div>
      </div>

      <button onClick={handlePrint}>Print Form</button>

    </>

  );
};

export default LeaveTemplate;
