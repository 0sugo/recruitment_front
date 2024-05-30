import { React, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard'
import { setupForm } from '../redux/Leave/LeaveSlice';
import ReactSignatureCanvas from 'react-signature-canvas';

const Home = () => {
  const dispatch = useDispatch();
  const componentRef = useRef(null);
  const signatureRef = useRef();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [editedUser, setEditedUser] = useState(null);
  const [editedGender, setEditedGender] = useState("");
  const [editedDesignation, setEditedDesignation] = useState("");
  const [editedDepartment, setEditedDepartment] = useState("");
  const [editedPostal, setEditedPostal] = useState("");
  const [editedNum, setEditedNum] = useState("");
  const user_id = localStorage.getItem('userId');
  const [signatureDataUrl, setSignatureDataUrl] = useState('');
  const profile = localStorage.getItem('profile');
  
  useEffect(() => {
    if (profile==='new_user'){

      setShowModal(true);
    }else{
      setShowModal(false);

    }
  }, [10]);

  const handleClear = () => {
    signatureRef.current.clear();
  };



  const handleSaveChanges = async (e) => {
    const signatureData = signatureRef.current.toDataURL();

    e.preventDefault();
    const formData = {
      name: editedUser,
      user_id: user_id,
      gender: editedGender,
      mobile_no: editedNum,
      department: editedDepartment,
      designation: editedDesignation,
      postal_address: editedPostal,
      sign: signatureData,
    };

    dispatch(setupForm(formData));
    setShowModal(false);
  };

  return (
    <div>
      <Dashboard />
      <div>
        {showModal && (
          <div className="fixed inset-0 z-50 overflow-auto flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="flex justify-end">
                <button
                  className="text-gray-700 hover:text-gray-900 text-2xl focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  ×
                </button>
              </div>
              <h2 className="text-xl mb-4">Finish Setting Up:</h2>
              <form onSubmit={handleSaveChanges}>
                <div className="mb-4">
                  <label className="block text-gray-700">Name: </label>
                  <input
                    type="text"
                    value={editedUser}
                    onChange={(e) => setEditedUser(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Phone: </label>
                  <input
                    type="text"
                    value={editedNum}
                    onChange={(e) => setEditedNum(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Gender</label>
                  <select name='gender' value={editedGender} onChange={(e) => setEditedGender(e.target.value)} required className="w-full px-4 py-2 border rounded-lg" >
                    <option value="">Select one option</option>
                    <option value="male">Male</option>700
                    <option value="female">Female</option>
                    <option value="other">Prefor Not seay</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Department</label>
                  <select name='gender' value={editedDepartment} onChange={(e) => setEditedDepartment(e.target.value)} required className="w-full px-4 py-2 border rounded-lg" >
                    <option value="">Select one option</option>
                    <option value="1">ICT</option>700
                    <option value="female">Employee</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Designation</label>
                  <input
                    type="text"
                    value={editedDesignation}
                    onChange={(e) => setEditedDesignation(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Postal Address: </label>
                  <input
                    type="text"
                    value={editedPostal}
                    onChange={(e) => setEditedPostal(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
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
                <div className="flex justify-end">
                  <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                    Save Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {showModal && <div className="fixed inset-0 z-40 bg-black opacity-25"></div>}
      </div>
    </div>
  )
}

export default Home
