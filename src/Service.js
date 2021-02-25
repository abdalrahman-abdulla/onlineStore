//import Vue from "vue";
import axios from "axios"
axios.interceptors.request.use(config => { 
    config.baseURL = process.env.VUE_APP_API + 'api/'
    config.headers.Authorization = `Bearer ${localStorage.getItem('token') || ''}`
    return config
}) 
axios.interceptors.response.use(
  response => response,
  error => {
    const { status } = error.response;
    if (status === 401) {
      //window.location='/logout'
    }
    return Promise.reject(error);
  }
);
export default axios;
