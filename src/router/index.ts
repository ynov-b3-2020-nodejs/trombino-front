import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import(/* webpackChunkName: "Users" */ '../views/Users.vue'),
  },
  {
    path: '/user/',
    name: 'UserProfile',
    component: () => import(/* webpackChunkName: "UserProfile" */ '../views/UserProfile.vue'),
  },
  {
    path: '/user/:id',
    name: 'UserProfile',
    component: () => import(/* webpackChunkName: "UserProfile" */ '../views/UserProfile.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
