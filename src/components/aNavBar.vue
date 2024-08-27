<template>
  <!-- 导航栏（附背景图） -->
  <div class="navBar">
    <ul class="navBar_title">
      <router-link to="home" class="navBar_title_li">
        首页
        <div class="navBar_title_li_bottom"></div>
      </router-link>
      <router-link to="about" class="navBar_title_li">关于我们</router-link>
      <router-link to="join" class="navBar_title_li">加入我们</router-link>
      <router-link to="setting" class="navBar_title_li">设置</router-link>
    </ul>
    <!-- <img src="./img/首页背景图.jpg" class="background" /> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* 导航栏 */
.navBar {
  width: 100%;
  opacity: 1;
}

.navBar .navBar_title {
  width: 100%;
  height: 80px;
  line-height: 80px;
  display: flex;
  justify-content: center;
  background-color: skyblue;
}
.navBar .navBar_title .navBar_title_li {
  width: 300px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  line-height: 80px;
  color: rgba(255, 255, 255, 1); /* 等会不用取消注释 */
  position: relative;
}
.navBar .navBar_title .navBar_title_li .navBar_title_li_bottom {
  position: absolute;
  top: 96%;
  left: 40%;
  width: 61px;
  height: 4.67px;
  background: #ffffff;
}
.navBar .background {
  display: block;
  margin: 0 auto;
  width: 100%;
  height: 1400px;
  box-shadow: 4px 12px 12px 12px #000000;
}
</style>
