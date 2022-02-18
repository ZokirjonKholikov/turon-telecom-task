import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;
const service = axios.create({
  baseURL,
});

service.interceptors.response.use(
  (res) => res.data,
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.request.use((config) => {
  // eslint-disable-next-line no-param-reassign
  return config;
});

export { service };
