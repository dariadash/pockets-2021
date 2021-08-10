import Axios from 'axios';

export const axios = Axios.create({
  responseType: 'json',
  withCredentials: true,
});

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axios.interceptors.response.use((response) => {
  if (response.status === 401) {
    localStorage.removeItem('authToken');
  }
  return response;
});