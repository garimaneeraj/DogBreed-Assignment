<template>
  <div class="home">
     <div class="row">
       <div v-if="availableDogs">
         <div v-for="(dog, idx) in pageOfItems" :key="idx"
            class="content doglist">
           <h4>{{dog.name.toUpperCase()}}</h4>
           <img :src="dog.img" />
           <br/><br/><br/><br/><br/>
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
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  created() {
    console.log('component created');
    this.$store.dispatch('getDogs');
  },
  computed: {
    availableDogs() {
      return this.$store.state.dogs;
    },
  },
  data() {
    return {
      pageOfItems: [],
    };
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
.home{
  text-align: center;
}
.content{
  text-align:left;
  position: relative;
  width:400px;
  height:250px;
  border: 3px solid rgb(43, 170, 230);
}
.content img{
  width:282px;
  height:150px;
  cursor: pointer;
  float: right;
}
.content .doglist{
  position: relative;
}
.card-footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
}
</style>
