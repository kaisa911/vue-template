import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'index', component: () => import('./views/index.vue') },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/about.vue'),
    },
  ],
});
