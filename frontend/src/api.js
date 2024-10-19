import axios from 'axios';

// Use the API URL from the .env file
const API = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export const registerUser = (data) => API.post('/register', data);
export const loginUser = (data) => API.post('/login', data);
export const postJob = (data, token) => API.post('/post-job', data, { headers: { Authorization: `Bearer ${token}` } });
export const getJobs = () => API.get('/jobs');
