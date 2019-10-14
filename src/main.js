import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import api from '../utils/api';
import request from '../utils/request';

Vue.prototype.$api = api; // 统一管理的接口地址
Vue.prototype.$request = request; // ajax

Vue.config.productionTip = false; // 阻止产生提示

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
