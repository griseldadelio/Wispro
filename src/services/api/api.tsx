import axios from 'axios';
const api = axios.create({
    baseURL: 'https://test-wispro-55796-default-rtdb.firebaseio.com',
});
export { api };