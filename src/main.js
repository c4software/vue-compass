import Vue from "../web_modules/vue/dist/vue.esm.browser.js";
import { debug } from "./config.js";

// Enable VueJS Debug
Vue.config.devtools = debug;

new Vue({
  el: "#app"
});
