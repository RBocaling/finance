import axios from "axios";

const production = "https://api.aurumplatform.xyz/api";


const api = axios.create({
  baseURL: production,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config:any) => {
    const isPublic = config.isPublic || false; 

    if (!isPublic) {
      const accessToken = localStorage.getItem("accessToken-admin-finance");
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    }

    return config;
  },
  (error:any) => {
    return Promise.reject(error);
  }
);

export default api;
