<template>
  <div class="footer-block">
    <footer class="p-5 text-center">
      <a href="">
        <img src="../assets/facebook.png" class="rounded-circle me-3 p-2" alt="facebook">
      </a>
      <a href="">
        <img src="../assets/social-media.png" class="rounded-circle me-3 p-2" alt="instagram">
      </a>
      <a href="">
        <img src="../assets/twitter.png" class="rounded-circle me-3 p-2" alt="twitter">
      </a>
      <a href="">
        <img src="../assets/google-plus.png" class="rounded-circle me-3 p-2" alt="google">
      </a>
      <a href="">
        <img src="../assets/youtube.png" class="rounded-circle me-3 p-2" alt="youtube">
      </a>
     <div class="mt-5 text-white">
        <ul>
          <li>
            Html
          </li>
          <li>
            Css
          </li>
          <li>
            Vue.js
          </li>
          <li>
            Bootstrap
          </li>
          <li>
            Api
          </li>
        </ul>
     </div>
  </footer>
  <div class="footer-base p-2 text-center">
          <span class="text-white">Copyright &copy;2023;Design by Kevin</span>
      </div>
  </div>
</template>

<script>
  export default {
  name: 'TheFooter',
  }
</script>

<style scoped>
.footer-block{
  position: static;
  left: 0;
  bottom: 0;
  width: 100%;
}
  footer{
    background-color: #111111;
   
  }
  .footer-base{
    background-color: #000000;
  }
  img{
    width: 40px;
    background-color: white;
  }
  img:hover{
    background-color: red;
    transition: 0.5s;
  }
  ul{
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
  }
  li{
    font-size: 20px;
    font-weight: 500;
  }
  li:hover{
    cursor: pointer;
 
    transform: rotate(360deg);
    transition: 1.3s;
  }
 
</style>
