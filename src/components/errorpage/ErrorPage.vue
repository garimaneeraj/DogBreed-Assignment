<template>
    <div class="container">
          <div class="card error-page">
            <div class="card-header ">{{error}}</div>
            <div class="card-body">
              <h3 class="card-title">SORRY</h3>
              <p class="card-text">{{message}}</p>
            </div>
          </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
  props: {
    error: {
      default: 'Error 404',
    },
    message: {
      default: 'PAGE NOT FOUND',
    },
  },
};
</script>

<style scoped>
.error-page{
    margin-top: 20px;
}
</style>
