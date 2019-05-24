import Vue from "../../web_modules/vue/dist/vue.esm.browser.js";
import VueRouter from "../../web_modules/vue-router.js";
import { html5HistoryMode } from "../config.js";
import httpVueLoader from '/web_modules/http-vue-loader/src/httpVueLoader.js'

Vue.use(VueRouter);

const routes = [
    {path: "/", component: httpVueLoader('/src/views/compass.vue')}
];

const router = new VueRouter({
  routes: routes,
  mode: html5HistoryMode ? "history" : undefined
});

export default router;
