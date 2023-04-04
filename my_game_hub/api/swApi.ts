import axios from 'axios';

const API = axios.create({
  baseURL: '/api',
  timeout: 1000 * 10,
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
