import axios from 'axios';

const { VITE_ITUNES_BASE_URL, VITE_CORS_PROXY } = import.meta.env;

export const podcastApiProxi = axios.create({
  baseURL: ` ${VITE_CORS_PROXY}/${VITE_ITUNES_BASE_URL}`,
});

export const podcastApi = axios.create({
  baseURL: VITE_ITUNES_BASE_URL,
});
