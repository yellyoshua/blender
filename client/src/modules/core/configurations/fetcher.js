import axios from 'axios';

export const FetcherApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
  timeout: 10000
});
