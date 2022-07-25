import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://the-trivia-api.com/api',
});