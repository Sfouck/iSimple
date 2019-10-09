<template>
  <div id="app">
    <!-- <app-menu></app-menu> -->
    <router-view id="app__view" />
  </div>
</template>

<script>
// import AppMenu from '@/components/AppMenu'
export default {
  name: 'app',
  // components: { AppMenu },
}
</script>

<style lang="scss">
// @import './style/reset.css';
@import './style/normalize.css';
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', '微軟正黑體', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  width: 100%;
  background-color: rgba(0, 0, 0, 0);
}

#app__view {
  width: 100%;
}
</style>
