/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    breeds: null,
    dogs: [],
    searchText: '',
  },
  actions: {
    getDogs() {
      axios.get('https://dog.ceo/api/breeds/list/all').then((result) => {
        this.breeds = result.data.message;
        for (const property in this.breeds) {
          var imgSrc;
          axios.get(`https://dog.ceo/api/breed/${property}/images/random`).then((res) => {
            imgSrc = res.data.message;
            const breedObj = {
              name: property,
              img: imgSrc,
            };
            this.state.dogs.push(breedObj);
          });
        }
      }).catch(console.error);
    },
  },
  getters: {
},
});
