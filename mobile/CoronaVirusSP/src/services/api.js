import axios from 'axios';
  
const api = axios.create({
    baseURL: 'https://coronasaopaulo.herokuapp.com'
})

export default api;
