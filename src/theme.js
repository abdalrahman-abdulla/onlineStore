import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/css/main.scss';
import 'normalize.css'
import Vue from "vue"; 
import Swal from 'sweetalert2'//nicealert  
import VuePageTransition from 'vue-page-transition'


Vue.use(VuePageTransition)
 
//nice alert 2
window.Swal=Swal;
const toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
}) 
window.toast=toast;
window.Fire=new Vue();
/*
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyAvewsBU4TurIxttsteiBle-2gJt9ulYFs',
      libraries: "places" 
    },
  })

*/


import { ValidationProvider } from 'vee-validate';
import { ValidationObserver } from 'vee-validate'; 

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

import { extend } from 'vee-validate';
import { required,min,length,integer,email } from 'vee-validate/dist/rules';

// Add the required rule
extend('required', {
  ...required,
  message: 'هذا الحقل مطلوب'
});
extend('length', {
  ...length, 
  message: (field,length) => " يجب ان يكون طول الحقل " + length.length +" رقم"  
});

extend('integer', {
  ...integer, 
  message: 'يرجى ادخال ارقام فقط'  
})

extend('min', {
  ...min, 
  message:(field,length) => " يجب ان يكون الحقل اكبر من "  + length.length +" ارقام /حروف "
  
});

extend('email', {
  ...email, 
  message: 'يرجى ادخال عنوان بريد الكتروني صحيح'  
})