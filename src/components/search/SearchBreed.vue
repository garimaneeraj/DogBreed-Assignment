<template>
      <div v-if="checkData">
        <div v-if="subBreeds">
          <div class="container">
            <div class="card">
          <h3 class="card-header"> Sub Breeds for {{searchText}}</h3>
                 <ul class="list-group list-group-flush"
                 v-for="(subBreed,index) in subBreeds" :key="index">
                        <li class="list-group-item">
                          <router-link :to="{name: 'SubBreedImages', params:{breedName:subBreed}}">
                            {{subBreed}}</router-link></li>
                    </ul>
        </div>
        </div>
        </div>
        <div v-if="images">
          <div v-for="(img,index) in pageOfItems" :key="index"
          class="col-md-3 col-lg-3 col-sm-3 col-xl-3">
            <img :src="img" class="image"/>
            <br/><br/>
          </div>
          <div>
          <h5>If you want to search again
            <router-link to="/" class="link">click here</router-link></h5>
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
      <div>
        <h3>{{errorMsg}}</h3>
      </div>
      </div>
</template>

<script>
import { mapState } from 'vuex';

export default {

  name: 'SearchPage',
  data() {
    return {
      pageOfItems: [],
      checkData: true,
      errorMsg: '',
    };
  },
  created() {
    this.$store.dispatch('getBreedImages').catch((err) => {
      console.log(err);
      this.checkIfImageExist = false;
      this.errorMessage = err;
    });
    this.$store.dispatch('getSubBreed').catch((err) => {
      console.log(err);
      this.checkIfImageExist = false;
      this.errorMessage = err;
    });
  },
  computed: mapState(['images', 'subBreeds', 'searchText']),
  methods: {
    onChangePage(pageOfItems) {
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
.link{
  color:rgb(226, 48, 90);
}
</style>
