import { axios } from './index';

export const getCategoryData = (id: number, name: string, category_type: string) =>
  axios.get('/api/pockets/categories', {
    params: {
      id,
      name,
      category_type,
    }
  });

export const addCategory = (name: string, category_type: string) =>
  axios.post('/api/pockets/categories', {
    name,
    category_type,
  });