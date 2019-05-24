<template>
    <div id="container">
        <div class="compass" :style="angle"></div>
    </div>
</template>

<script>
module.exports = {
  name: "compass",
  data() {
    return {
      alpha: 0,
      beta: 0,
      gamma: 0
    };
  },
  mounted() {
    window.addEventListener(
      "deviceorientation",
      evt => {
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
};
</script>
