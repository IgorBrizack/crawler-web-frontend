import axios from 'axios';

const api = axios.create({
  baseURL: `https://crawler-challenge-backend-api.onrender.com`,
});

export const getData = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const postData = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const deleteData = async (endpoint) => {
  const { data } = await api.delete(endpoint);
  return data;
};

export const putData = async (endpoint, body) => {
  const { data } = await api.put(endpoint, body);
  return data;
};

export default api;
