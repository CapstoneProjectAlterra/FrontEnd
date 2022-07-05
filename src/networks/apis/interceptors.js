import { Navigate } from "react-router-dom";
import { getToken } from "../../utils/helpers/Auth";

export const isHandlerEnabled = (config) => {
  return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled
    ? false
    : true;
};

export const requestHandler = (config) => {
  if (isHandlerEnabled(config)) {
    const auth = getToken();
    if (auth) {
      config.headers.Authorization = `Bearer ${auth}`;
    }
  }
  return config;
};

export const successHandler = (response) => {
  if (isHandlerEnabled(response)) {
    if (response.status === 200) {
      return response;
    }
  }
  return response;
};

export const errorHandler = (error) => {
  if (isHandlerEnabled(error.config)) {
    return <Navigate to="/" replace />;
  }
  return Promise.reject({ ...error });
};
