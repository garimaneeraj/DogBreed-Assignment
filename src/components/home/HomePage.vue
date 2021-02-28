<template>
  <div v-if="noError" class="home">
     <div class="row">
       <div class="col-mod-4">
         <form class="form" id="search" @submit.prevent="searchBreed()">
           <div class="search-form">
             <input type="text" class="form-control" name="searchText"
             v-model="searchText"
             :class="{'is-invalid':validationStatus(searchText)}"
              placeholder="Search dog breed ">
             <div v-if="!searchText" class="invalid-feedback"> Breed is required </div>
             <button class="btn btn-primary"
             @click="searchBreed()">Search</button>
           </div>
         </form>
       </div>
     </div>
     <div class="row">
       <div v-if="availableDogs">
         <div v-for="(dog, idx) in pageOfItems" :key="idx"
            class="content doglist">
             <h4>{{dog.name.toUpperCase()}}</h4>
           <router-link :to="{name: 'BreedImages', params:{breedname:dog.name}}">
             <img :src="dog.img" width="282px" height="150px"/></router-link>
          </div>
         </div>
        <div v-else>No dogs available</div>
      <div class="card text-center m-3">
        <div class="card-footer pb-0 pt-3">
          <jw-pagination :items="availableDogs" @changePage="onChangePage" :pageSize="10">
          </jw-pagination>
        </div>
      </div>
    </div>
    <div>
    <h3 class="text-danger">{{errorMsg}}</h3>
  </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators';

export default {
  name: 'HomePage',
  created() {
    this.$store.dispatch('getDogs').catch((err) => {
      console.log(err);
      this.noError = false;
      this.errorMsg = err;
    });
    console.log(this.$store.state.dogs);
  },
  computed: {
    availableDogs() {
      return this.$store.state.dogs;
    },
  },
  data() {
    return {
      pageOfItems: [],
      searchText: '',
      noError: true,
      errorMsg: '',
    };
  },
  methods: {
    onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
    },
    searchBreed() {
      this.$store.state.searchText = this.searchText;
      this.$router.push({
        name: 'Search',
      });
    },
    validationStatus(validation) {
      return typeof validation !== 'undefined' ? validation.$error : false;
    },
  },
  validations: {
    searchText: { required },
  },
};
</script>

<style scoped>
.home{
  text-align: center;
}
.content{
  margin-top: 15px;
  margin-left: 40px;
  border: 1px solid gray;
  padding: 0%;
  background-color: rgb(209, 164, 164);
}
.search-form {
  padding: 20px;
}
.search-form button{
  margin: 5px;
  float: right;
}
</style>
