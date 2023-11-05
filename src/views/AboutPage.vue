<template>
  <div class="container my-5">
    <h1 class="text-center mb-5">About Page</h1>
    <div>
      <h2 class="text-primary mb-3">Hello Visiter</h2>
      <p v-if="!status" class="text-muted">
        <i class="text-warning fs-3">Firstly</i>, if you are here, I will explain this project to you. <br />
        This project is my Vue3 simple project called
        <i class="fs-3 text-warning">Shop.Com</i> and it is frontend-only (Vue3). <br />
        If you want to check my project, you must first log in. <br />
        The login credentials are as follows: Email: <i class="text-danger h4">kzh@gmail.com</i> ,
        Password: <i class="text-danger h4">12345678</i>. <br>
        <i class="fs-3 text-warning">In conclusion</i>, <br>
         if you'd like to provide me with advice for this project, <br> you can contact me at my Email address: <i class="fs-3 text-primary"> koeshwin9999@gmail.com</i>. <br>
       
      </p>
      <p v-if="status" class="text-muted">
        <i class="fs-3 text-warning">Once logged in</i>, you can view the profile and products. <br> Please note that you won't be able to make purchases or modify your profile or register. <br> This project is simple, and I apologize for any inconvenience. <br>
        <i class="fs-3 text-warning">In conclusion</i>, <br>
         if you'd like to provide me with advice for this project, you can contact me at my Email address: <i class="fs-3 text-primary"> koeshwin9999@gmail.com</i>. <br>
       
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
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
  height: 60vh;
}
p {
  line-height: 1cm;
  font-weight: 900;
}
</style>


