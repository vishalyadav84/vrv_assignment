import React from "react";
import { login } from "../services/api";
import AuthForm from "../components/AuthForm";
import { useNavigate } from "react-router-dom";

const Login = () => {
const navigate = useNavigate("")
  const handleSubmit = async (data) => {
    try {
      const response = await login(data);
      localStorage.setItem("userToken", response.data.token);
      alert("Login successful , Happy to see you again");
      navigate("/dashboard")
    } catch (error) {
      alert("Error: " + error.response.data.message);
    }
  };

  return <AuthForm type="login" handleSubmit={handleSubmit} />;
};

export default Login;
