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

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />

      <Routes>
        <Route path="/Personal-Details" element={< Profile/>} />
        <Route path="/Academic-Qualification" element={< AcademicQualification/>} />
        <Route path="/Professional-Qualification" element={< ProfessionalQualification/>} />
        <Route path="/Professional-body-member" element={< MemProfBodies />} />
        <Route path="/Work-Experience" element={<WorkExperience />} />
        <Route path="/Referees" element={< Referees />} />
        <Route path="/Available-jobs" element={< Jobs/>} />
        <Route path="/Register" element={< RegisterPage/>} />
        <Route path="/Login" element={< LoginPage/>} />
      </Routes>

      {/* <Footer /> */}

    </div>
  );
}

export default App;
