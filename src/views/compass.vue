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

<style scoped>

#container {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 140px;
  height: 140px;
  margin: -70px 0 0 -70px;
}

.compass {
  transform: rotate(45deg);
  position: absolute;
  width: 100%;
  height: 100%;
  background: #444;
  border-radius: 0 50% 50% 50%;
  border: 10px solid white;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  border-right-color: coral;
  border-bottom-color: coral;
  transition: all 0.2s;
  box-sizing: border-box;
}

</style>
