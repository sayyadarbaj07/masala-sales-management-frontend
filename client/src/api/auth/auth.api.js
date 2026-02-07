import api from "../axios";

// REGISTER USER
export const registerUser = async (data) => {
  const response = await api.post("/auth/register", data);
  return response.data;
};

// LOGIN USER
export const loginUser = async (data) => {
  const response = await api.post("/auth/login", data);
  return response.data;
};
