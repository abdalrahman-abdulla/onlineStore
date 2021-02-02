//import Vue from "vue";
import axios from "axios"; 
import store from './store/index'
axios.interceptors.request.use(config => {
    // config.baseURL = "https://station-api.herokuapp.com/api/";
    config.baseURL = store.getters.get_url + 'api/';
    config.headers.Authorization = `Bearer ${localStorage.getItem('token') || ''}`;
    return config;
});

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
