import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
       
          {/* <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">
              RBAC DASHBOARD ||  VRV SECURITY
            </h1>
          </div> */}
          <nav className="bg-sky-600 text-white p-4 fixed w-full top-0 z-50">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-xl font-bold">
        RBAC DASHBOARD || VRV SECURITY
      </h1>
    </div>
  </nav>

        <div className="p-4">
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
