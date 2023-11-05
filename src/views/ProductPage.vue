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
    <div v-else class="row">
      <div class="col-4" v-for="(i, index) in products" :key="index">
        <div class="card p-3 mb-3">
          <div class="card-body text-center">
            <img :src="i.image" alt="Product Image" />
            <p class="mt-2">{{ i.title }}</p>
            <h5>$ {{ i.price }}</h5>
            <router-link class="detail btn btn-primary mt-2" :to="`/product/${i.id}`">More Details</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ProductPage",
  data() {
    return {
      loading: false,
      products: [],
    };
  },
  mounted() {
    this.loading = true;
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        this.products = response.data;
        this.loading = false;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
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
img {
  width: 100px;
  height: 100px;
}
.load {
  height: 50vh;
}
.card {
  height: 45vh;
  position: relative;
}
.detail {
  width: 90%;
  position: absolute;
  bottom: 5%;
  left: 5%;
}
</style>


