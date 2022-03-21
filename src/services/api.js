import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.3.6:8080'
})

export default api;