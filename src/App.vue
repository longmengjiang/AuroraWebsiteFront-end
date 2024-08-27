<template>
  <div class="app">
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/aNavBar.vue"
export default {
  components: {
    NavBar
  },
}
</script>

<style>
</style>
