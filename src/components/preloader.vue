<template>
  <div  v-if="loading" class="position-absolute preloader d-flex flex-row justify-center align-center bg-white transition">
    <span :style="{width:oWidth,height:oHeight}" class="outer">
      <span :style="{width:iWidth,height:iHeight,right:right,bottom:bottom}" class="inner"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: "preloader",
  props:['loading','oWidth','oHeight','iWidth','iHeight','right','bottom']
}
</script>

<style lang="scss">
.preloader{
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 44;
}
.preloader .outer{
  display: inline-block;
  border-radius: 50%;
  border: 5px solid rgba(96,55,200,0.8);
  position: relative;
}
.preloader .inner{
  display: inline-block;
  position: absolute;
  background-color: white;
  animation: rotate infinite 1s linear;
}
@keyframes rotate {
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}

</style>