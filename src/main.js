import Vue from 'vue';
import JwPagination from 'jw-vue-pagination';
import App from './App.vue';
import router from './components/router';
import store from './services';
import 'bootstrap/dist/css/bootstrap.css';

Vue.component('jw-pagination', JwPagination);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
