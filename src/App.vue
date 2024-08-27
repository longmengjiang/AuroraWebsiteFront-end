<template>
  <div class="app">
    <!-- 远程仓库别名   AuroraWebsiteFront-end  -->
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/aNavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>

<style></style>
