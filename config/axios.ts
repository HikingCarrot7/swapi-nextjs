import axios from 'axios';

const api = axios.create({
  baseURL: 'https://swapi.dev/api',
  params: {
    format: 'json',
  },
});

export default api;
