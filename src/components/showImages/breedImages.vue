<template>
      <div v-if="imageExist">
        <div class="breedName">
          <h3>{{breedname.toUpperCase()}}</h3>
        </div>
        <div v-if="images">
          <div v-for="(img,index) in pageOfItems" :key="index"
          class="col-md-4 images">
            <img :src="img" class="image"/>
            <br/><br/>
          </div>
          <div class="card text-center m-3">
            <div class="card-footer pb-0 pt-3">
              <jw-pagination :items="images" @changePage="onChangePage" :pageSize="5">
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
import { mapState } from 'vuex';

export default {

  name: 'BreedImages',
  data() {
    return {
      pageOfItems: [],
      imageExist: true,
      errorMsg: '',
    };
  },
  props: ['breedname'],
  created() {
    this.$store.state.searchText = this.breedname;
    this.$store.dispatch('getBreedImages').catch((err) => {
      console.log(err);
      this.imageExist = false;
      this.errorMsg = err;
    });
  },
  computed: mapState(['images']),
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
.breedName{
  font-size:60px;
  text-align: center;
}
.images{
  margin-top: 25px;
  padding: 25px;
  align-items: center;
}
</style>
