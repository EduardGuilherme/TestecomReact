import axios from 'axios';

const api = axios.create({baseURL:'https://raw.githubusercontent.com/DevMagic/frontend-intern-challenge/master/Assets/urls.json'});

export default api;