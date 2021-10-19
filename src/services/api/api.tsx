import axios from 'axios';
const api = axios.create({
    baseURL: 'https://wispro-32fb0-default-rtdb.firebaseio.com/',
});
export { api };