<template>
 <nav class="navbar navbar-expand-lg navbar-light bg-info p-2">
  <a class="navbar-brand fs-2 h2" href="#"><i class="text-white">Shop.Com</i></a>
  <img src="../assets/shopping-cart.png" alt="Shop Image">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ms-auto">
      <li class="nav-item ">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item ">
        <router-link class="nav-link" to="/about">About</router-link>
      </li>
      <li class="nav-item ">
        <router-link v-if="status" class="nav-link" to="/product">Products</router-link>
      </li>
      <li class="nav-item">
        <router-link v-if="status" class="nav-link" to="/profile">Profile</router-link>
      </li>
      <li class="nav-item ">
        <router-link v-if="!status" class="nav-link" to="/login">Login</router-link>
      </li>
      <li class="nav-item">
        <a href="#" v-if="status" class="nav-link" @click="logout">Logout</a>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
  name: 'MenuBar',
  data () {
    return {
      status: false,
    }
  },
  computed: {
    ...mapGetters(['getEmail'])
  },
  methods: {
      logout() {
        this.status = false,
        localStorage.clear();
        this.$router.push('/login')
    },
  },
  mounted() {
    if (localStorage.getItem('auth')) {
      this.status = true;
    } else {
      this.status = false;
    }
  }
  }
</script>

<style scoped>
  img{
    width: 50px
  }

  li{
    font-family: Agbalumo;
      font-size: larger;
      font-weight: bolder;
  }
  a.router-link-active{
    color: white;
  }
</style>


