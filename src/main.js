import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './theme.js' 
import Service from './Service'
Vue.prototype.$service = Service
Vue.config.productionTip = false;

Vue.mixin({
  methods: {
    formatToCurrency(amount){
      return 'IQD '+(amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,').slice(0, -3); 
    }
  },
  filters:{
    strLen:function (value) {
      return value.length > 25 ? value.substring(0, 24) + "..." : value
    }
  }
})



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
