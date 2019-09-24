<template>
  <div class="wrapper">
    <header>
      <nav-menu :links="nav_links"></nav-menu>
      <div class="btn-menu btn-menu--m_show">
        <div class="btn-menu__other-link"></div>
        <div class="btn-menu__search-box"></div>
      </div>
    </header>
    <main>
      <transition name="fade" mode="out-in" @beforeEnter="beforeEnter" appear>
        <!-- <keep-alive><router-view> </router-view></keep-alive> -->
        <router-view> </router-view>
      </transition>
      <!-- <router-view>
        <i-breadcrumb slot="crumb"></i-breadcrumb>
      </router-view> -->
    </main>
    <aside class="btn-gotop btn-gotop--fixed">
      <a class="btn-gotop__link" href="#header_logo"></a>
    </aside>
    <footer>
      <p>
        國立虎尾科技大學 地方創生計畫 wjc &copy; 2019
      </p>
    </footer>
  </div>
</template>

<script>
// import AppMenu from '@/components/AppMenu'
import links_iSimple from '@/components/iSimple/links.js'
export default {
  name: 'isimple',
  data() {
    return {
      nav_links: links_iSimple,
    }
  },
  methods: {
    beforeEnter(el) {
      console.log(el, window.scrollY)
      this.$root.$emit('scrollBeforeEnter')
      // done()
    },
  },
  // components: { 'app-menu': AppMenu },
}
</script>

<style lang="scss">
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

.btn {
  background: $color-dark;
  color: $color-light;
  padding: 0.6rem 1.3rem;
  text-decoration: none;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.6s;
  &:hover {
    background: $color-light;
    color: $color-dark;
  }
}

.wrapper {
  > header {
    box-shadow: $shadow-default;
    background-color: $color-light;
    position: sticky;
    top: 0;
    padding: 0 10vw;
    z-index: 1000;
    .btn-menu {
      display: none;
    }
  }
  > main {
    display: grid;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

section {
  .box {
    background: $color-light;
    border: $color-dark solid 2px;
    padding: 2rem;
    text-align: center;
    box-shadow: $shadow-default;
  }
}

.btn-gotop {
  &--fixed {
    width: 100%;
    position: fixed;
    bottom: 0;
    right: 10%;
    z-index: 50;
  }

  &__link {
    width: 42px;
    height: 42px;
    opacity: 0;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    position: absolute;
    left: 100%;
    bottom: 0;
    border: 1px solid #333;
    background: #fff;
  }
}

footer {
  margin-top: 2rem;
  background: $color-dark;
  color: $color-light;
  text-align: center;
  padding: 1rem;
}
</style>
