<template>
<div class="container-fluid">
  <div id="app">
    <header>
      <nav>
        <ul class="navbar navbar-inverse">
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Home'}" exact>
            Dog-Breed
            </router-link>
          </li>
        </ul>
      </nav>
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
}

header {
  background-color: rgb(6, 6, 139);
  color:oldlace;
  width: 100%;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 18px;
  border-right: 1px solid #bbb;
}

.nav-link{
  text-decoration: none;
  color: inherit;
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
  float: left;
  padding: 10px;
  background: #2196F3;
  color: white;
  font-size: 17px;
  cursor: pointer;
  margin: 5px;
}
</style>
