import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import ProfessionalQualification from './components/ProfessionalQualification';
import MemProfBodies from './components/MemProfBodies';
import WorkExperience from './components/WorkExperience';
import Referees from './components/Referees';
import Profile from './components/profile';
import AcademicQualification from './components/AcademicQualification';
import Jobs from './components/Jobs';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Admin from './components/Admin';
import Options from './components/Options';
import Applications from './components/Applications';
import AllApplications from './components/AllApplications';
import ShortlistedApplications from './components/ShortlistedApplications';
import RejectedApplications from './components/RejectedApplications';
import LeaveForm from './components/LeaveForm';
import Output from './components/Output';
import { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard';
import LeaveReport from './components/LeaveReport';
import EmployeeManagement from './components/EmployeeManagement';
import Home from './components/Home';
import { getEmployeeRoles } from './redux/Leave/LeaveSlice';
import { useDispatch } from 'react-redux';
import AllLeaves from './components/AllLeaves';
import AllLeaveApplications from './components/AllLeaveApplications';

function App() {

  const [userId, setUserId] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmployeeRoles());
  }, [dispatch]);


  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  return (
    <div className="App text-xs">
      {/* {userId === 'admin' ? <Admin /> : <Jobs />} */}
      {/* <LoginPage /> */}
      {/* <Dashboard /> */}

      <Routes>
        <Route path="/Personal-Details" element={< Profile />} />
        <Route path="/Academic-Qualification" element={< AcademicQualification />} />
        <Route path="/Professional-Qualification" element={< ProfessionalQualification />} />
        <Route path="/Professional-body-member" element={< MemProfBodies />} />
        <Route path="/Work-Experience" element={<WorkExperience />} />
        <Route path="/Referees" element={< Referees />} />
        <Route path="/Available-jobs" element={< Jobs />} />
        <Route path="/Register" element={< RegisterPage />} />
        <Route path="/" element={< LoginPage />} />
        <Route path="/Home" element={< Home />} />
        <Route path="/Admin" element={< Admin />} />
        <Route path="/Options" element={< Options />} />
        <Route path="/Applications" element={< Applications />} />
        <Route path="/Shortlisted-Applications" element={< ShortlistedApplications />} />
        <Route path="/Rejected-Applications" element={< RejectedApplications />} />
        <Route path="/All-Applications" element={< AllApplications />} />
        <Route path="/Leave-Management" element={< LeaveForm />} />
        {/** Handle leave application */}
        {/* <Route path="/LeaveReport/:id" element={<LeaveReport/>}/> */}
        <Route path="/MyApplications" element={<LeaveForm />} />
        <Route path="/LeaveReport" element={<LeaveForm />} />
        <Route path="/AllLeaves" element={<AllLeaves />} />
        <Route path="/AllLeaveApplications" element={<AllLeaveApplications />} />
        <Route path="/EmployeeManagement" element={<EmployeeManagement />} />
      </Routes>

      {/* <Footer /> */}

    </div>
  );
}

export default App;
