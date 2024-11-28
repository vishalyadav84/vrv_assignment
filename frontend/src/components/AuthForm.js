import React, { useState } from "react";
import { Link } from "react-router-dom";

const AuthForm = ({ type, handleSubmit }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: type === "register" ? "User" : undefined,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form
      className="max-w-md mx-auto p-4 border rounded-lg shadow-md space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(formData);
      }}
    >
      <h1 className="text-xl font-bold">{type === "register" ? "Register" : "Login"}</h1>
      <input
        type="text"
        name="username"
        placeholder="Username"
        className="w-full p-2 border rounded"
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="w-full p-2 border rounded"
        onChange={handleChange}
        required
      />
      {type === "register" && (
       <>
        <select
          name="role"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        >
          <option value="User">User</option>
          <option value="Admin">Admin</option>
          <option value="Moderator">Other</option>
        </select>
         Already a user ?
        <Link to="/login" className="text-red-500"> Login</Link></>

      )}
      {type === "login" && (
       <>
         Back to Register  ?
        <Link to="/" className="text-blue-600"> Register here</Link></>

      )}
      <button type="submit" className="w-full p-2 bg-red-600 text-white rounded">
        {type === "register" ? "Register" : "Login"}
      </button>
    </form>
  );
};

export default AuthForm;
