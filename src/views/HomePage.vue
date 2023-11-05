<template>
  <div class="container my-5 text-center">
      <div v-if="!status">
        <h1  class="p-5">This Is Home Page</h1>
      <div>
        <h3 class="text-danger">Hey Buddy, please go to the first 'About' page.</h3>
      </div>
      </div>
      <div v-if="status">
        <h1  class="p-5">Welcome From Shop.Com</h1>
      </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data () {
    return {
      status: false
    }
  },
  mounted () {
    if (localStorage.getItem('auth')) {
      this.status = true;
    } else {
      this.status = false;
    }
  }
};
</script>

<style scoped>
  .container {
    height: 50vh;
  }
</style>


