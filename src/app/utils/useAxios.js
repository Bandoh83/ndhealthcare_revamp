import axios, { InternalAxiosRequestConfig } from "axios";

// https://nodejs-ndhealthcare.vercel.app/

const useAxios = () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://nodejs-ndhealthcare.vercel.app/";

  const axiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 10000000,
    headers: {
      "Content-Type": "application/json",
    },
  });

    axiosInstance.interceptors.request.use((config) => {
    if (config.data instanceof FormData) {
      // Remove the default Content-Type for FormData
      delete config.headers["Content-Type"];
    }
    return config;
  });

  return axiosInstance;
};

export default useAxios;
