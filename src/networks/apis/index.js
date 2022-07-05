import axios from "axios";
import CONST from "../../utils/constant";
import { getToken } from "../../utils/helpers/Auth";
import { errorHandler, requestHandler, successHandler } from "./interceptors";

const { BASE_API } = CONST;

const isDev = process.env.NODE_ENV === "development";

const isLocalDev = (isDev) => {
  let axiosConfig;
  axiosConfig = axios.create();
  if (isDev) {
    const config = {
      baseURL: BASE_API,
      headers: {
        "Content-Type": "application/json",
        ...(!!getToken() && { Authorization: `Bearer ${getToken()}` }),
      },
    };
    axiosConfig = axios.create(config);
  }
  return axiosConfig;
};

const axiosInstance = isLocalDev(isDev);

// Handle request process
axiosInstance.interceptors.request.use((request) => requestHandler(request));

// Handle response process
axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);

export default axiosInstance;
