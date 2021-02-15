import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../home/HomePage.vue';
import SearchPage from '../search/SearchBreed.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    component: HomePage,
  }, {
    path: '/search',
    name: 'Search',
    component: SearchPage,
  }],
});
