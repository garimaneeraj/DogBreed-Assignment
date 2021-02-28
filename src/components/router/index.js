import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../home/HomePage.vue';
import SearchPage from '../search/SearchBreed.vue';
import SubBreedImages from '../showImages/subBreedImages.vue';
import BreedImages from '../showImages/breedImages.vue';
import ErrorPage from '../errorpage/ErrorPage.vue';

Vue.use(Router);

const originalPush = Router.prototype.push;
// Rewrite the push method on the prototype and handle the error message uniformly
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

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
  }, {
    path: '/subBreed/:breedName',
    name: 'SubBreedImages',
    component: SubBreedImages,
    props: true,
  }, {
    path: 'breedImages/:breedname',
    name: 'BreedImages',
    component: BreedImages,
    props: true,
  }, {
    path: '/errorPage/:errorName/:errorMessage',
    name: 'error',
    component: ErrorPage,
    props: true,
  },
  {
    path: '*',
    name: 'error',
    component: ErrorPage,
    props: true,
  }],
});
