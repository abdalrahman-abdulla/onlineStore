import Vue from "vue";
import VueRouter from "vue-router"; 
import store from "../store/index";
Vue.use(VueRouter);

const routes = [
  {
    path: "/", 
    component: () => import("../layouts/user.vue"),
    children:[
      {
        path: "/",
        name: "home",
        component: () =>import("../pages/user/home.vue")
      },
      {
        path: "/:sub_slug/items",
        name: "shoping",
        component: () =>import("../pages/user/shoping.vue")
      },
      {
        path: "/checkout",
        name: "checkout",
        component: () =>import("../pages/user/checkout.vue"),
        meta:{
          checkout:true
        }
      },
      {
        path: "/:sub_slug/items/:item_slug",
        name: "showitem",
        component: () =>import("../pages/user/showItem.vue")
      },  
    ]
  }, 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.checkout)) {
    // if no token
    if (!store.getters.get_cart[0]) {
      //console.log("no token");
      next({
        path: "/"
      });
    } else {
      next();
    }
  }  
  else{
    next()
  }
});
export default router;
