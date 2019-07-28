<template>
    <div class="container">
        <h1 class="big">{{speed}}</h1>
    </div>
</template>

<script>
  module.exports = {
    name: "speedometer",
    data() {
      return {
        watcher: undefined,
        speed: 0,
      }
    },
    mounted() {
      this.watcher = navigator.geolocation.watchPosition(this.handlePosition, undefined, {enableHighAccuracy: true});
    },
    beforeDestroy() {
      navigator.geolocation.clearWatch(this.watcher);
    },
    methods: {
      handlePosition(position) {
        this.speed = position.coords.speed || 0
      }
    }
  };
</script>

<style scoped>
    .big {
        text-align: center;
        color: white;
        display: block;
        height: 100vh;
        line-height: 100vh;
        font-size: 6rem;
        padding-top: 0px;
        margin: 0;
    }
</style>
