<template>
  <!-- 工作室介绍 -->
  <div class="studioIntroduce">
    <div class="studioIntroduce_title">
      <span class="ch_title">工作室介绍</span>
      <span class="en_title">Studio Introduction</span>
    </div>
    <div class="studioIntroduce_introduce"></div>
    <div class="studioIntroduceBottom"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scrped>
.studioIntroduce {
  width: 100%;
  position: relative;
}
.studioIntroduce .studioIntroduce_title {
  width: 100%;
  height: 489px;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
}
.studioIntroduce .studioIntroduce_title .ch_title {
  display: inline-block;
  height: 61px;
  text-align: center;
  font-size: 36px;
  line-height: 52.13px;
  color: rgba(0, 0, 0, 1);
}
.studioIntroduce .studioIntroduce_title .en_title {
  display: inline-block;
  text-align: center;
  height: 42.09px;
  font-size: 20px;
  font-weight: 400;
  line-height: 28.96px;
  color: rgba(0, 0, 0, 0.38);
}
.studioIntroduce .studioIntroduce_introduce {
  position: absolute;
  left: 696px;
  top: 230px;
  width: 1169px;
  height: 530px;
  border-radius: 25px;
  background: #cccccc;
}
.studioIntroduce .studioIntroduceBottom {
  width: 100%;
  height: 489px;
  background: #000000;
}

/* 工作室介绍完成 */
</style>
