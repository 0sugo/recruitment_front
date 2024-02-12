import { Routes, Route } from 'react-router-dom';
import ProfessionalQualification from './ProfessionalQualification';
import MemProfBodies from './MemProfBodies';
import WorkExperience from './WorkExperience';
import Referees from './Referees';
import Profile from './profile';
import AcademicQualification from './AcademicQualification';
import Jobs from './Jobs';

const Output = () => {
  return (
    <div>

      <Routes>
        <Route path="/Personal-Details" element={< Profile/>} />
        <Route path="/Academic-Qualification" element={< AcademicQualification/>} />
        <Route path="/Professional-Qualification" element={< ProfessionalQualification/>} />
        <Route path="/Professional-body-member" element={< MemProfBodies />} />
        <Route path="/Work-Experience" element={<WorkExperience />} />
        <Route path="/Referees" element={< Referees />} />
        <Route path="/Available-jobs" element={< Jobs/>} />

      </Routes>

    </div>
  )
}

export default Output;
