<template>
  <div id="app">
    <router-view name="nav"></router-view>
    <transition name="fade" mode="out-in">
      <router-view name="body"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="css">
.fade-enter-active, .fade-leave-active {
  transition: all 1s;
  max-height: 1600px;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  max-height: 0;
}
</style>
