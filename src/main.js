import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
// vuex
import store from '@/store/index'

import animate from 'animate.css'
Vue.use(animate);

Vue.config.productionTip = false
// Swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import 'swiper/dist/css/swiper.css'

// axios拦截器

// // 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  store.commit('showLoading');
  return config;
}, function (error) {
  console.log("请求错误");
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  store.commit('hideLoading'); 
  return response;
}, function (error) {
  // 对响应错误做点什么
  console.log("响应错误");  
  return Promise.reject(error);
});

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
