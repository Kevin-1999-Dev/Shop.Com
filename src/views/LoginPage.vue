<template>
  <div class="container my-5">
      <div class="row d-flex justify-content-center">
        <div class="col-4 ">
          <div class="card">
            <div class="card-body">
              <div v-if="error" class="alert alert-danger">
                {{ message }}
              </div>
              <h3 class="my-3">Login</h3>
              <form @submit.prevent="login()">
                <div class="form-group mb-3">
                  <label for="">Email</label>
                  <input type="email" v-model="email" class="form-control" placeholder="Enter Your Email...">
                </div>
                <div class="form-group mb-3">
                  <label for="">Password</label>
                  <input type="password" v-model="password" class="form-control" placeholder="Enter Your Password...">
                </div>
                <button type="submit" class="btn btn-primary w-100">Login</button>
              </form>
            </div>
            <div class="card-footer">
                <span>Don't Have An Account? <a href="#" class="text-decoration-none">Register</a></span>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      email: '',
      password: '',
      message: '',
      error: false,
    }
  },
  methods: {
    login () {
      if (this.email == "kzh@gmail.com" && this.password == "12345678") {
        localStorage.setItem('auth', this.email);
        this.$store.dispatch("setEmail", this.email);
        this.$router
          .push({ path: '/' })
          .then(() => { this.$router.go() })
        
      } else {
        this.error = true;
        this.message = "Please Check Your Email or Password..."
      }
    }
  }
  }
</script>

<style scoped>
   .container {
    height: 50vh;
  }
</style>


