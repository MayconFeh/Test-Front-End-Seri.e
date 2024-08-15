import axios from 'axios';

const API_KEY = '21ed41b49b4de8b455546495b064a340'; 
const BASE_URL = 'https://gateway.marvel.com/v1/public/';

export const api = axios.create({
    baseURL: BASE_URL,
    params: { apikey: API_KEY },
});
