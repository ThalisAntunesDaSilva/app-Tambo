import axios from 'axios';

const api = axios.create({
    baseURL: 'https://tambo.herokuapp.com'
})

export default api;