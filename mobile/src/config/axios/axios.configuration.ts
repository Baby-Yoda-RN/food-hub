import axios from 'axios';
import {getToken} from '../../utilities';

const instance = axios.create({
  baseURL: 'http://10.0.2.2/api' || 'http://0.0.0.0/api',
});

instance.interceptors.request.use(
  async config => {
    const token = await getToken('key');
    if (token) config.headers.Authorization = token;
    return config;
  },
  error => Promise.reject(error),
);

export const foodHubAPI = {
  get: async endPoint => {
    return instance
      .get(endPoint)
      .then(response => response)
      .catch(error => Promise.reject(error));
  },

  post: async (endPoint, data) => {
    return instance
      .post(endPoint, data)
      .then(response => response)
      .catch(error => Promise.reject(error));
  },
};