<template>
  <div id="app">
    <!-- <AppMenu></AppMenu> -->
    <app-menu></app-menu>
    <router-view id="app__view" />
  </div>
</template>

<script>
import AppMenu from '@/components/AppMenu'
export default {
  name: 'app',
  components: { AppMenu },
}
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  // margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', '微軟正黑體', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  width: 100%;
  color: #212529;
  text-align: left;
  background-color: #fff;
}

#app__view {
  width: 100%;
}

/* HTML5 display-role reset for older browsers */

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
</style>
