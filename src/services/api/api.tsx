import axios from 'axios';
const api = axios.create({
    baseURL: process.env.REACT_APP_FIREBASE_DATABASE,
});
export { api };