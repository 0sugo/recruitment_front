import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmployeeRoles, setEmployeeRoles } from "../redux/Leave/LeaveSlice";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";

// const EmployeeManagement = () => {
//     const dispatch = useDispatch();
//     const [showModal, setShowModal] = React.useState(false);
//     const navigate = useNavigate();
//     const empRoles = useSelector((state) => state.leave.employees || []);
//     const loading = useSelector((state) => state.leave.loading);
//     const error = useSelector((state) => state.leave.error);
//     const [editingUser, setEditingUser] = useState(null);
//     const [editedRole, setEditedRole] = useState("");
//     const [editedDepartment, setEditedDepartment] = useState("");

//     useEffect(() => {
//         dispatch(getEmployeeRoles());
//     }, [dispatch]);


//     const handleRowClick = (user) => {
//         setShowModal(true)
//         setEditingUser(user);
//         setEditedRole(user.role);
//         setEditedDepartment(user.department);
//     };

//     const handleSaveChanges = () => {
//         if (editingUser) {
//             dispatch(setEmployeeRoles({
//                 user_id: editingUser.user_id,
//                 department: editedDepartment,
//                 role: editedRole
//             }));
//             setEditingUser(null);
//             navigate('/EmployeeManagement');


//         }
//     };

//     return (
//         <div className="relative ">
//             <Dashboard />

//             <div className="absolute top-[9%] left-[25%] border-2 border-red-900 w-[50%]">

//                 {loading && <p> Loading ... </p>}
//                 {error && <p> Error: {error}</p>}
//                 <table className="w-full table-auto">
//                     <thead>
//                         <tr className='border-b border-slate-500'>
//                             <th className='px-6 py-3'>S/N</th>
//                             <th className='px-6 py-3'>Name</th>
//                             <th className='px-6 py-3'>Department</th>
//                             <th className='px-6 py-3'>Role</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {empRoles.users && empRoles.users.length > 0 ? (
//                             empRoles.users.map((user, index) => (
//                                 <tr key={user.user_id} onClick={() => handleRowClick(user)}>
//                                     <td className='px-6 py-3'>{index + 1}</td>
//                                     <td className='px-6 py-3'>{user.name}</td>
//                                     <td className='px-6 py-3'>{user.department}</td>
//                                     <td className='px-6 py-3'>{user.role}</td>
//                                 </tr>
//                             ))
//                         ) : (
//                             <tr>
//                                 <td className='px-6 py-3' colSpan="4">No employees found</td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>

//                 {/* edit Overflow modal */}
//                 {showModal && (
//                     <div className="fixed inset-0  z-50 overflow-auto ">
//                         <section className="py-1 ">
//                             <div className="w-full lg:w-9/12 px-4 mx-auto mt-6 ">
//                                 <div className="flex flex-col min-w-0  w-full mb-6 shadow-lg rounded-lg bg-white border-0">
//                                     <h3 className='uppercase'>LEAVE APPLICATION FORM</h3>
//                                     <div className="flex items-start justify-between px-4 py-2 mb-2">
//                                         <button
//                                             className="text-gray-700 hover:text-gray-900 text-2xl focus:outline-none"
//                                             onClick={() => setShowModal(false)}
//                                         >
//                                             ×
//                                         </button>
//                                     </div>
//                                     <div className="flex-auto px-4 lg:px-10 py-5 pt-0">
//                                         <form onSubmit={handleSaveChanges}>
//                                             <div className="modal">
//                                                 <div className="modal-content">
//                                                     <h2>Edit User</h2>
//                                                     <input
//                                                         type="text"
//                                                         value={editedDepartment}
//                                                         onChange={(e) => setEditedDepartment(e.target.value)}
//                                                     />
//                                                     <input
//                                                         type="text"
//                                                         value={editedRole}
//                                                         onChange={(e) => setEditedRole(e.target.value)}
//                                                     />
//                                                     <button onClick={handleSaveChanges}>Save Changes</button>
//                                                 </div>
//                                             </div>


//                                             <hr className="mt-4 border-b-1 border-blueGray-300" />

//                                         </form>
//                                     </div>
//                                 </div>
//                             </div>
//                         </section>
//                     </div>
//                 )}

//                 {showModal && <div className="fixed inset-0 z-40 bg-black opacity-25"></div>}
//                 {editingUser && (
//                     <div className="modal">
//                         <div className="modal-content">
//                             <h2>Edit User</h2>
//                             <input
//                                 type="text"
//                                 value={editedDepartment}
//                                 onChange={(e) => setEditedDepartment(e.target.value)}
//                             />
//                             <input
//                                 type="text"
//                                 value={editedRole}
//                                 onChange={(e) => setEditedRole(e.target.value)}
//                             />
//                             <button onClick={handleSaveChanges}>Save Changes</button>
//                         </div>
//                     </div>
//                 )}
//             </div>

//         </div>
//     );
// };

// export default EmployeeManagement;

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getEmployeeRoles, updateUserRole } from "../redux/Leave/LeaveSlice"; // Ensure this is the correct action
// import { useNavigate } from "react-router-dom";
// import Dashboard from "./Dashboard";

const EmployeeManagement = () => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = React.useState(false);
    const navigate = useNavigate();
    const empRoles = useSelector((state) => state.leave.employees || []);
    const loading = useSelector((state) => state.leave.loading);
    const error = useSelector((state) => state.leave.error);
    const [editingUser, setEditingUser] = useState(null);
    const [editedRole, setEditedRole] = useState("");
    const [editedName, setEditedName] = useState("");
    const [editedDepartment, setEditedDepartment] = useState("");

    useEffect(() => {
        dispatch(getEmployeeRoles());
    }, [dispatch]);

    const handleRowClick = (user) => {
        console.log(user);
        setShowModal(true);
        setEditingUser(user);
        setEditedRole(user.role);
        setEditedDepartment(user.department);
        setEditedName(user.name);
    };

    const handleSaveChanges = (e) => {
        e.preventDefault();
        if (editingUser) {
            dispatch(setEmployeeRoles({
                user_id: editingUser.user_id,
                department: editedDepartment,
                role: editedRole
            })).then(() => {
                setShowModal(false);
                setEditingUser(null);
                navigate('/EmployeeManagement');
            });
        }
    };

    return (
        <div className="relative">
            <Dashboard />

            <div className="absolute top-[9%] left-[25%] border-2 border-red-900 w-[50%]">
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                <table className="w-full table-auto">
                    <thead>
                        <tr className='border-b border-slate-500'>
                            <th className='px-6 py-3'>S/N</th>
                            <th className='px-6 py-3'>Name</th>
                            <th className='px-6 py-3'>Department</th>
                            <th className='px-6 py-3'>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {empRoles.users && empRoles.users.length > 0 ? (
                            empRoles.users.map((user, index) => (
                                <tr key={user.user_id} onClick={() => handleRowClick(user)}>
                                    <td className='px-6 py-3'>{index + 1}</td>
                                    <td className='px-6 py-3'>{user.name}</td>
                                    <td className='px-6 py-3'>{user.department}</td>
                                    <td className='px-6 py-3'>{user.role}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td className='px-6 py-3' colSpan="4">No employees found</td>
                            </tr>
                        )}
                    </tbody>
                </table>

                {/* Edit Modal */}
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
                            <h2 className="text-xl mb-4">Edit User: {editedName}</h2>
                            <form onSubmit={handleSaveChanges}>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Department</label>
                                    <input
                                        type="text"
                                        value={editedDepartment}
                                        onChange={(e) => setEditedDepartment(e.target.value)}
                                        className="w-full px-4 py-2 border rounded-lg"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Role</label>
                                    <input
                                        type="text"
                                        value={editedRole}
                                        onChange={(e) => setEditedRole(e.target.value)}
                                        className="w-full px-4 py-2 border rounded-lg"
                                    />
                                </div>
                                <div className="flex justify-end">
                                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Save Changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
                {showModal && <div className="fixed inset-0 z-40 bg-black opacity-25"></div>}
            </div>
        </div>
    );
};

export default EmployeeManagement;
