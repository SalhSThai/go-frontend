import { getAccessToken, removeAccessToken } from "@/utils/localstorage";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

axios.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

// axios.interceptors.response.use(
//   (response) => response,
//   (err) => {
//     if (err.response.status === 401) {
//       removeAccessToken();
//       return window.location.replace("/");
//     }
//     return Promise.reject(err);
//   }
// );

export default axios;
