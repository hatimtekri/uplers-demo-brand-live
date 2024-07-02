import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const BaseURL = import.meta.env.VITE_APP_BASE_URL;

const customAxiosApi: AxiosInstance = axios.create({
  baseURL: BaseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

const globalConfig: AxiosRequestConfig = {};

customAxiosApi.interceptors.response.use(
  (response) => response,
  async (err) => {
    if (err.response) {
      return Promise.reject(err);
    }
  }
);

export { customAxiosApi, globalConfig };
