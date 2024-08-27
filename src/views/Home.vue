<template>
  <div>
    <!-- 首页背景图 -->
    <img src="@/assets/img/首页背景图.jpg" class="background" />

    <!-- 横栏 （welcome to join us） -->
    <WelcomeBar></WelcomeBar>

    <PictureShow></PictureShow>

    <!-- 装饰点1 -->
    <DecoratePoint1></DecoratePoint1>

    <!-- 分界线 -->
    <div style="width: 100%; height: 1px; background-color: #d2d0d0"></div>

    <!-- 工作室介绍 -->
    <StudioIntroduce></StudioIntroduce>

    <!-- 装饰点2 -->
    <DecoratePoint2></DecoratePoint2>
  </div>
</template>

<script>
import WelcomeBar from "@/components/aWelcomeBar.vue";
import PictureShow from "@/components/aPictureShow.vue";
import StudioIntroduce from "@/components/aStudioIntroduce.vue";
import DecoratePoint1 from "@/components/aDecoratePoint1.vue";
import DecoratePoint2 from "@/components/aDecoratePoint2.vue";
export default {
  name: "myHome",
  components: {
    DecoratePoint1,
    DecoratePoint2,
    WelcomeBar,
    PictureShow,
    StudioIntroduce,
  },
};
</script>

<style scoped>
.background {
  display: block;
  margin: 0 auto;
  width: 100%;
  height: 1400px;
  box-shadow: 4px 12px 12px 12px #000000;
}
</style>
