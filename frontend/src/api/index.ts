import { showError } from '../services/showToast';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import Endpoint from '../config/endpoint';
const api = axios.create({
  baseURL: `http://${Endpoint.endpoint}/`,
});

api.interceptors.request.use(async (request: AxiosRequestConfig) => {
  const token = localStorage.getItem('@Token');
  if (request.url !== 'login') {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
});

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    console.log('ERROR', error);
    showError(error.response?.data.message);
    if (error.response?.data.error.includes('JWT')) {
      localStorage.removeItem('@Token');
      window.location.reload();
    }
    throw error;
  },
);
export default api;
