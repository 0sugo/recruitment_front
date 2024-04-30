import React from 'react';
import ProfNav from './ProfNav';
import Profile from './profile';
import AcademicQualifications from './AcademicQualification';
import ProfessionalQualification from './ProfessionalQualification';
import MemProfBodies from './MemProfBodies';
import WorkExperience from './WorkExperience';
import Referees from './Referees';
import LeaveForm from './LeaveForm';


const ProfileOutput = ({ selectedNavItem, selectedNav2Item, isOpen, handleNav2ItemSelect }) => {

  return (
    <div>
      <ProfNav onNav2ItemSelect={handleNav2ItemSelect} />
      {selectedNavItem === 'Leave Application' && <LeaveForm />}
      {selectedNavItem === 'Profile' && <Profile isOpen={isOpen} />}
      {selectedNav2Item === 'Profile' && <Profile isOpen={isOpen} selectedNav2Item={selectedNav2Item} />}
      {selectedNav2Item === 'academic' && <AcademicQualifications isOpen={isOpen} selectedNav2Item={selectedNav2Item} />}
      {selectedNav2Item === 'professionalQualification' && <ProfessionalQualification isOpen={isOpen} selectedNav2Item={selectedNav2Item} />}
      {selectedNav2Item === 'professionalBody' && <MemProfBodies isOpen={isOpen} selectedNav2Item={selectedNav2Item} />}
      {selectedNav2Item === 'workExperience' && <WorkExperience isOpen={isOpen} selectedNav2Item={selectedNav2Item} />}
      {selectedNav2Item === 'referees' && <Referees isOpen={isOpen} selectedNav2Item={selectedNav2Item} />}
    </div>
  );
};

export default ProfileOutput;
