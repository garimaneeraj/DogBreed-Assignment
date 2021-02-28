<template>
      <div v-if="imageExist">
        <div v-if="subBreedImages">
          <div v-for="(img,index) in pageOfItems" :key="index"
          class="col-md-3 col-lg-3 col-sm-3 col-xl-3">
            <img :src="img" class="image"/>
            <br/><br/>
          </div>
          <div class="card text-center m-3">
            <div class="card-footer pb-0 pt-3">
              <jw-pagination :items="subBreedImages" @changePage="onChangePage" :pageSize="5">
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

  name: 'SubBreedImages',
  data() {
    return {
      pageOfItems: [],
      imageExist: true,
      errorMsg: '',
    };
  },
  props: ['breedName'],
  created() {
    this.$store.state.selectedBreed = this.breedName;
    this.$store.dispatch('getSubBreedImage').catch((err) => {
      console.log(err);
      this.imageExist = false;
      this.errorMsg = err;
    });
  },
  computed: mapState(['subBreedImages']),
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
