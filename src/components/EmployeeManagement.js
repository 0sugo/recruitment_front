import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmployeeRoles, setEmployeeRoles } from "../redux/Leave/LeaveSlice";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import { FaPen, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const EmployeeManagement = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const empRoles = useSelector((state) => state.leave.employees);
    const loading = useSelector((state) => state.leave.loading);
    const error = useSelector((state) => state.leave.error);
    const [showModal, setShowModal] = useState(false);
    const [editingUser, setEditingUser] = useState(null);
    const [editedRole, setEditedRole] = useState("");
    const [editedName, setEditedName] = useState("");
    const [editedDepartment, setEditedDepartment] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    useEffect(() => {
        // Fetch employee roles when component mounts
        dispatch(getEmployeeRoles());
    }, [dispatch]);

    const handleEditClick = (user) => {
        setShowModal(true);
        setEditingUser(user);
        setEditedRole(user.role);
        setEditedDepartment(user.department);
        setEditedName(user.name);
    };

    const handleSaveChanges = (e) => {
        e.preventDefault();
        if (editingUser) {
            dispatch(
                setEmployeeRoles({
                    user_id: editingUser.user_id,
                    department: editedDepartment,
                    role: editedRole,
                })
            ).then(() => {
                setShowModal(false);
                setEditingUser(null);
                navigate("/EmployeeManagement");
            });
        }
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems =
        empRoles && empRoles.users && empRoles.users.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="relative">
            <Dashboard />

            <div className="absolute top-[9%] left-[25%] border-2  w-[60%]">
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                <table className="w-full table-auto">
                    <thead>
                        <tr className="border-b border-slate-500">
                            <th className="px-6 py-3">S/N</th>
                            <th className="px-6 py-3">Name</th>
                            <th className="px-6 py-3">Department</th>
                            <th className="px-6 py-3">Role</th>
                            <th className="px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems && currentItems.length > 0 ? (
                            currentItems.map((user, index) => (
                                <tr key={user.user_id}>
                                    <td className="px-6 py-3">{indexOfFirstItem + index + 1}</td>
                                    <td className="px-6 py-3">{user.name}</td>
                                    <td className="px-6 py-3">{user.department}</td>
                                    <td className="px-6 py-3">{user.role}</td>
                                    <td className="px-6 py-3">
                                        <button
                                            onClick={() => handleEditClick(user)}
                                            className="bg-blue-500 text-white p-2 rounded-lg"
                                        >
                                            <FaPen />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td className="px-6 py-3" colSpan="5">
                                    No employees found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                {/* Pagination */}
                <div className="flex justify-center my-4">
                    <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1 || !empRoles || !empRoles.users}
                    >
                        <FaArrowLeft />
                    </button>
                    <span className="bg-blue-500 text-white p-2 rounded-lg mx-2">
                        Page {currentPage} /{" "}
                        {Math.ceil((empRoles && empRoles.users ? empRoles.users.length : 0) / itemsPerPage)}
                    </span>
                    <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={
                            !empRoles ||
                            !empRoles.users ||
                            indexOfLastItem >= (empRoles && empRoles.users ? empRoles.users.length : 0)
                        }
                    >
                        <FaArrowRight />
                    </button>
                </div>

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
                                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                                        Save Changes
                                    </button>
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
