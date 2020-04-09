import axios from 'axios';
  
const api = axios.create({
    baseURL: 'https://coronasaopaulo.herokuapp.com'
    //baseURL: 'http://192.168.0.105:3000'
})

export default api;
