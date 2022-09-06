import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeShop from "@/views/home/HomeShop";
import ShopInfo from "@/views/shopinfo/ShopInfo";
import Login from "@/views/login/Login";
import Register from "@/views/register/Register";
import ShopCart from "@/views/shopcart/ShopCart";
import Pay from "@/views/pay/Pay";
import PayInfo from "@/views/pay/PayInfo";
import PayEdit from "@/views/pay/PayEdit";

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeShop
  },
  {
    path: '/shopinfo',
    name: 'shopinfo',
    component: ShopInfo,
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/shopcart',
    component: ShopCart
  },
  {
    path: '/pay',
    name: 'pay',
    component: Pay,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return {x: 0, y: 0}
  }
})

export default router
