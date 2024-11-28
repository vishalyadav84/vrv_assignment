import React from "react";
import { register } from "../services/api";
import AuthForm from "../components/AuthForm";
import { useNavigate } from "react-router-dom";

const Register = () => {
const navigate = useNavigate("")
  const handleSubmit = async (data) => {
    try {
      const response = await register(data);
      localStorage.setItem("userToken", response.data.token);
      alert("Registration successful Welcome to RBAC Dasboard");
      navigate("/dashboard")
    } catch (error) {
      alert("Error: " + error.response.data.message);
    }
  };

  return <AuthForm type="register" handleSubmit={handleSubmit} />;
};

export default Register;
