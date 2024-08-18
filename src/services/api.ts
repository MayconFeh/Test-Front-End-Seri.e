import axios from 'axios';
import CryptoJS from 'crypto-js';

const API_KEY_PUBLIC = 'd5870b1dfad049935a933d3059708355';
const API_KEY_PRIVATE = '6263fbe2dfc678b15024f0967ab134c48ecb8068';
const BASE_URL = 'https://gateway.marvel.com/v1/public/';

const generateAuthParams = () => {
  const ts = new Date().getTime().toString();
  const hash = CryptoJS.MD5(ts + API_KEY_PRIVATE + API_KEY_PUBLIC).toString(CryptoJS.enc.Hex);

  return {
    ts,
    apikey: API_KEY_PUBLIC,
    hash,
  };
};

export const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(config => {
  const authParams = generateAuthParams();
  config.params = { ...config.params, ...authParams };
  return config;
}, error => {
  return Promise.reject(error);
});
