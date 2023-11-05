<template>
  <div class="container mt-5">
    <div v-if="loading" class="load d-flex justify-content-center align-items-center">
      <div class="intersecting-circles-spinner">
        <div class="spinnerBlock">
          <span class="circle"></span>
          <span class="circle"></span>
          <span class="circle"></span>
          <span class="circle"></span>
          <span class="circle"></span>
          <span class="circle"></span>
          <span class="circle"></span>
        </div>
      </div>
    </div>
    <div v-else class="row py-5">
      <div class="col-5">
        <img :src="product.image" class="img-fluid" alt="Product Imgae">
      </div>
      <div class="col-7 text-start pt-5">
        <h1 class="mb-5">{{ product.title }}</h1>
        <h2 class="text-info mb-5">$ {{ product.price }}</h2>
        <p class="text-muted mb-5">{{ product.description }}</p>
        <div>
            <router-link class="btn btn-outline-dark float-start" to="/product">Go Back</router-link>
            <button class="btn btn-primary float-end" @click="addToCart">Add To Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import axios from "axios";
  export default {
  name: 'ProductDetail',
  data () {
    return {
      loading: false,
      product: {}
    }
  },
  methods: {
    addToCart () {
      Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: ' Sorry,You Can Not Add XD',
 
})
    }
  },
  mounted() {
    this.loading = true;
      axios.get(`https://fakestoreapi.com/products/${this.$route.params.id}`)
        .then(response => {
          this.product = response.data
          this.loading = false;
        })
    }
  }
</script>

<style  scoped>
img{
  height: 60vh;
}
  .intersecting-circles-spinner,
.intersecting-circles-spinner * {
  box-sizing: border-box;
}

.intersecting-circles-spinner {
  height: 70px;
  width: 70px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.intersecting-circles-spinner .spinnerBlock {
  animation: intersecting-circles-spinners-animation 1200ms linear infinite;
  transform-origin: center;
  display: block;
  height: 35px;
  width: 35px;
}

.intersecting-circles-spinner .circle {
  display: block;
  border: 2px solid #ff1d5e;
  border-radius: 50%;
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

.intersecting-circles-spinner .circle:nth-child(1) {
  left: 0;
  top: 0;
}

.intersecting-circles-spinner .circle:nth-child(2) {
  left: calc(35px * -0.36);
  top: calc(35px * 0.2);
}

.intersecting-circles-spinner .circle:nth-child(3) {
  left: calc(35px * -0.36);
  top: calc(35px * -0.2);
}

.intersecting-circles-spinner .circle:nth-child(4) {
  left: 0;
  top: calc(35px * -0.36);
}

.intersecting-circles-spinner .circle:nth-child(5) {
  left: calc(35px * 0.36);
  top: calc(35px * -0.2);
}

.intersecting-circles-spinner .circle:nth-child(6) {
  left: calc(35px * 0.36);
  top: calc(35px * 0.2);
}

.intersecting-circles-spinner .circle:nth-child(7) {
  left: 0;
  top: calc(35px * 0.36);
}

@keyframes intersecting-circles-spinners-animation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.load {
  height: 50vh;
}
</style>
