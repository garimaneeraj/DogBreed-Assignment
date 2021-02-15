<template>
<div class="container-fluid">
  <div id="app">
    <header>
      <b-navbar>
        <ul>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Home'}" exact>
            Dog-Breed
            </router-link>
          </li>
          <li class="nav-item">
            Search Dog-breeds
             <div class="searchBar">
             <input type="text" class="form-control"
              v-model="search"> <button class="search-button"
             @click="searchBreed()">Search</button>
            </div>
          </li>
        </ul>
      </b-navbar>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      search: 'text',
    };
  },
  methods: {
    searchBreed() {
      this.$store.state.searchText = this.search;
      this.$router.push({
        name: 'Search',
      });
    },
  },
};
</script>

<style>
body{
  background-attachment: fixed;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
main{
  padding:30px ;

  min-height: 500px;

}

header {
  background-color: rgb(2, 2, 56);
  color:oldlace;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-flex;
  padding: 5px 10px;
  font-size: 18px;
  border-right: 1px solid #bbb;
}

.nav-link{
  text-decoration: none;
  color: inherit;
}
.router-link-active{
  color:white;
}

.container{
  display: flex;
  margin: 10px auto 0 auto;
  justify-content: center;
}
.searchBar{
    float: right;
    margin-left: 10px;
    border-radius: 50px;
}
.search-button{
  float: right;
  padding: 10px;
  background: #2196F3;
  color: white;
  font-size: 17px;
  border: 1px solid grey;
  border-left: none;
  cursor: pointer;
}
</style>
