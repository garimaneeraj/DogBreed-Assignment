import axios from 'axios';

export function getDogsList() {
  return axios.get('https://dog.ceo/api/breeds/list/all');
}

export function getDogRandomImages(dogName) {
  return axios.get(`https://dog.ceo/api/breed/${dogName}/images/random`);
}

export function getBreedImages(searchText) {
  return axios.get(`https://dog.ceo/api/breed/${searchText.toLowerCase()}/images/random/20`);
}

export function getSubBreeds(dogName) {
  return axios.get(`https://dog.ceo/api/breed/${dogName.toLowerCase()}/list`);
}

export function getSubBreedImages(dogName, breedName) {
  return axios.get(`https://dog.ceo/api/breed/${dogName}/${breedName}/images/random/20`);
}
