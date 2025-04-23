import axios from 'axios';

const buildHeadersWithOutToken = () => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  return headers;
};

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: buildHeadersWithOutToken(),
});
