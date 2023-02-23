import axios from 'axios';

const { VITE_ITUNES_BASE_URL } = import.meta.env;

const podcastApi = axios.create({
  baseURL: VITE_ITUNES_BASE_URL,
});

export default podcastApi;
