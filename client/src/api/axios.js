import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // ✅ ENV based
  timeout: 15000, // ✅ request max 15 sec
  headers: {
    "Content-Type": "application/json",
  },
});

/* =========================
   REQUEST INTERCEPTOR
   ========================= */
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    // ✅ token automatically attach
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

/* =========================
   RESPONSE INTERCEPTOR
   ========================= */
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    // ✅ token expired / unauthorized
    if (status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      // force logout
      window.location.href = "/login";
    }

    return Promise.reject(error);
  },
);

export default api;
