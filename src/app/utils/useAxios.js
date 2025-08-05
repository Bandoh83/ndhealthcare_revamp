import axios, { InternalAxiosRequestConfig } from "axios";

const useAxios = () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://nodejs-ndhealthcare.vercel.app/";

  const axiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 10000000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return axiosInstance;
};

export default useAxios;
