<template>
  <div class="decorate_1">
    <div>
      <span></span><span></span><span></span><span></span><span></span
      ><span></span>
    </div>
    <div>
      <span></span><span></span><span></span><span></span><span></span
      ><span></span>
    </div>
    <div>
      <span></span><span></span><span></span><span></span><span></span
      ><span></span>
    </div>
    <div>
      <span></span><span></span><span></span><span></span><span></span
      ><span></span>
    </div>
    <div>
      <span></span><span></span><span></span><span></span><span></span
      ><span></span>
    </div>
    <div>
      <span></span><span></span><span></span><span></span><span></span
      ><span></span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
body {
  position: relative;
}

/* 装饰点1 */
.decorate_1 {
  position: absolute;
  left: 500px;
  top: 2060px;
  width: 330px;
  height: 319px;
  opacity: 0.5;
  display: flex;
  gap: 55.6px;
  flex-direction: column;
}
.decorate_1 div {
  display: flex;
  gap: 57px;
}

.decorate_1 span {
  display: inline-block;
  width: 7.18px;
  height: 6.94px;
  opacity: 1;
  background: #ccc;
  border-radius: 50%;
}
</style>
