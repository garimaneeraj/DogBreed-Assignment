<template>
    <div>
      <div>
        <div v-if="subBreeds">
          <div>SubBreeds are:  {{subBreeds}} </div>
        </div>
        <br/>
        <div v-if="images">
          <div v-for="(img,index) in pageOfItems" :key="index">
            <img :src="img" class="image"/>
            <br/><br/><br/>
          </div>
          <div class="card text-center m-3">
            <div class="card-footer pb-0 pt-3">
              <jw-pagination :items="images" @changePage="onChangePage" :pageSize="5">
              </jw-pagination>
            </div>
          </div>
        </div>
        <div v-else>No such Breed found
          <router-link to="/" class="link">Go Back</router-link>
        </div>
      </div>
    </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';

export default {
  name: 'SearchPage',
    data() {
      return {
        search : '',
        images: null,
        subBreeds: null,
        pageOfItems: [],
      };
    },
      created() {
        this.search=this.$store.state.searchText;
         axios.get(`https://dog.ceo/api/breed/${this.search.toLowerCase()}/images/random/20`).then((res) => {
            this.images=res.data.message;
    });

    axios.get(`https://dog.ceo/api/breed/${this.search.toLowerCase()}/list`).then((res) =>{
      this.subBreeds = res.data.message;
    });
   },
    methods: {
    onChangePage(pageOfItems) {
      console.log(pageOfItems);
      this.pageOfItems = pageOfItems;
    },
  },
};
</script>

<style scoped>
.image{
  width:200px;
  height:200px;
  border: 3px solid #aaa;

}
.card-footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
}
.link{
  color:crimson;
}
</style>
