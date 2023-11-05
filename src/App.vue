<template>
  <div>
      <menu-bar ></menu-bar>
      <router-view ></router-view>
      <the-footer></the-footer>
  </div>
</template>

<script>
import MenuBar from "../src/components/MenuBar.vue"
import TheFooter from "../src/components/TheFooter.vue"
  export default {
  name: 'App',
  components: {
    MenuBar,
    TheFooter,
  },
  }
</script>



