import axios from 'axios';
import {getToken} from 'utilities';

const instance = axios.create({
  baseURL: 'http://10.0.2.2/api' || 'http://0.0.0.0/api',
});

const configuration = {timeoutErrorMessage:'Looks like the server is taking to long to respond, please try again in sometime.',timeout:5000}

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
      .get(endPoint,configuration)
      .then(response => response)
      .catch(error => Promise.reject(error));
  },

  post: async (endPoint, data) => {
    return instance
      .post(endPoint, data,configuration)
      .then(response => response)
      .catch(error => Promise.reject(error));
  },
};
