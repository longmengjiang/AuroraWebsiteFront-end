import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Join from "@/views/Join.vue";
import Setting from "@/views/Setting.vue";

Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {path: "/",redirect: '/home',},
    {path: "/home", component: Home},
    {path: "/about", component: About},
    {path: "/join", component: Join},
    {path: "/setting", component: Setting},
  ],
  // 有路由往这扔，记得import导入，格式 {path: '/xxx' 路径名, component: xxx 组件名}
});
export default router;
