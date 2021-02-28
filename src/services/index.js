import Vue from 'vue';
import Vuex from 'vuex';
import {
  getDogsList, getDogRandomImages, getBreedImages, getSubBreeds, getSubBreedImages,
} from './dogService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    breeds: [],
    dogs: [],
    searchText: '',
    images: [],
    subBreeds: [],
    selectedBreed: '',
    subBreedImages: [],
  },
  mutations: {
    updateBreeds(state, breeds) {
      state.breeds = breeds;
    },
    updateDogs(state, dogs) {
      state.dogs.push(dogs);
    },
    updateImageArray(state, images) {
      state.images = images;
    },
    updateSubBreeds(state, subBreeds) {
      state.subBreeds = subBreeds;
    },
    updateSubBreedImages(state, subBreedImages) {
      state.subBreedImages = subBreedImages;
    },
  },
  actions: {
    getDogs({ commit, state }) {
      const response = getDogsList();
      response.then((result) => {
        commit('updateBreeds', result.data.message);
        Object.keys(state.breeds).forEach((property) => {
          if (property) {
            let imgSrc;
            const imageListResponse = getDogRandomImages(property);
            imageListResponse.then((res) => {
              imgSrc = res.data.message;
              const breedObj = {
                name: property,
                img: imgSrc,
                subBreed: state.breeds[property],
              };
              console.log(breedObj);
              commit('updateDogs', breedObj);
            }).catch((error) => console.log(error));
          }
        });
      }).catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
    },
    getBreedImages({ commit }) {
      const response = getBreedImages(this.state.searchText);
      response.then((res) => {
        commit('updateImageArray', res.data.message);
      }).catch(console.error);
    },

    getSubBreed({ commit }) {
      const response = getSubBreeds(this.state.searchText);
      response.then((res) => {
        commit('updateSubBreeds', res.data.message);
      }).catch(console.error);
    },
    getSubBreedImage({ commit }) {
      const response = getSubBreedImages(this.state.searchText, this.state.selectedBreed);
      response.then((res) => {
        commit('updateSubBreedImages', res.data.message);
      }).catch(console.error);
    },
  },
});
