import Vue from "../web_modules/vue/dist/vue.esm.browser.js";
import { debug } from "./config.js";

// Enable VueJS Debug
Vue.config.devtools = debug;

new Vue({
  el: "#app",
  data() {
    return {
      alpha: 0,
      beta: 0,
      gamma: 0
    };
  },
  mounted() {
    window.addEventListener("deviceorientation", evt => {
        this.alpha = evt.alpha;
        this.beta = evt.beta;
        this.gamma = evt.gamma;
      },
      false
    );
  },
  computed: {
    angle() {
      return `transform: rotate(${this.alpha || 45}deg)`;
    }
  }
});
