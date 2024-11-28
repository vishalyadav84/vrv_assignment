import React, { useEffect, useState } from "react";
import { getUsers } from "../services/api";

const UsersComponent = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [errorMessage, setErrorMessage] = useState(""); // Add error message state

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        setUsers(response.data);
      } catch (error) {
        setLoading(false); // Stop loading immediately
        const message = error.response?.data?.message || "Something went wrong";
        alert(message);

        if (message === "Access forbidden") {
          setErrorMessage("You are not allowed to view users."); // Set custom error message
        }
      } finally {
        setLoading(false); // Stop loading regardless of success or error
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-yellow-500 mb-6">User List</h1>
      {loading ? (
        <div className="flex justify-center items-center h-20">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600"></div>
          <p className="ml-3 text-red-600 font-medium">Loading users...</p>
        </div>
      ) : errorMessage ? (
        // Display the error message if access is forbidden
        <div className="text-red-600 font-medium">
          {errorMessage}
        </div>
      ) : users.length > 0 ? (
        <ul className="w-full max-w-lg bg-white shadow-md rounded-lg overflow-hidden">
          {users.map((user) => (
            <li
              key={user._id}
              className="p-4 border-b border-gray-200 hover:bg-blue-50 transition-colors"
            >
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-900 text-white flex justify-center items-center text-lg font-bold">
                  {user.username.charAt(0).toUpperCase()}
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-900">{user.username}</p>
                  <p className="text-sm text-gray-500">{user.email || "No email provided"}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No users found.</p>
      )}
    </div>
  );
};

export default UsersComponent;
