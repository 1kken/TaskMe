import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://backend.test", // your Laravel app
    withCredentials: true,
    withXSRFToken:true,
    headers: {
        "X-Requested-With": "XMLHttpRequest", // 🔑 required for Sanctum
    },
});

export default axiosInstance;

