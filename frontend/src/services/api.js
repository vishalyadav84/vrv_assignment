import axios from "axios";

const API = axios.create({ baseURL: "https://vrv-security-s-backend-assignment.onrender.com/api" });

export const register = (data) => API.post("/users/register", data);
export const login = (data) => API.post("/users/login", data);
export const getUsers = () => {
   const token = localStorage.getItem("userToken")  
  console.log(token)
  return API.get("/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
