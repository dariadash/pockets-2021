import { axios } from './index';

export const register = (username: string, password: string, email: string) => {
  return axios.post('/api/auth/register/', {
    username,
    email,
    password,
  });
};

export const login = (email: string, password: string) =>
  axios.post('/api/auth/token/obtain/', {
    email,
    password,
  });

export const getProfileData = () => axios.get('/api/users/me/');